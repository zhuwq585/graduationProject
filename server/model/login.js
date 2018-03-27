function login(type){  //type 1:stu 2:mgr
  this.db = new require('../database/db.js')();
  this.collectionName = '';
}
login.prototype = {
  getPassword: function(userName){
    return this.db.search({
      name: userName
    },this.collectionName).password;
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

  }
}//https://www.cnblogs.com/mingjiatang/p/7495321.html
module.exports = new login();
