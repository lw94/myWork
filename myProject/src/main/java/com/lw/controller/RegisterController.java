package com.lw.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.lw.pojo.User;
import com.lw.service.UserService;
import com.sun.tools.internal.ws.processor.model.Request;
@Controller
public class RegisterController {
	@Autowired
	private UserService userService;
	/**
	 * 跳转到登录页面
	 * @return
	 */
	@RequestMapping("/register")
	public String doLogin(){
		return "register";	
	}
	/**
	 * 注册以后的处理
	 * @return
	 */
	@RequestMapping(value="/doRegister",produces="text/html;charset=utf-8")
	@ResponseBody
	public String doRegister(User user,HttpServletRequest request,HttpServletResponse response){
		//
		String username=request.getParameter("username");
		String phone=request.getParameter("phone");
		Long time = System.currentTimeMillis();
		String salt = DigestUtils.md5Hex(time.toString());
		
		String passwordNomd5=request.getParameter("password");
		String password=DigestUtils.md5Hex(salt+passwordNomd5);
	
		user.setUsername(username);
		user.setPassword(phone);
		user.setSalt(salt);
		user.setPassword(password);
		
		userService.saveUser(user);
		
		response.setHeader("Refresh", "3;url=/myProject/");
		return "注册成功,3秒后将返回首页";	
	}

}
