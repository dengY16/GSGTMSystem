package cn.edu.cuit.users.service;

import java.util.List;

import cn.edu.cuit.model.Users;

/**
 * 用户
 * @date 2018年1月30日 上午11:31:04
 * @author dy
 */
public interface UsersService {
	
	/**
	 * 
	 * @param username
	 * @return
	 */
	List<Users> getUserInfoByUsername(String username,String password);

}
