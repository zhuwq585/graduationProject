var blog = require('./routes/blog.js'),
	admin = require('./routes/admin.js');

module.exports = function(app){
	app.get('/', blog.home);
	app.get('/resume', blog.resume);
	app.get('/article',blog.article);
	app.get('/list',blog.list);

	app.get('/admin',admin.admin);
	app.get('/admin/index',admin.admin);
	app.get('/admin/add',admin.add);
	app.get('/admin/lists',admin.lists);
	app.get('/admin/login',admin.login);

	app.get('/admin/addArticle',admin.addArticle);
};