package cn.edu.cuit.login.controller;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.edu.cuit.base.controller.BaseController;
import cn.edu.cuit.users.service.UsersService;

/**
 * 
 * @date 2018年1月30日 下午2:41:48
 * @author dy
 */
@Controller
@RequestMapping("/login")
public class LoginController extends BaseController{
	
	@Resource 
	private UsersService usersService;
	
	

}
