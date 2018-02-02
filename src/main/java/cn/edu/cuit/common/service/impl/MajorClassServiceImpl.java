/**
 * 
 */
package cn.edu.cuit.common.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.edu.cuit.common.dao.MajorClassDao;
import cn.edu.cuit.common.service.MajorClassService;
import cn.edu.cuit.model.MajorClass;

/**
 * @date 2018年2月1日 下午6:01:21
 * @author dy
 */
@Service("majorClass")
public class MajorClassServiceImpl implements MajorClassService{

	/* (non-Javadoc)
	 * @see cn.edu.cuit.common.service.MajorClassService#getMajorClassByClassName(java.lang.String)
	 */
	
	@Resource
	private MajorClassDao majorClassDao;
	@Override
	public List<MajorClass> getMajorClassByClassName(String className) {
		
		return majorClassDao.selectByClassName(className);
	}

}
