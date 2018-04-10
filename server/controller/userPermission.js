//控制层组件   完成登录与登录状态验证
var loginModel = require('../model/login.js');

exports.login = function(req, res){ //query body.....
  var loginObj = new loginModel();
  loginObj.login(req.query.userType,
              req.query.userName,
              req.query.password,
              function(loginResult){
                if(loginResult){
                  req.session.userName = req.query.userName;
                  res.json({
                      loginStatus: 200,
                      msg: 'login success.',
                      data: {
                        userName: req.query.userName
                      }
                    });
                    res.end();
                }else{
                  res.json({
                    loginStatus: 99,
                    msg: 'login failed.'
                  });
                  res.end();
                }
              });
};
exports.logout = function(req, res){
  setHeader(res);
  delete req.session.userName;
  res.json({
    msg: '已退出'
  });
  res.end();
}
exports.ifLog = function(req, res){
  setHeader(res);
  res.end();
  return !!req.session.user;
}
