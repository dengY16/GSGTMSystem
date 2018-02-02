/**
 * 
 */
package cn.edu.cuit.common.service;

import java.util.List;

import cn.edu.cuit.model.MajorClass;

/**
 * @date 2018年2月1日 下午5:59:53
 * @author dy
 */
public interface MajorClassService {
	
	/**
	 * 
	 * @param className
	 * @return
	 */
	List<MajorClass> getMajorClassByClassName(String className);

}
