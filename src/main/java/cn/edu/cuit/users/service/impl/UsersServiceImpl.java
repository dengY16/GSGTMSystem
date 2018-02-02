package cn.edu.cuit.users.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.edu.cuit.model.Users;
import cn.edu.cuit.users.dao.UsersDao;
import cn.edu.cuit.users.service.UsersService;

/**
 * @date 2018年1月30日 上午11:39:17
 * @author dy
 */
@Service("usersService")
public class UsersServiceImpl implements UsersService{

	/* (non-Javadoc)
	 * @see cn.edu.cuit.users.service.UsersService#getUserInfoByUsername(java.lang.String)
	 */
	
	@Resource
	private UsersDao usersDao;

	/* (non-Javadoc)
	 * @see cn.edu.cuit.users.service.UsersService#getUserInfoByUsername(java.lang.String, java.lang.String)
	 */
	@Override
	public List<Users> getUserInfoByUsername(String username, String password) {
		// TODO Auto-generated method stub
		return null;
	}


}
