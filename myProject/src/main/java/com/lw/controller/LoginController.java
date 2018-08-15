package com.lw.controller;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.lw.pojo.User;
import com.lw.service.UserService;
@Controller
public class LoginController {
	@Autowired
	private UserService userService;
	
	private static ObjectMapper objectMapper=new ObjectMapper();
	/**
	 * 跳转到login页面
	 * @return
	 */
	@RequestMapping("/login")
	public String Login(){
		return "login";	
	}
	/**
	 * 登陆验证
	 * @return
	 * @throws JsonProcessingException 
	 * @throws UnsupportedEncodingException 
	 */
	@RequestMapping(value="/doLogin",produces="text/html;charset=utf-8")
	@ResponseBody
	public String doLogin(HttpServletRequest request,HttpServletResponse response) throws JsonProcessingException, UnsupportedEncodingException{
		response.setHeader("Content-type", "text/html;charset=UTF-8");
		request.setCharacterEncoding("UTF-8");
		/*获得用户输入的用户名和密码*/
		String username=request.getParameter("username");
		String passwordNomd5=request.getParameter("password");
	 /*
	  * 查询数据库获得数据库的用户名以及密码
	  */
		System.out.println(username);
		User loginuser=	userService.findUser(username);
		System.out.println("zhih");
		String salt = loginuser.getSalt();
		/**
		 * 将用户的密码加盐
		 */
		String inputPassword=DigestUtils.md5Hex(salt+passwordNomd5);
		System.out.println(inputPassword);
		String dbPassword=loginuser.getPassword();
		System.out.println(dbPassword);
		
		if (inputPassword.equals(dbPassword)) {
			Cookie cookie=new Cookie("WhenHaveUser","WhenHaveUser");
			cookie.setMaxAge(60*2);
			response.addCookie(cookie);
			//objectMapper.writeValueAsString("ok");
			System.out.println("用户名为"+username);
			return objectMapper.writeValueAsString(username);
		}else {
			return "not ok";
		}
		
		
		
			
	}
	
	
	/**
	 * 注销操作
	 * @return
	 */
	@RequestMapping("/doLogout")
	public String logout(HttpServletRequest request,HttpServletResponse reponse){
		Cookie[] cookies=request.getCookies();
		System.out.println("执行了此方法");
		for (Cookie cookie : cookies) {
			if ("WhenHaveUser".equals(cookie.getName())) {
				String token=cookie.getValue();
				Cookie cookie2=new Cookie("WhenHaveUser","");
				cookie2.setMaxAge(0);
				cookie.setPath("/");//表示cookie所属的权限一般都为"/"
				 reponse.addCookie(cookie2);
				 break;
			}
		}
		//重定向到商城首页
		return "redirect:/";
		
	}
	
	
	

}
