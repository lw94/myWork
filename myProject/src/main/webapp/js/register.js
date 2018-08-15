
function check(){
	if(document.getElementById("password").value!=
		document.getElementById("password_check").value)
	{
		document.getElementById("warning").innerHTML="   两次密码的输入不一致";
	}else{
		document.getElementById("warning").innerHTML="   ";
	}
}