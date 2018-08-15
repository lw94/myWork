
    function login(){  
//        document.("表单的name值").action  
//        document.("表单的name值").submit  
        document.loginOrRegister.action="/myProject/login.html" 
        document.loginOrRegister.submit();  
    }  
    function register() {  
        document.loginOrRegister.action ="/myProject/register.html" 
        document.loginOrRegister.submit();  
    }
   function logout(){  
        document.loginOrRegister.action ="/myProject/doLogout" 
        document.loginOrRegister.submit();  
    }
    
    
  /*  function loginSuccess(){  
  	  alert("success");
  	 
          document.userLogin.action ="/myProject/doLogin";
          document.userLogin.submit(); 
          //document.getElementById("warning").style("")
          window.location.href ="/myProject/index.html";
          }*/
    $(function(){  
    	function getCookie(WhenHaveUser) {
    	    var strCookie = document.cookie;
    	    var arrCookie = strCookie.split("=");
    	    for(var i = 0; i < arrCookie.length; i++){
    	       // var arr = arrCookie[i].split("=");
    	    	var arr = arrCookie[1];
    	        if(WhenHaveUser == arr){
    	            return arr;
    	        }
    	    }
    	    return "";
    	}
    	var haveCookie = getCookie("WhenHaveUser");//拿到名字为uid的cookie值    	
    	if(haveCookie=="WhenHaveUser"){
    	     $('.nouser').css("display","none"),
        	 $('.userShow').css("display","inline-block");
    	     
    	     
    	}else{
    		 $('.nouser').css("display","inline-block"),
        	 $('.userShow').css("display","none");
    		
    		//alert("请登录")
    	}

    	
    	
    	//方法二、单个参数的获取方法
        function GetRequest(url) {
        	//处理请求参数乱码
        	 url = decodeURI(url);
            var props = [];
            if (url.indexOf("?") != -1) {    //判断是否有参数
                var parameters = url.split("?")[1]; 
                var parametersArr = parameters.split("&");
                for(var i = 0; i < parametersArr.length; i++) {
                    props.push(parametersArr[i].split("="));
                }
            }
            return props;
        }

        var url = location.href; //获取当前完整的url
        var firstProp, secondProp;//等会放url参数的变量
        var request=GetRequest(url);//结果是一个包含所有参数对的二维数组
        
        $("#userMsg").text(""+request[0][1]+"    ");
        //如果你没有传参数的话,我们要加一个判断 
       /* if(request != null && request.length === 2) {
            firstProp = request[0][1];
            secondProp = request[1][1];
        }
       alert(firstProp+","+secondProp); //输出：sepal_length,sepal_width
    	*/
        
   /*     $("#logout").click(function(){
        	alert(11)
        	 $('.nouser').css("display","none"),
         	 $('.userShow').css("display","none");
        	
        })*/

	

    })
    
    
    
