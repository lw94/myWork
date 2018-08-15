package com.lw.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lw.mapper.UserMapper;
import com.lw.pojo.User;
import com.lw.service.UserService;
@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserMapper userMapper;

	@Override
	public void saveUser(User user) {
		userMapper.saveUser(user);
		
	}


	@Override
	public User findUser(String username) {
		User dbUser=userMapper.findUser(username);
		return dbUser;
	}

	 

}
