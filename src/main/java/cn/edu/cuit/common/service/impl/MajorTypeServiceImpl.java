/**
 * 
 */
package cn.edu.cuit.common.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import cn.edu.cuit.common.dao.MajorTypeDao;
import cn.edu.cuit.common.service.MajorTypeService;
import cn.edu.cuit.model.MajorType;

/**
 * @date 2018年2月2日 下午4:47:00
 * @author dy
 */
@Service("majorType")
public class MajorTypeServiceImpl implements MajorTypeService{

	@Resource
	private MajorTypeDao majorTypeDao;
	/* (non-Javadoc)
	 * @see cn.edu.cuit.common.service.MajorTypeService#getMajorTypeByName(java.lang.String)
	 */
	@Override
	public List<MajorType> getMajorTypeByName(String name) {
		
		return majorTypeDao.selectMajorTypesByName(name);
	}

}
