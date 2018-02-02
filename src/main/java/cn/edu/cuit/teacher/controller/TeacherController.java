/**
 * 
 */
package cn.edu.cuit.teacher.controller;

import java.util.Date;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.edu.cuit.base.controller.BaseController;
import cn.edu.cuit.model.CommonResult;
import cn.edu.cuit.model.TeacherInfo;
import cn.edu.cuit.teacher.service.TeacherService;

/**
 * @date 2018年2月2日 下午5:26:33
 * @author dy
 */
@Controller
@RequestMapping("/teacher")
public class TeacherController extends BaseController{
	
	@Resource
	private TeacherService teacherService;
	
	@RequestMapping(value = "/teacher")
	public String teacher(HttpServletRequest request,Model model) {
		return "/teacher_info";
	}
	
	@RequestMapping(value = "/add",method = RequestMethod.POST)
	@ResponseBody
	public CommonResult<TeacherInfo> addTeacherInfo(TeacherInfo teacherInfo,HttpServletRequest request){
		CommonResult<TeacherInfo> result = new CommonResult<>();
		teacherInfo.setCreateUser("admin");
		teacherInfo.setCreateDate(new Date());
		teacherInfo.setLastModifyUser("admin");
		teacherInfo.setLastModifyDate(new Date());
		teacherInfo.setDelFlag("0");
		try {
			teacherService.insert(teacherInfo);
			result.setSuccess(true);
			return result;
		}catch (Exception e) {
			log.error("新增学生信息出错：", e);
			result.setSuccess(false);
			result.setMessage(e.getMessage());
			return result;
		}
	}
	

}
