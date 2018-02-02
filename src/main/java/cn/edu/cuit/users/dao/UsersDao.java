package cn.edu.cuit.users.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import cn.edu.cuit.model.Users;

/**
 * 用户
 * @date 2018年1月30日 上午11:31:38
 * @author dy
 */
public interface UsersDao {
	
	
	/**
	 * 用户登录校验
	 * @param username
	 * @param password
	 * @return
	 */
	List<Users> getUserInfoByUsername(@Param("username") String username,@Param("password") String password);
	

}
