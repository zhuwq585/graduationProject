function SignUp(){
  var temp = require('../database/db.js');
  this.db = new temp();
  this.collectionName = '';
}
SignUp.prototype = {
  setCollectionName: function(type){ //type 1:stu 2:mgr
    if(type == 1){
      this.collectionName = 'userStu';
    }else if(type == 2){
      this.collectionName = 'mgrStu';
    }else {
      console.log('login type error');
    }
    return this;
  },
  signUp: function(dataObj, callback){
    console.log(dataObj);
    var dbObj = this.db,
        thisObj = this;
    this.db.setCollectionName(dataObj.type).search({
      'userName': dataObj.userName
    },function(result){
        var insertResult = false;
        delete dataObj.type;
        if(result.length == 0){
          dbObj.insertOne(dataObj, thisObj.collectionName);
          insertResult = true;
        }
        if(callback)
          callback(insertResult);
    })
  },
  remove: function(dataObj, callback){
    var thisObj = this;
    this.db.setCollectionName(dataObj.type).deleteFirstOne({
      'userName': dataObj.userName
    },thisObj.collectionName,function(){
      if(callback)
        callback();
    })
  },
}
module.exports = SignUp;
