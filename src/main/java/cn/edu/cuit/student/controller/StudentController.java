/**
 * 
 */
package cn.edu.cuit.student.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import cn.edu.cuit.model.CommonResult;
import cn.edu.cuit.model.StudentInfo;
import cn.edu.cuit.base.controller.BaseController;
import cn.edu.cuit.student.service.StudentService;

/**
 * @date 2018年2月1日 上午11:41:05
 * @author dy
 */
@Controller
@RequestMapping("student")
public class StudentController extends BaseController{
	
	
	@Resource
	private StudentService studentService;
	
	@RequestMapping("/student")
	public String student(HttpServletRequest request,Model model) {
		return "/student_info";
	}
	
	@RequestMapping(value = "/add",method = RequestMethod.POST)
	@ResponseBody
	public CommonResult<StudentInfo> addStudentInfo(StudentInfo studentInfo,HttpServletRequest request){
		CommonResult<StudentInfo> result = new CommonResult<>();
		studentInfo.setCreateUser("admin");
		studentInfo.setCreateDate(new Date());
		studentInfo.setLastModifyUser("admin");
		studentInfo.setLastModifyDate(new Date());
		studentInfo.setDelFlag("0");
		try {
			studentService.insert(studentInfo);
			result.setSuccess(true);
			return result;
		}catch (Exception e) {
			log.error("新增学生信息出错：", e);
			result.setSuccess(false);
			result.setMessage(e.getMessage());
			return result;
		}
	}
	
	@RequestMapping(value = "/getStudentInfo",method = RequestMethod.GET)
	@ResponseBody
	public PageInfo<StudentInfo> getStudentInfo(String majorClass, String keyword,int page,int rows){
		PageHelper.startPage(page,rows);
		List<StudentInfo> list = new ArrayList<>();
		list = studentService.getStudentInfo(majorClass, keyword);
		return new PageInfo<>(list);
	}
	
	
	@RequestMapping(value = "/remove", method = RequestMethod.POST)
	@ResponseBody
	public CommonResult<StudentInfo> remove(String id){
		CommonResult<StudentInfo> result = new CommonResult<>();
		try {
			studentService.remove(Integer.parseInt(id));
			result.setSuccess(true);
			return result;
		}catch (Exception e) {
			log.error("删除学生信息出错：", e);
			result.setSuccess(false);
			result.setMessage(e.getMessage());
			return result;
		}
	}

	@RequestMapping(value = "/modify", method = RequestMethod.POST)
	@ResponseBody
	public CommonResult<StudentInfo> modify(StudentInfo studentInfo){
		CommonResult<StudentInfo> result = new CommonResult<>();
		studentInfo.setLastModifyUser("admin");
		studentInfo.setLastModifyDate(new Date());
		try {
			studentService.modify(studentInfo);
			result.setSuccess(true);
			return result;
		} catch (Exception e) {
			log.error("修改学生信息出错：", e);
			result.setSuccess(false);
			result.setMessage(e.getMessage());
			return result;
		}
	}
}
