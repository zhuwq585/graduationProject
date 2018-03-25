model.exports = function(){
  return {

  }
}
function mDb(){
  this.url = '',
  this.mongoose = require('mongodb');
}
mDb.prototype = {
  setUrl: function(url){
    this.url = url;
  },
  conntect : function(){
    this.mongoose.connect(this.url,function(err){
      if(!err)
        console.log('mongo connected');
        else console.log('mongo connecting error')
    });
  },
  end: function(){
    this.mongoose.disconnect(function(){
      console.log('mongo connection off');
    });
  },
  search:function(){

  }
}
