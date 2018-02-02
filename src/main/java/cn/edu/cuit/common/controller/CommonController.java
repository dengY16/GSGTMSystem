/**
 * 
 */
package cn.edu.cuit.common.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.edu.cuit.base.controller.BaseController;
import cn.edu.cuit.common.service.MajorClassService;
import cn.edu.cuit.common.service.MajorTypeService;
import cn.edu.cuit.model.MajorClass;
import cn.edu.cuit.model.MajorType;

/**
 * @date 2018年2月2日 上午9:26:01
 * @author dy
 */
@Controller
@RequestMapping(value = "/common")
public class CommonController extends BaseController{
	
	@Resource 
	private MajorClassService majorClassService;
	
	@Resource
	private MajorTypeService majorTypeService;
	
    @RequestMapping(value = "/getMajorClass", method = RequestMethod.GET)
    @ResponseBody
	public List<MajorClass> getMajorClass(String q){
		
		List<MajorClass> list = new ArrayList<>();
		list = majorClassService.getMajorClassByClassName(q);
		return list;
	}
    
    @RequestMapping(value = "/getMajorType", method = RequestMethod.GET)
    @ResponseBody
	public List<MajorType> getMajorType(String q){
		
		List<MajorType> list = new ArrayList<>();
		list = majorTypeService.getMajorTypeByName(q);
		return list;
	}
    
    

}
