//控制层组件   完成登录与注册的控制
var loginFunc = require('../model/login.js');
var setHeader = require('./setHeader.js').setHeader;

exports.login = function(req, res){ //query body.....
  setHeader(res);
  var loginObj = new loginFunc();
  loginObj.login(req.query.userType,
              req.query.userName,
              req.query.password,
              function(loginResult){
                if(loginResult){
                  req.session.regenerate(function(err){
                    if(err) {
                      return res.json({
                        msg: 'login failed'
                      })
                    }
                    req.session.userName = req.query.username;
                    res.json({
                      status: 100,
                      msg: 'login success.',
                      data: {
                        userName: req.query.userName
                      }
                    });
                    console.log('aaa');
                  });
                }else{
                  res.json({
                    status: 99,
                    msg: 'login failed.'
                  });
                }
                res.end();
              });
};
