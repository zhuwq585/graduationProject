exports.admin = function (req,res) {
	res.render('admin/index', {layout: null});
}

exports.add = function(req,res) {
	res.render('admin/add',{layout: null});
}
exports.lists = function(req,res) {
	res.render('admin/lists',{layout: null});
}
exports.login = function(req,res) {
	res.render('admin/login',{layout: null});
}

exports.addArticle = function(req,res) {
	var insert = 'insert into articles(title,content,class) values("' + req.query.title + '","' + req.query.content + '","' + req.query.class + '")';
	console.log(req.query);
	conn.connect();
	conn.query(insert, function(err){
		if(err) console.log(err);
	})
	conn.end();
	res.render('admin/add',{layout:null});
}
