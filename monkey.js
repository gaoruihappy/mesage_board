var express = require('express');
var router = express.Router();
 router.get('/',function(req,res){
 	// res.send('hello');
 	if (req.query.name=='xiaowang') {
	  	var name = req.query.name;
	  }
 	var http = require('http');
 	http.get('http://localhost:3000/monkey/fish?name='+name, function(ress){
 		//console.log(res);
		var rawData ='';
 		ress.on('data',function (chunk){
 			rawData += chunk
 		});
 		ress.on('end', () => {
		    try {
 				// console.log('aa')
 				var b = JSON.parse(rawData);
 				res.send('<script>console.log("'+b.name+'")</script>')
		    } catch (e) {
		      	console.log(e.message);
		    }
		  });
 	})
 })
 router.get('/fish',require('./fish.js'))
 router.get('/myq',function(req, res){
 	var name = req.query.name;
 	var age = req.query.age;
 	var sex = req.query.sex;
 	var mysql = require('mysql');
 	var connection = mysql.createConnection({
 		host: 'localhost',
 		user: 'root',
 		database:'test'

 	});
 	connection.connect();
 	connection.query("INSERT INTO INFO (username,age,sex) values ('"+name+"','"+age+"','"+sex+"');",function(err, rows,fields){
 		console.log(err);
 	})
 	connection.end();
 	res.send('hello');
 })
 router.get('/myq/detail',function(req, res){
 	var name = req.query.name;
 	var mysql = require('mysql');
 	var connection = mysql.createConnection({
 		host: 'localhost',
 		user: 'root',
 		database:'test'
 	});
 	connection.connect();
 	console.log("select * from info where username='"+name+"';");
 	/*connection.query("select * from info where username='"+name+"';",function(err, rows,fields){
 		console.log(rows,err);
 	})*/
     connection.query("select * from info where username=?",[name],function(err, rows,fields){
         console.log(rows,err);
     })
 	connection.end();
 	res.send('hello');
 })
 router.get('/myq/del',function(req, res){
 	var name = req.query.name;
 	var mysql = require('mysql');
 	var connection = mysql.createConnection({
 		host: 'localhost',
 		user: 'root',
 		database:'test'
 	});
 	connection.connect();
 	connection.query("delete from info where username='"+name+"';",function(err, rows,fields){
 		console.log(rows);
 	})
 	connection.end();
 	res.send('hello');
 })
  router.get('/myq/edit',function(req, res){
 	var name = req.query.name;
 	var mysql = require('mysql');
 	var connection = mysql.createConnection({
 		host: 'localhost',
 		user: 'root',
 		database:'test'
 	});
 	connection.connect();
 	connection.query("select * from info where username='"+name+"';",function(err, rows,fields){
 		if(rows[0].sex=="nv"){
 			connection.query("update info set age=18 where username='"+name+"';",function(err, rows,fields){
 				console.log(err);
 				connection.end();

 			})
 		}
 		console.log(rows);
 	})
 	res.send('hello');
 })
module.exports = router;