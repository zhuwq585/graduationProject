//路由控制  调用相应的控制层方法
var Userpermission = require('./controller/userPermission.js'),
		UserMgr = require('./controller/userMgr.js'),
		other = require('./controller/other.js'),
		news = require('./controller/newsContraller.js');

module.exports = function(app){
	app.get('/login', Userpermission.login);
	app.get('/logout', Userpermission.logout);
	app.get('/ifLog', Userpermission.ifLog);

	app.get('/signUp', UserMgr.signUp);
	app.get('/remove', UserMgr.remove);

	app.post('/imgUpload', other.imgUpload);

	app.post('/addNews', news.addNews);
	app.get('/getNews', news.getNews);
	app.get('/deleteNews', news.deleteNews);
	app.get('/getNewsList', news.getNewsList);
};
