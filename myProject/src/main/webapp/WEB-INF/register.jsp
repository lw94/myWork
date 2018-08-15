<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>李伟博客注册</title>
	<script type="text/javascript" src="js/register.js"></script>
	<link rel="stylesheet" type="text/css" href="css/register.css">
</head>
<body>
	  <form action="/myProject/doRegister" method="post">
      请输入用户名<input type="text" name="username" >
        <br>
<p>用户密码：
<input type="password" name="password" value="" id="password" 
maxlength="30" size="30" style="width:20%"  /></p>
<p>确认密码：
<input type="password" name="password_check" value="" 
id="password_check" maxlength="30" size="30" style="width:20%" onblur="check()"  />
 
<span id="warning"></span>
</p>


   请输入手机号码 <input type="text" name="phone" > 
      <br>
  <input type="submit" >


        


    </form>

</body>
</html>