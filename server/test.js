var express = require('express'),
	app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

// add routes
//require('./routes.js')(app);

//开发用测试路由
app.get('/resume',function(req,res){
	res.render('resume',{layout:'main'});
})
app.get('/test',function(req,res){
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.json({'name':'aaaa'});
	res.end();
})

app.listen(app.get('port'), function(){
	console.log( 'express started on localhost:' + app.get('port') + 'press ctrl-c to terminate' );
});
