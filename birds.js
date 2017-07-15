var express = require('express');
var router = express.Router();

// 该路由使用的中间件
router.use(function(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.use(function(req, res, next) {
  console.log('Time: ', req.query);
  if (req.query.to=='baidu') {
  	res.redirect("http://www.baidu.com");
  }
  else {
  	next();
  }
});

// 定义网站主页的路由
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// 定义 about 页面的路由
router.all('/about', function(req, res) {
  res.send('About birds');
  //JSON.stringify()
});
// 定义 path参数 页面的路由
router.get('/order/:orderid', function(req, res) {
  res.send('Name:'+req.params.orderid);
});
// 定义 QR 页面的路由
router.get('/qr', function(req, res) {
  //res.send('Name:'+req.params.orderid);
  var qr = require('qr-image');
  var img = qr.image(req.query.text,{size :200,type:'jpg'});
        res.type('jpg');
        img.pipe(res);
});

module.exports = router;