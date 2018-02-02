package cn.edu.cuit.common;

/**
 * 全局变量类
 * Created by ZHAOCHUN on 2017/3/27.
 */
public class GlobalField {
	/**
	 * 全局用户信息
	 */
	public static final String USER_ID = "user_id";
	public static final String USER_NAME = "user_name";
	public static final String USER_PASS = "user_pass";
	// 1-领导级； 2-部门级；3-用户级
	public static final String USER_POST = "user_post";
	// staff_id
	// public static final String USER_STAFF = "user_staff";

	/**
	 * 全局用户所在机构信息
	 */
	public static final String ORG_BASE_ID = "org_id";
	public static final String ORG_BASE_NAME = "org_name";
	public static final String ORG_BASE_CODE = "org_code";

	/**
	 * 全局用户所在科室(部门)
	 */
	public static final String DEPARTMENT_ID = "dept_id";
	public static final String DEPARTMENT_NAME = "dept_name";

	/**
	 * 系统名称
	 */
	public static final String SYSTEM_ALIAS = "boco-emr";
}
