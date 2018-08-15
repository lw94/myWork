$(function(){
   $("#loginSuccess").click(function(){
        var user = $('input[name=username]');
        var pwd = $('input[name=password]');
        if(user.val() ==''){
            $('input[name=username]').focus();
            $("#usernameerrormsg").html("<strong>用户名不能为空</strong>");
            return false;
        }
        else if(pwd.val() =='') 
        {
        	 $("#usernameerrormsg").html("");
        	 $('input[name=password]').focus();
             $("#passworderrormsg").html("<strong>密码不能为空</strong>");
             return false;
        }
        
        else{
            $.ajax({
            type:"POST",
            url:'/myProject/doLogin',
            data:{'username':user.val(),'password':pwd.val()},
            dataType:'json',
            	success:function(data){
                            if(data!=null){
                            	//返回主页，主页默认没有地址。所以是主目录就行
                            	//pageContext.setAttribute(data);
                            	//alert(data)
                            	window.location.href ="/myProject/?data="+data;
                            	 //window.location.href ="/myProject/?data="+encodeURI(encodeURI(data))+"";
                            	 
                            	 alert("登陆成功，将返回主页");
                             }
                            /* else if (data.status =='2') {
                                $('#errormsg').html("<strong>验证码错误<strong>");
                             }else if (data.status == '0') {
                                 $('#errormsg').html("<strong>用户名或密码错误！<strong>");
                             }*/

                         }, 
                         error : function(data) {
                             alert("用户名或密码错误");
                         }
                         
                     });


             }



     });
 })