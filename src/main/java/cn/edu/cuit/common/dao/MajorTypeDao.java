/**
 * 
 */
package cn.edu.cuit.common.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import cn.edu.cuit.model.MajorType;

/**
 * @date 2018年2月2日 下午4:35:40
 * @author dy
 */
public interface MajorTypeDao {
	
	/**
	 * 根据专业名称查询专业信息
	 * @param name
	 * @return
	 */
	List<MajorType> selectMajorTypesByName(@Param("name") String name);

}
