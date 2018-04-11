var temp = require('../model/news.js');
var news = new temp();
exports.addNews = function(req, res){
  news.addNews(req.body, function(){
    res.json({
      msg: '添加成功'
    });
    res.end();
  });
}
exports.getNews = function(req, res){
  news.getNews(req.query.id*1, function(data){
    //console.log(data);
    res.json(data);
    res.end();
  })
}
exports.deleteNews = function(req, res){
  news.deleteNews(req.query.id*1, function(){
    res.json({
      msg: '删除成功'
    });
    res.end();
  })
}
exports.getNewsList = function(req, res){
  news.getNewsList(function(data){
    res.json(data);
    res.end();
  });
}
