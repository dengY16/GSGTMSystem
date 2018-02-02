package cn.edu.cuit.dao;

import cn.edu.cuit.model.MajorType;

public interface MajorTypeMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(MajorType record);

    int insertSelective(MajorType record);

    MajorType selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(MajorType record);

    int updateByPrimaryKey(MajorType record);
}