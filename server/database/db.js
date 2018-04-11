function MyDb(){
  //引入配置文件对象
  this.config = JSON.parse(require('fs').readFileSync(global.prefixPath + '/database/dbConfig.json'));
  this.connection = require('mongodb').MongoClient;
}
MyDb.prototype = {
  setUrl: function(url){
    this.config.url = url;
    return this;
  },
  setDb: function(dbName){
    this.config.db = dbName;
    return this;
  },
  insertOneP: function(dataObj, collectionName, callback){
    var config = this.config,
        dbObj = this;
    this.connection.connect(config.url, function(err, db){
      if(err) throw err;
      db.db(config.db).collection("length").find({"name":collectionName}).toArray(function(err ,result){
        if(err) throw err;
        var newId = result[0]["length"] + 1;
        dataObj.id = newId;
        //console.log(dataObj);
        db.db(config.db).collection(collectionName).insertOne(dataObj, function(err, res){
          if(err) throw err;
          //console.log(res);
          db.db(config.db).collection("length").updateOne({"name":collectionName},{$set: {"length": newId}},function(err,res){
            if(err) throw err;
            db.close();
          });
          if(callback)
            callback();
        })
      })
    })
  },
  insertOne: function(dataObj, collectionName, callback){
    var config = this.config;
    this.connection.connect(config.url,function(err, db){
      if(err) throw err;
      //console.log('connected.');
      db.db(config.db).collection(collectionName).insertOne(dataObj,function(err, res){
        if(err)  throw err;
        console.log('insert one in ' + collectionName + ' success');
        db.close();
        if(callback)
          callback();
      })
    });
    return this;
  },
  insertMany: function(dataObjArr, collectionName, callback){
    var config = this.config;
    this.connection.connect(config.url,function(err, db){
      if(err) throw err;
      db.db(config.db).collection(collectionName).insertMany(dataObjArr, function(err, res){
        if(err) throw err;
        console.log('insert ' + dataObjArr.length + ' documents in ' + collectionName +'.');
        db.close();
        if(callback)
          callback();
      });
    });
    return this;
  },
  search: function(searchPatternObj, collectionName, callback){
    var config = this.config;
    // console.log(searchPatternObj);
    this.connection.connect(config.url,function(err, db){
      if(err) throw err;
      db.db(config.db).collection(collectionName).find(searchPatternObj).toArray(function(err, result){
        console.log(searchPatternObj);
        if(err) throw err;
        //console.log("search result: " + result);
        //console.log(result);
        db.close();
        if(callback)
          callback(result);
      });
    });
    return this;
  },
  updateFirstOne: function(searchPatternObj, updatePatternObj, collectionName, callback){
    var config = this.config;
    this.connection.connect(config.url, function(err, db){
      if(err) throw err;
      db.db(config.db).collection(collectionName).updateOne(searchPatternObj, updatePatternObj, function(err, res){
        if(err) throw err;
        console.log('update success');
        db.close();
        if(callback)
          callback();
      })
    })
    return this;
  },
  updateAll: function(searchPatternObj, updatePatternObj, collectionName, callback){
    var config = this.config;
    this.connection.connect(this.config.url,function(err, db){
      if(err) throw err;
      db.db(config.db).collection(collectionName).updateMany(searchPatternObj, updatePatternObj, function(err, res){
        if(err) throw err;
        console.log(res.result.nModified + " documents were updated.");
        db.close();
        if(callback)
          callback();
      })
    })
    return this;
  },
  deleteFirstOne: function(searchPatternObj, collectionName, callback){
    var config = this.config;
    this.connection.connect(this.config.url,function(err, db){
      if(err) throw err;
      db.db(config.db).collection(collectionName).deleteOne(searchPatternObj, function(err, obj){
        if(err) throw err;
        console.log(obj + ' in ' + collectionName + ' is being deleted');
        db.close();
        if(callback)
          callback();
      });
    });
    return this;
  },
  deleteAll: function(searchPatternObj, collectionName, callback){
    var config = this.config;
    this.connection.connect(this.config.url,function(err, db){
      if(err) throw err;
      db.db(config.db).collection(collectionName).deleteMany(searchPatternObj, function(err, obj){
        if(err) throw err;
        console.log(obj.result.n + ' documents:  ' + obj + ' in ' + collectionName + ' are being deleted');
        db.close();
        if(callback)
          callback();
      });
    })
    return this;
  },
  sort: function(type, searchPatternObj, collectionName, callback){ //type: 1 -1
    var config = this.config;
    this.connection.connect(this.config.url,function(err, db){
      if(err) throw err;
      db.db(config.db).collection(collectionName).find(searchPatternObj).sort({type: type}).toArray(function(err, result){
        if(err) throw err;
        db.close();
        if(callback)
          callback(result);
      });
    })
    return this;
  },
  limit: function(collectionName, limitArr, callback){
     // limitArr[skipNum, limitNum]
     var config = this.config;
     this.connection.connect(this.config.url,function(err, db){
       if(err) throw err;
       db.db(this.config.db).connection(collectionName).skip(limitArr[0]).limit(limitArr[1]).toArray(function(err, result){
         if(err)  throw error;
         db.close();
         if(callback)
           callback(result);
       });
     })
     return this;
  }
}
module.exports = MyDb;
