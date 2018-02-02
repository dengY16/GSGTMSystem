/**
 * 
 */
package cn.edu.cuit.student.service;

import java.util.List;

import cn.edu.cuit.model.StudentInfo;

/**
 * @date 2018年2月1日 上午11:44:23
 * @author dy
 */
public interface StudentService {
	
	/**
	 * 新增学生信息
	 * @param studentInfo
	 * @return
	 */
	int insert(StudentInfo studentInfo);
	
	/**
	 * 根据条件查询学生信息
	 * @param majorClass
	 * @param keyword
	 * @return
	 */
	List<StudentInfo> getStudentInfo(String majorClass,String keyword);
	
	/**
	 * 软删除学生信息
	 * @param id
	 * @return
	 */
	int remove(Integer id);
	
	/**
	 * 修改学生基本信息
	 * @param studentInfo
	 * @return
	 */
	int modify(StudentInfo studentInfo);

}
