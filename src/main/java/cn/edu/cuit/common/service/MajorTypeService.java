/**
 * 
 */
package cn.edu.cuit.common.service;

import java.util.List;

import cn.edu.cuit.model.MajorType;

/**
 * @date 2018年2月2日 下午4:44:38
 * @author dy
 */
public interface MajorTypeService {
	
	/**
	 * 根据专业名称查询专业信息
	 * @param name
	 * @return
	 */
	List<MajorType> getMajorTypeByName(String name);

}
