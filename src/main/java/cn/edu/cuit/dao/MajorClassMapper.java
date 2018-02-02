package cn.edu.cuit.dao;

import cn.edu.cuit.model.MajorClass;
import cn.edu.cuit.model.MajorClassExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface MajorClassMapper {
    long countByExample(MajorClassExample example);

    int deleteByExample(MajorClassExample example);

    int deleteByPrimaryKey(Integer id);

    int insert(MajorClass record);

    int insertSelective(MajorClass record);

    List<MajorClass> selectByExample(MajorClassExample example);

    MajorClass selectByPrimaryKey(Integer id);

    int updateByExampleSelective(@Param("record") MajorClass record, @Param("example") MajorClassExample example);

    int updateByExample(@Param("record") MajorClass record, @Param("example") MajorClassExample example);

    int updateByPrimaryKeySelective(MajorClass record);

    int updateByPrimaryKey(MajorClass record);
}