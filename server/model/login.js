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
      callback();
    });
  },
  setCollectionName: function(type){
    if(type == 1){
      this.collectionName = '';
    }else if(type == 2){
      this.collectionName = '';
    }else {
      console.log('login type error');
    }
    return this;
  },
  login: function(type, iUserName, iPassWord){
    return this.setCollectionName(type).getPassword(iUserName) == iPassWord;
  }
}//https://www.cnblogs.com/mingjiatang/p/7495321.html
module.exports =  Login;
