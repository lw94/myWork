<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>李伟的博客</title>
	<link rel="stylesheet" type="text/css" href="css/index.css">
	<script type="text/javascript" src="js/jquery-1.4.2.js"></script>
	<script type="text/javascript" src="js/index.js"></script>
</head>
<body>
<!-- 网站的头部 -->
	<div style="text-align:center">
		<img src="img/head.jpg">
	</div>
<!-- 头部导航栏 -->	
	<div id="head_menu" >
		<ul>
			<li class="head_first_li">
		<a href="http://www.baidu.com">首页</a>
			</li>
			<li>
			<a href="http://www.baidu.com">生活</a>
			</li>
			<li>
			<a href="http://www.baidu.com">学习</a>
			</li>
			<li>
		<a href="http://www.baidu.com">诗与远方</a>
			</li>
			<li class="head_last_li">
			
			<a href="http://www.baidu.com">关于本站</a>	
			</li>
		</ul>
	</div>
<!-- 导航栏下面主体第一部分 -->
<div id="content">
<div class="content1_left"></div>
<div class="content_center">
	<ul>
		<li class="content_center_li1"></li>
		<li class="content_center_li2"></li>
		<li class="content_center_li3"></li>
		<li class="content_center_li4"></li>
	</ul>
</div>	
<div class="content1_right">



	<form action="" name="loginOrRegister">
		<div class="userShow">
			<span id="userMsg" style="font-size:36px;color:#f40;">myMaster,欢迎您&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
		<button class="haveUser" onclick="logout()"/>注销</button> 
		</div>
		

	 <button class="nouser" onclick="login()"/>登录</button>  
    <button class="nouser" onclick="register()"/>注册</button> 
	</form>



	<div class="content1_right_announcement">
		<span>公告栏</span>
		<hr>
		林花谢了春红，太匆匆。无奈朝来寒雨，晚来风。

胭脂泪，相留醉，几时重。自是人生长恨，水长东。
	</div>
	
</div>

</div>
<!-- 导航栏下面主体第2部分 -->
<div>
<span id="content2_span">精品内容</span>
</div>

<div id="content2_left">
<div id="content2_left_a">
银鞍白鼻騧，绿地障泥锦。
细雨春风花落时，挥鞭直就胡姬饮。
</div>
<div id="content2_left_b">
劝君莫惜金缕衣，劝君惜取少年时。
花开堪折直须折，莫待无花空折枝。
</div>
<div id="content2_left_c">
一把青秧趁手青，轻烟漠漠雨冥冥。
东风染尽三千顷，白鹭飞来无处停。
</div>

<span id="content2_right_span">精品帖子</span>


</div>


<div id="content2_right">
	<span id="content2_right_span">目录</span> 

	<ul>
		<li>目录一</li>
		<li>目录二</li>
		<li>目录三</li>
		<li>目录四</li>
		<li>目录五</li>
		<li>目录六</li>
		<li>目录七</li>
		<li>目录七</li>
	</ul>

</div>


</body>
</html>