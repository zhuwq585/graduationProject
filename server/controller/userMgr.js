//用户管理：  注册 查询 删除
var signUpModel = require('../model/signUp.js'),
    setHeader = require('./setHeader.js').setHeader;

exports.signUp = function(req, res){
  var signUpObj = new signUpModel();
  setHeader(res);
  signUpObj.signUp(req.query, function(result){
    if(result){
      res.json({
        msg: '注册成功'
      });
      res.end();
    }else{
      res.json({
        msg: '注册失败，用户名已被使用'
      });
      res.end();
    }
  });
}

exports.remove = function(req, res){
  var signUpObj = new signUpModel();
  setHeader(res);
  signUpObj.remove(req.query, function(){
    res.json({
      msg: '已删除'
    });
    res.end();
  })
}
