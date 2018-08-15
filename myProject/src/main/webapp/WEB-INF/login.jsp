<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>李伟博客登录页面</title>
    <link rel="stylesheet" type="text/css" href="css/login.css">
    <script type="text/javascript" src="js/jquery-1.4.2.js"></script>
    <script type="text/javascript" src="js/login.js"></script>
</head>
<body>
  <!--action="/myProject/doLogin"  -->
    <form  method="post" name="userLogin">
        用户名<input type="text" name="username" id="loginUsername">
        <span id="usernameerrormsg"></span>
        <br>
          密  码<input type="password" name="password" >
          <span id="passworderrormsg"></span>
          <br>
          <button id="loginSuccess">登录 </button>
    </form>

</body>
</html>