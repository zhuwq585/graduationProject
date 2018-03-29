var login = new require('../model/login.js')();
var setHeader = require('./setHeader.js').setHeader;

exports.login = function(req, res){
  setHeader(res);
  if(login.login(req.body.userType, req.body.userName, req.body.password)){
    req.session.userName = req.body.username;
    res.json({
      status: 100,
      msg: 'login success.',
      data: {
        userName: req.body.userName
      }
    });
    res.end();
  }else{
    res.json({
      status: 99,
      msg: 'login failed.'
    });
    res.end();
  }
}
