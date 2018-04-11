var temp = require('../model/imgUpload.js');
var imgUpload = new temp();
exports.imgUpload = function(req, res){
  imgUpload.upload(req, function(result){
    if(result.status){
      res.json({url: result.url});
      res.end();
    }
    else{
      res.json({
        msg: result.msg
      });
      res.end();
    }
    console.log(res.header);
  })
}
