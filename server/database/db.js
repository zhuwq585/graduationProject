function mDb(){
  //引入配置文件对象
  this.config = JSON.parse(require('fs').readFileSync('dbConfig.json'));
  this.connection = require('mongodb').MongoClient;
  this.database = undefined;
}
mDb.prototype = {
  setUrl: function(url){
    this.config.url = url;
    return this;
  },
  setDb: function(dbName){
    this.config.db = dbName;
    return this;
  },
  connect: function(){
    this.connection.connect(this.config.url,function(err, db){
      if(err) throw err;
      console.log('MongoDb connected.');
      this.database = db.db(this.config.db);
    });
    return this;
  },
  end: function(){
    this.connection.close(function(){
      console.log('Connection closed.');
    });
    return this;
  },
  insertOne: function(dataObj,collectionName){
    this.connect();
    this.database.collection(collectionName).insertOne(dataObj,function(err, res){
      if(err) {
        this.end();
        throw err;
      }
      console.log('insert one in ' + collectionName + ' success');
    })
    this.end();
    return this;
  },
  insertMany: function(dataObjArr,collectionName){
    this.connect();
    this.database.collection(collectionName).insertMany(dataObjArr, function(err, res){
      if(err){
        this.end();
        throw err;
      }
      console.log('insert ' + dataObjArr.length + ' documents in ' + collectionName +'.');
    });
    this.end();
    return this;
  },
  search: function(searchPatternObj, collectionName){
    this.connect();
    var result = this.database.collection(collectionName).find(searchPatternObj).toArray(function(err, result){
      if(err){
        this.end();
        throw err;
      }
      console.log("search result: " + result);
      return result;
    });
    this.end();
    return result;
  },
  updateFirstOne: function(searchPatternObj, updatePatternObj, collectionName){
    this.database.collection(collectionName).updateOne(searchPatternObj, updatePatternObj, function(err, res){
      if(err){
        this.end();
        throw err;
      }
      console.log('update success');
    })
    this.end();
    return this;
  },
  updateAll: function(searchPatternObj, updatePatternObj, collectionName){
    this.database.collection(collectionName).updateMany(searchPatternObj, updatePatternObj, function(err, res){
      if(err){
        this.end();
        throw err;
      }
      console.log(res.result.nModified + " documents were updated.");
    })
    this.end();
    return this;
  },
  deleteFirstOne: function(searchPatternObj, collectionName){
    this.database.collection(collectionName).deleteOne(searchPatternObj, function(err, obj){
      if(err){
        this.end();
        throw err;
      }
      console.log(obj + ' in ' + collectionName + ' is being deleted');
    });
    this.end();
    return this;
  },
  deleteAll: function(searchPatternObj, collectionName){
    this.database.collection(collectionName).deleteMany(searchPatternObj, function(err, obj){
      if(err){
        this.end();
        throw err;
      }
      console.log(obj.result.n + ' documents:  ' + obj + ' in ' + collectionName + ' are being deleted');
    });
    this.end();
    return this;
  },//http://www.runoob.com/nodejs/nodejs-mongodb.html
  sort: function(type, searchPatternObj, collectionName){ //type: 1 -1
    var result = this.database.collection(collectionName).find(searchPatternObj).sort({type: type}).toArray(function(err, result){
      if(err){
        this.end();
        throw err;
      }
      return result;
    });
    this.end();
    return result;
  },
  limit: function(){
    
  }

}
module.exports = mDb;
