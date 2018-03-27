function mDb(){
  //引入配置文件对象
  this.config = JSON.parse(require('fs').readFileSync('dbConfig.json'));
  this.connection = require('mongodb').MongoClient;
}
mDb.prototype = {
  setUrl: function(url){
    this.config.url = url;
    return this;
  },
  showUrl: function(){
    return this.config.url;
  },
  setDb: function(dbName){
    this.config.db = dbName;
    return this;
  },
  insertOne: function(dataObj,collectionName){
    var config = this.config;
    this.connection.connect(config.url,function(err, db){
      if(err) throw err;
      console.log('connected.');
      db.db(config.db).collection(collectionName).insertOne(dataObj,function(err, res){
        if(err)  throw err;
        console.log('insert one in ' + collectionName + ' success');
        db.close();
      })
    });
    return this;
  },
  insertMany: function(dataObjArr,collectionName){
    var config = this.config;
    this.connection.connect(config.url,function(err, db){
      if(err) throw err;
      db.db(config.db).collection(collectionName).insertMany(dataObjArr, function(err, res){
        if(err) throw err;
        console.log('insert ' + dataObjArr.length + ' documents in ' + collectionName +'.');
        db.close();
      });
    });
    return this;
  },
  search: function(searchPatternObj, collectionName){
    var resultObj = [],
        config = this.config;
    this.connection.connect(config.url,function(err, db){
      if(err) throw err;
      db.db(config.db).collection(collectionName).find(searchPatternObj).toArray(function(err, result){
        if(err) throw err;
        console.log("search result: " + result);
        resultObj = result;
        db.close();
      });
    });
    return resultObj;
  },
  updateFirstOne: function(searchPatternObj, updatePatternObj, collectionName){
    var config = this.config;
    this.connection.connect(config.url,function(err, db){
      if(err) throw err;
      db.db(config.db).collection(collectionName).updateOne(searchPatternObj, updatePatternObj, function(err, res){
        if(err) throw err;
        console.log('update success');
      })
    })
    return this;
  },
  updateAll: function(searchPatternObj, updatePatternObj, collectionName){
    var config = this.config;
    this.connection.connect(this.config.url,function(err, db){
      if(err) throw err;
      db.db(config.db).collection(collectionName).updateMany(searchPatternObj, updatePatternObj, function(err, res){
        if(err) throw err;
        console.log(res.result.nModified + " documents were updated.");
      })
    })
    return this;
  },
  deleteFirstOne: function(searchPatternObj, collectionName){
    var config = this.config;
    this.connection.connect(this.config.url,function(err, db){
      if(err) throw err;
      db.db(this.config.db).collection(collectionName).deleteOne(searchPatternObj, function(err, obj){
        if(err) throw err;
        console.log(obj + ' in ' + collectionName + ' is being deleted');
      });
    });
    return this;
  },
  deleteAll: function(searchPatternObj, collectionName){
    var config = this.config;
    this.connection.connect(this.config.url,function(err, db){
      if(err) throw err;
      db.db(config.db).collection(collectionName).deleteMany(searchPatternObj, function(err, obj){
        if(err) throw err;
        console.log(obj.result.n + ' documents:  ' + obj + ' in ' + collectionName + ' are being deleted');
      });
    })
    return this;
  },
  sort: function(type, searchPatternObj, collectionName){ //type: 1 -1
    var config = this.config,
        resultObj = [];
    this.connection.connect(this.config.url,function(err, db){
      if(err) throw err;
      db.db(config.db).collection(collectionName).find(searchPatternObj).sort({type: type}).toArray(function(err, result){
        if(err) throw err;
        resultObj = result;
      });
    })
    return resultObj;
  },
  limit: function(collectionName, limitArr){
     // limitArr[skipNum, limitNum]
     var config = this.config,
        resultObj = [];
     this.connection.connect(this.config.url,function(err, db){
       if(err) throw err;
       db.db(this.config.db).connection(collectionName).skip(limitArr[0]).limit(limitArr[1]).toArray(function(err, result){
         if(err)  throw error;
         resultObj = result;
       });
     })
     return resultObj;
  }
}
module.exports = mDb;
