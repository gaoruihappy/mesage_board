function getList(){
	$.ajax({
        url: 'http://127.0.0.1:3000/message?message=csrfCome',
        type: 'GET',
        dataType: 'json',
        async: false,
        success: function(res) {
        	
        }
    });
}
function submitData(){
        $.ajax({
        url: 'http://127.0.0.1:3000/postFormData',
        type: 'POST',
        dataType: 'json',
        async: false,
        data:{
            _csrf: Math.random()
        },
        success: function(res) {
            
        }
    });
}
// getList();
$('.bt').on("click",function(){
    getList();
})
$('.submitData').on("click",function(){
    submitData();
})
