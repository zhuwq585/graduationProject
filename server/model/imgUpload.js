var formidable = require('formidable'),
    fs = require('fs');
function imgUpload(){
    this.domain = "http://localhost:8082";
    this.UPLOAD_FOLDER = '/img/';
}
imgUpload.prototype = {
  upload: function(req, callback){
    var result = {
      status: false,
      url: '',
      msg: ''
    },
    upLoadObj = this;

    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';                        //设置编辑
    form.uploadDir = 'public' + this.UPLOAD_FOLDER; //设置上传目录
    form.keepExtensions = true;     //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
    form.parse(req, function(err, fields, files){
      if (err) {
        result = {
          status: false,
          url: '',
          msg: '上传失败'
        }
        if(callback)
          callback(result);
        throw err;
        return;
      };

      var extName = '';
      switch (files.img.type) {
        case 'image/pjpeg':
          extName = 'jpg';
          break;
        case 'image/jpeg':
          extName = 'jpg';
          break;
        case 'image/png':
          extName = 'png';
          break;
        case 'image/x-png':
          extName = 'png';
          break;
      }
      if(extName.length == 0){
        //res.locals.error = '只支持png和jpg格式图片';
        result = {
          status: false,
          url: '',
          msg: '只支持png和jpg格式图片'
        }
        if(callback)
          callback(result);
        return;
      };

      var avatarName = Math.random() + '.' + extName,
          newPath = form.uploadDir + avatarName,
          showUrl = upLoadObj.domain + upLoadObj.UPLOAD_FOLDER + avatarName;
      fs.renameSync(files.img.path, newPath);  //重命名
      result = {
        status: true,
        url : showUrl,
        msg: "上传成功"
      }
      if(callback)
        callback(result);
    })
  }
}
module.exports = imgUpload;
