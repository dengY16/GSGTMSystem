package cn.edu.cuit.base.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import cn.edu.cuit.common.GlobalField;

/**
 * ClassName: CommonController <br/>
 * Function: 公共controller. <br/>
 * Reason: TODO ADD REASON(可选). <br/>
 * date: 2016年12月26日 下午3:38:16 <br/>
 *
 * @author cx
 * @since JDK 1.7+
 */
@Controller
@RequestMapping("/")
public class BaseController {

	protected Logger log = LoggerFactory.getLogger(this.getClass());

	@Resource
	private HttpServletRequest request;

	/**
	 * 获取登陆的用户姓名
	 * @return
	 */
	protected String getLoginUserName() {
		return (String) request.getSession().getAttribute(GlobalField.USER_NAME);
	}

	/**
	 * 获取登陆的用户id
	 * @return
	 */
	protected String getLoginUserId() {
		return String.valueOf(request.getSession().getAttribute(GlobalField.USER_ID));

	}

	/**
	 * 获取登陆医院的id
	 *
	 * @return
	 */
	protected String getLoginHospitalId() {
		HttpSession session = request.getSession();
		// 取机构信息
		String hospitalId = String.valueOf(session.getAttribute(GlobalField.ORG_BASE_ID));
		return hospitalId;
	}

	/**
	 * 获取登陆医院的名字
	 *
	 * @return
	 */
	protected String getLoginHospitalName() {
		HttpSession session = request.getSession();
		// 取机构信息
		String hospitalId = String.valueOf(session.getAttribute(GlobalField.ORG_BASE_NAME));
		return hospitalId;
	}

	protected String getLoginDeptId() {
		HttpSession session = request.getSession();
		// 取机构信息
		String dept = String.valueOf(session.getAttribute(GlobalField.DEPARTMENT_ID));
		return dept;
	}

	protected String getLoginDeptName() {
		HttpSession session = request.getSession();
		// 取机构信息
		String dept = String.valueOf(session.getAttribute(GlobalField.DEPARTMENT_NAME));
		return dept;
	}

	/**
	 * 获取web程序上下文路径
	 * @return
	 */
	protected String getContextPath() {
		return request.getContextPath();
	}
}
