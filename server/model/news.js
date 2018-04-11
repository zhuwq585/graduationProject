function news(){
  var temp = require('../database/db.js');
  this.db = new temp();
  this.collectionName = 'news'
}
news.prototype = {
  addNews: function(dataObj, callback){
    console.log(dataObj);
    dataObj.date = new Date();
    this.db.insertOneP(dataObj, this.collectionName, function(){
      if(callback)
        callback();
    })
  },
  deleteNews: function(newsId, callback){
    this.db.deleteFirstOne({id: newsId}, this.collectionName, function(){
      if(callback)
        callback();
    })
  },
  getNews: function(newsId, callback){
    this.db.search({id:newsId}, this.collectionName, function(result){
      //console.log(result);
      if(callback)
        callback(result[0]);
    })
  },
  getNewsList: function(callback){
    this.db.search({}, this.collectionName, function(result){
      for(var i in result){
        delete result[i]["content"];
        delete result[i]['_id'];
      };
      if(callback)
        callback(result);
    })

  }
}
module.exports = news;
