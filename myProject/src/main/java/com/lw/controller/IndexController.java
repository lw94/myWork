package com.lw.controller;

import java.io.UnsupportedEncodingException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class IndexController {
	
	@RequestMapping(produces="text/html;charser=utf-8")
	public String doIndex(HttpServletRequest request,HttpServletResponse response) throws UnsupportedEncodingException{
	response.setHeader("Content-type", "text/html;charset=UTF-8");
	request.setCharacterEncoding("UTF-8");
			return "index";	
	}

	

}
