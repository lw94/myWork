 $.ajax({
        url: "/myProject/doLogin",
        type: "POST",
        data: {
           username:username,
           password: password
        },
        cache: !1,
        timeout: 3e4,
        dataType: "json",
        success: function (data) {
           /* if (data.resultInfo == "invalid user") {
                $("#login-btn").removeAttr("disabled"), warnings.eq(0).text("该用户不存在").addClass("warning-password-show")
            }
            else if (data.resultInfo == "invalid password") {
                $("#login-btn").removeAttr("disabled"), warnings.eq(1).text("密码错误").addClass("warning-password-show")
            } else
                // ，登录验证通过，自动跳转到主页面
                window.location.href = "/student/dashboard";
                // window.location.href("/student/dashboard");

                var f = b.code;
                0 == f ? ("undefined" != typeof mixpanel && (mixpanel.identify(a), mixpanel.people.set({$email: a})), setTimeout(function () {
                    window.location.href = d
                }, 500)) : 1 == f && ($("#login-btn").removeAttr("disabled"), warnings.eq(1).text("Email或密码错误").addClass("warning-password-show"))
            }*/
        },
        error:function () {
            alert("fail\n");
           // $("#login-btn").removeAttr("disabled"), warnings.eq(1).text("Email或密码错误").addClass("warning-password-show")
        }
    }); 

/*function loginSuccess(){  
	  alert("success");
	 
        document.userLogin.action ="/myProject/doLogin";
        document.userLogin.submit(); 
        }*/
    /*    $.ajax({
          type:"post",
          url:"/myProject/doLogin",
          data:$("#loginUsername").value(),
          dataType:"json",
          success : function(data){ 
        	  alert("success");
           window.location.href="/myProject/doLogin/index.html";
          }
        })*/
        
      
    

/*function loginSuccess(){
	alert("success");
    $.ajax({
    	url:"/myProject/doLogin", 
        type: 'post',
        success: function() {
                     alert(result);     
                }
    });
}
$.ajax({
    type:"POST",
    url: //你的请求程序页面随便啦
    async:false,//同步：意思是当有返回值以后才会进行后面的js程序。
    data://请求需要发送的处理数据
    success:function(msg){
        if (msg) {//根据返回值进行跳转
            window.location.href = 'index.html';
        }
}*/