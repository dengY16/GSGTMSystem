/**
 * 
 */
package cn.edu.cuit.teacher.service;

import cn.edu.cuit.model.TeacherInfo;

/**
 * @date 2018年2月2日 下午5:19:55
 * @author dy
 */
public interface TeacherService {
	
	/**
	 * 新增教师信息
	 * @param teacherInfo
	 * @return
	 */
	int insert(TeacherInfo teacherInfo);

}
