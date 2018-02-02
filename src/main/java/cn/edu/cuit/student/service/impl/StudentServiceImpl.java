/**
 * 
 */
package cn.edu.cuit.student.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.edu.cuit.dao.StudentInfoMapper;
import cn.edu.cuit.model.StudentInfo;
import cn.edu.cuit.student.dao.StudentDao;
import cn.edu.cuit.student.service.StudentService;

/**
 * @date 2018年2月1日 下午1:48:04
 * @author dy
 */
@Service("student")
public class StudentServiceImpl implements StudentService{

	@Resource
	private StudentInfoMapper studentInfoMapper;
	
	@Resource 
	private StudentDao studentDao;
	/* (non-Javadoc)
	 * @see cn.edu.cuit.student.service.StudentService#insert(cn.edu.cuit.model.StudentInfo)
	 */
	@Override
	public int insert(StudentInfo studentInfo) {
	
		return studentInfoMapper.insert(studentInfo);
	}
	/* (non-Javadoc)
	 * @see cn.edu.cuit.student.service.StudentService#getStudentInfo(java.lang.String, java.lang.String)
	 */
	@Override
	public List<StudentInfo> getStudentInfo(String majorClass, String keyword) {
		
		return studentDao.selectStudent(majorClass, keyword);
	}
	/* (non-Javadoc)
	 * @see cn.edu.cuit.student.service.StudentService#remove(java.lang.Integer)
	 */
	@Override
	public int remove(Integer id) {
		
		return studentDao.remove(id);
	}
	/* (non-Javadoc)
	 * @see cn.edu.cuit.student.service.StudentService#modify(cn.edu.cuit.model.StudentInfo)
	 */
	@Override
	public int modify(StudentInfo studentInfo) {
		return studentDao.modify(studentInfo);
	}

}
