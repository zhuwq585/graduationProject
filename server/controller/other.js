var imgUpload = require('../model/imgUpload.js');
var b = new imgUpload();
exports.imgUpload = function(req, res){
  b.upload(req, function(result){
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
