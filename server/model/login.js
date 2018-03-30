function Login(type){  //type 1:stu 2:mgr
  var temp = require('../database/db.js');
  this.db = new temp();
  this.collectionName = 'userStu';
}
Login.prototype = {
  getPassword: function(userName, callback){
    var password;
    this.db.search({
      name: userName
    },this.collectionName, function(result){
      password = result[0].password;
      if(callback)
        callback(password);
    });
  },
  setCollectionName: function(type){
    if(type == 1){
      this.collectionName = 'userStu';
    }else if(type == 2){
      this.collectionName = 'mgrStu';
    }else {
      console.log('login type error');
    }
    return this;
  },
  login: function(type, iUserName, iPassWord, callback){
    this.setCollectionName(type).getPassword(iUserName,function(password){
      var result = false;
      if(password == iPassWord){
        result = true;
      }
      if(callback)
        callback(result);
    })
  }
}//https://www.cnblogs.com/mingjiatang/p/7495321.html
module.exports =  Login;
