/**
 * 
 */
package cn.edu.cuit.common.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import cn.edu.cuit.model.MajorClass;

/**
 * @date 2018年2月1日 下午5:45:34
 * @author dy
 */
public interface MajorClassDao {
	
	/**
	 * 根据班级名得到班级信息
	 * @param className
	 * @return
	 */
	List<MajorClass> selectByClassName(@Param("className") String className);

}
