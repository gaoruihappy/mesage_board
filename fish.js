module.exports = function(req,res){
 	var name;
 	if (req.query.name=='xiaowang') {
	  name = req.query.name;
	  }else {
	  	name = "美女";
	  }
 	res.send(JSON.stringify({
 		name:name
 	}));
 }