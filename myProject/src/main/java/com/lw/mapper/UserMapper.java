package com.lw.mapper;

import org.apache.ibatis.annotations.Param;

import com.lw.pojo.User;

public interface UserMapper {

	void saveUser(User user);

	User findUser(@Param("username")String username);

}
