var express = require('express');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var app = express();
var messageList=[];
app.set('view engine', 'jade');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
var random = Math.random();
app.get('/', function (req, res) {
	//预防xss 3
   // res.cookie("name", 'lianjia', { httpOnly: true });
   res.cookie("age", '18');
  res.render('index', { title: 'xss', message: '','_csrf':random});
});
app.get('/message', function (req, res) {
	console.log(req.headers.referer)
	var str = req.headers.referer;
	//tianjia csrftoken
	//预防csrf 2
	// if(str === undefined){
	// 	res.send('');
	// 	return;
	// }else if(str.indexOf('http://localhost:3000')!==0){
	// 	res.send('');
	// 	return;
	// }
	//预防xss
	if(req.query.message){
		//添加''校验
		//预防xss 1
		// req.query.message = req.query.message.replace(/</g,"&lt;"); 
		// req.query.message = req.query.message.replace(/>/g,"&gt;"); 
		messageList.push(req.query.message);
	}
	// messageList.push(req.query.message);
    res.send(messageList);
});
app.post('/postFormData', function(req, res, next) {
  console.log(req.body);
  //预防csrf 3:
  // if(req.body._csrf==random){
  // 	res.send({error:0,text:"提交成功"})
  // }else{
  // 	res.send({error:1,text:"提交失败"})
  // }
  res.send({error:0,text:"提交成功"})
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
