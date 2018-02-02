/**
 * 
 */
package cn.edu.cuit.teacher.service.impl;
import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.edu.cuit.dao.TeacherInfoMapper;
import cn.edu.cuit.model.TeacherInfo;
import cn.edu.cuit.teacher.service.TeacherService;

/**
 * @date 2018年2月2日 下午5:21:11
 * @author dy
 */
@Service("teacherService")
public class TeacherServiceImpl implements TeacherService{

	@Resource
	private TeacherInfoMapper teacherInfoMapper;
	/* (non-Javadoc)
	 * @see cn.edu.cuit.teacher.service.TeacherService#insert(cn.edu.cuit.model.TeacherInfo)
	 */
	@Override
	public int insert(TeacherInfo teacherInfo) {
		
		return teacherInfoMapper.insert(teacherInfo);
	}

}
