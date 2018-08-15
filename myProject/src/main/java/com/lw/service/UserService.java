package com.lw.service;

import com.lw.pojo.User;

public interface UserService {


	void saveUser(User user);

	User findUser(String username);


}
