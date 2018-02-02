/**
 * 
 */
package cn.edu.cuit.student.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import cn.edu.cuit.model.StudentInfo;

/**
 * @date 2018年2月2日 下午1:33:28
 * @author dy
 */
public interface StudentDao {
	
	/**
	 * 根据条件查询学生列表
	 * @param majorClass
	 * @param keyword
	 * @return
	 */
	List<StudentInfo> selectStudent(@Param("majorClass") String majorClass,
			@Param("keyword") String keyword);
	
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
