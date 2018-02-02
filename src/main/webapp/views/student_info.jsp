<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ include file="../include/taglib.jsp" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>学生信息</title>
<link rel="stylesheet"
	href="${ctxStatic}/themes/jquery/jquery.loadmask.css">
<link href="${ctxStatic}/themes/easyui/easyui.css" media="screen"
	rel="stylesheet" type="text/css" />
<link href="${ctxStatic}/themes/base/base.css" media="screen"
	rel="stylesheet" type="text/css">
<link href="${ctxStatic}/themes/easyui/icon.css" media="screen"
	media="screen" rel="stylesheet" type="text/css">
<link href="${ctxStatic}/themes/easyui/easyui_default.css"
	media="screen" rel="stylesheet" type="text/css">

<script src="${ctxStatic}/js/jquery/jQuery-2.2.0.min.js"
	type="text/javascript" charset="UTF-8"></script>
<script src="${ctxStatic}/js/easyui/jquery.easyui.min.js"
	type="text/javascript" charset="UTF-8"></script>
<script src="${ctxStatic}/js/easyui/jquery.insdep-extend.min.js"
	type="text/javascript" charset="UTF-8"></script>
<script src="${ctxStatic}/js/easyui/easyui-lang-zh_CN.js"
	type="text/javascript" charset="UTF-8"></script>
<script src="${ctxStatic}/js/custom/ldialog.js" type="text/javascript"
	charset="UTF-8"></script>
<script src="${ctxStatic}/js/custom/base/validator.js" type="text/javascript"
	charset="UTF-8"></script>
<!-- <style type="text/css">
   .datagrid-row {
       height: 34px;
    }
    .datagrid-cell, .datagrid-cell-group, .datagrid-header-rownumber, .datagrid-cell-rownumber{     
    text-overflow: ellipsis;    
    } 
</style>  -->
</head>
<body>
	<%@ include file="common/page_load_mask.jsp"%>
	<div class="easyui-layout" fit="true" >
		<div data-options="region:'north',border:false"
			style="height: 80px; padding: 10px">		
			<div style="float:left;">
			    <div>
				   <span>专业班级：</span>
			       <select id="selectMajorClass" class="easyui-combobox" 
			            data-options="
                        valueField: 'classCode',
                        textField: 'className',
                        method:'get',
                        mode:'remote',
                        url: '${ctx}/common/getMajorClass'"
                        style="width: 250px">
                   </select>
				   <input id="keyword"  placeholder="请输入姓名或学号" class="easyui-textbox"  style="width: 250px;">
				   <a id="search" class="easyui-linkbutton" data-options="iconCls:'icon-search'" style="border:0">搜索</a> 
			    </div>
			<div>
			   <a id="add" class="easyui-linkbutton" data-options="iconCls:'icon-add'" style="border:0">新增</a> 
			   <a id="delete" class="easyui-linkbutton" data-options="iconCls:'icon-quxiao'" style="border:0">删除</a>
			   <a id="modify" class="easyui-linkbutton" data-options="iconCls:'icon-edit'" style="border:0">修改</a>
			 <!--   <a id="run" class="easyui-linkbutton" data-options="iconCls:'icon-qiyong'" style="border:0">启用</a>
			   <a id="stop" class="easyui-linkbutton" data-options="iconCls:'icon-jinyong'" style="border:0">停用</a>
			   <a id="set" class="easyui-linkbutton" data-options="iconCls:'icon-shezhi'" style="border:0">配置病历</a>
			   <a id="show" class="easyui-linkbutton" data-options="iconCls:'icon-detail_info'" style="border:0">查看病历</a> -->
            </div>
        </div>
    </div> 
    <div id="content" region="center" style="padding: 5px;">
	    <table id="dg" class="easyui-datagrid"></table>
	</div>
  </div>
	
	<div id="dd" style="padding: 20px">
	   <input type='hidden' id='flag'/> 
	   <input type='hidden' id='id'/> 
	  <div style="padding:10px 60px 20px 60px">
	    <form id="student" >
	    	<table cellpadding="5">
	    		<tr>
	    			<td>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:&nbsp;</td>
	    			<td><input class="easyui-textbox" type="text" id="studentName" 
	    			data-options="required:true" style="width: 250px"></input></td>
	    		</tr>
	    		<tr style="height:10px;"></tr>
	    		<tr>
	    			<td>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;号:&nbsp;</td>
	    			<td><input class="easyui-textbox" type="text" id="studentCode" 
	    			data-options="required:true" style="width: 250px"></input></td>
	    		</tr>
	    	   <tr style="height:10px;"></tr>
	    		<tr>
	    			<td>专业班级:&nbsp;</td>
	    			<td>
	    		       <select id="majorClass" class="easyui-combobox" 
			               data-options="
                           valueField: 'classCode',
                           textField: 'className',
                           method:'get',
                           mode:'remote',
                           url: '${ctx}/common/getMajorClass',
                           required:true,
                           validType:'chackValue'"
                           style="width: 250px">
                       </select>
	    			</td>
	    		</tr>
	    		<tr style="height:10px;"></tr>
	    		<tr>
	    			<td>性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别:&nbsp;</td>
	    			<td>
	    				<select class="easyui-combobox" id="sex" 
	    				data-options="required:true,validType:'chackValue'"style="width: 250px">
	    				    <option value="1">男</option>
	    				    <option value="2">女</option>
	    				    <option value="9">其他</option>
	    				</select>
	    			</td>
	    		</tr>
	    		<tr style="height:10px;"></tr>
	    		<tr>
	    			<td>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄:&nbsp;</td>
	    			<td><input class="easyui-textbox" type="text" id="age" 
	    			data-options="required:true" style="width: 250px"></input></td>
	    		</tr>
	    		<tr style="height:10px;"></tr>
	    		<tr>
	    			<td>联系方式:&nbsp;</td>
	    			<td><input class="easyui-textbox" type="text" id="phone" 
	    			data-options="required:true" style="width: 250px"></input></td>
	    		</tr>
	
	    	</table>
	    
	    </form>
	    </div>
	  </div>
	<div id ="buttons" style="text-align:center;padding:5px">			
			<a id="confirm" class="easyui-linkbutton" data-options="iconCls:'icon-baocun'">保存</a>
			<a id="cancel" class="easyui-linkbutton" onclick="$('#dd').dialog('close')" data-options="iconCls:'icon-quxiao'">取消</a>
	</div>
<script>
	$(function () {  
	    $('#dg').datagrid({
			fit : true,
			method : "GET",
			fitColumns : true,
			singleSelect : true,
			pagination : true,
			pageSize: 10,
			pageList : [3, 5, 10, 15,20, 50 ],
			url : '${ctx}/student/getStudentInfo',
			queryParams :  {
				majorClass:function(){return $("#selectMajorClass").combobox('getValue')},
				keyword: function(){return $("#keyword").val()}
			},
			loadFilter : function(data) {
				var result = new Object();
				result.total = data.total;
				result.rows = data.list;
				return result;
			},
			columns : [ [ {
				field : 'id',
				align : 'center',
				title : 'ID',
				width : 20
			}, {
				field : 'studentCode',
				align : 'center',
				title : '学号',
				width : 100
			}, {
				field : 'studentName',
				align : 'center',
				title : '姓名',
				width : 100
			}, {
				field : 'className',
				align : 'center',
				title : '班级',
				width : 200
			}, {
				field : 'date',
				align : 'center',
				title : '新增时间',
				width : 200
			}, {
				field : 'sex',
				align : 'center',
				title : '性别',
				width : 60,
				formatter : function(value, row, index){
					var sex = row.sex;
					if(sex == "1"){
						return "男";
					}else if(sex == "2"){
						return "女";
					}else if(sex == "9"){
						return "其他";
					}else{
						return "";
					}
				}
			}, {
				field : 'age',
				align : 'center',
				title : '年龄（岁）',
				width : 60
			}, {
				field : 'phone',
				align : 'center',
				title : '联系方式',
				width : 200
	
			}, {
				align : 'center',
				field : 'operate',
				title : '操作',
				width : 100,
				/* formatter: function (value, row, index) {
					  return "<button class='operate easyui-linkbutton' onclick=editorClo("+row.id+")></button>";
                } */
			} ] ],
			/* onLoadSuccess:function (data) {
                $(".operate").linkbutton({text:'编辑',plain:true,iconCls:'icon-edit'});
            } */
		});
	 });
		//搜索
	 $("#search").click(function(){
			$('#dg').datagrid('reload');
		 }); 
	   
		//添加
		 $("#add").click(function(){
			 
			   $("#flag").val('add');
			 
				$("#studentName").textbox("setValue",'');
				$("#studentCode").textbox("setValue",'');
				$("#majorClass").combobox('setValue',''); 
				$("#sex").combobox('setValue',''); 
				$("#age").textbox("setValue",'');
				$("#phone").textbox("setValue",'');
				$("#studentCode").combobox('readonly',false); 
				
				$('#dd').dialog({
				    title: '新增学生基本信息',				
				    width: 500,
				    height: 400,
				    closed: false,
				    cache: false,
				    modal: true,
				    buttons:'#buttons'
				});
		   });
		
		  //修改
		  $("#modify").click(function(){
				var select=$('#dg').datagrid('getSelected');
				if(select==null){
					parent.$.messager.alert("提示","请选择一项进行修改！");
				    return;
				}
				
				$("#flag").val('modify');
				
				$("#studentCode").combobox('readonly',true); 
				$("#studentName").textbox("setValue",select.studentName);
				$("#studentCode").textbox("setValue",select.studentCode);
				$("#majorClass").combobox('setValue',parseInt(select.majorClass)); 
				$("#sex").combobox('setValue',select.sex); 
				$("#age").textbox("setValue",select.age);
				$("#phone").textbox("setValue",select.phone);
				
				$("#id").val(select.id);
				$('#dd').dialog({
				    title: '修改学生基本信息',
				    width: 500,
				    height: 400,
				    closed: false,
				    cache: false,
				    modal: true,
				    buttons:'#buttons'
				});
		});
		//删除
		 $("#delete").click(function(){
				var select=$('#dg').datagrid('getSelected');
				if(select==null){
					 parent.$.messager.alert("提示","请选择一项删除！");
				    return;
				}
				 parent.$.messager.confirm('确认','你确定要删除"'+select.studentName+'"这项吗？',function(r){
				    if (r){
						$.post("${ctx}/student/remove",{"id":select.id},function(param){
						if(param.success==true){
						    $('#dg').datagrid('reload');
						    parent.$.messager.alert("成功","删除成功");
						}else{
							 parent.$.messager.alert("失败","失败原因："+param.message);
						}			
				    	});   
				    }
				});
		});
		//启用
		/* $("#run").click(function(){
				var select=$('#dg').datagrid('getSelected');
				if(select==null){
					 parent.$.messager.alert("提示","请选择一项启用！");
				    return;
				}
				if(select.enableFlag == 1){
					  parent.$.messager.alert("提示",select.name+"已是启用状态");
					    return;
				}
				$.messager.confirm('确认','你确定要启用"'+select.name+'"这项吗？',function(r){
				    if (r){
						$.post("${ctx}/mrTemplate/run",{"id":select.id},function(param){
						if(param.success==true){
						    $('#dg').datagrid('reload');
						    parent.$.messager.alert("成功","启用成功");
						}else{
							 parent.$.messager.alert("失败","失败原因："+param.message);
						}			
				    	});   
				    }
				});
		});
		
		//停用
		 $("#stop").click(function(){
				var select=$('#dg').datagrid('getSelected');
				if(select==null){
					parent.$.messager.alert("提示","请选择一项停用！");
				    return;
				}
				if(select.enableFlag == 2){
					 parent.$.messager.alert("提示",select.name+"已是停用状态");
					    return;
				}
				 parent.$.messager.confirm('确认','你确定要停用"'+select.name+'"这项吗？',function(r){
				    if (r){
						$.post("${ctx}/mrTemplate/stop",{"id":select.id},function(param){
						if(param.success==true){
						    $('#dg').datagrid('reload');
						    parent.$.messager.alert("成功","停用成功");
						}else{
							 parent.$.messager.alert("失败","失败原因："+param.message);
						}			
				    	});   
				    }
				});
		});
		//查看病历
		 $("#show").click(function(){
				var select=$('#dg').datagrid('getSelected');
				if(select==null){
					 parent.$.messager.alert("提示","请选择一项查看");
				    return;
				}
				window.location.href="${ctx}/basicsTemplate/checkout?id="+select.id+"&flag=1";
		}); */
	
	       //保存
		 $("#confirm").click(function(){
				var flag=$("#flag").val(); 
				
				 var params = new Object();
			        params.studentName = $("#studentName").val();
			        params.studentCode = $("#studentCode").val();
			        params.majorClass = $("#majorClass").combobox('getValue');
			        params.sex = $("#sex").val();
			        params.age = $("#age").val();
			        params.phone = $("#phone").val();
			      
				if(flag=='add'){
					 if(!$("#student").form("validate")){
				  		 parent.$.messager.alert('检查','请检查必填项');
				  		 return;
			       }
				    $.post("${ctx}/student/add",params,function(param){
						if(param.success==true){
						    $('#dd').dialog('close');
						    $('#dg').datagrid('reload')
						    parent.$.messager.alert("成功","新增学生信息成功!");
						}else{
							 parent.$.messager.alert("失败","失败原因："+param.message);
						}			
				    });    
				}
			  else{
				   if(!$("#student").form("validate")){
				  		 parent.$.messager.alert('检查','请检查必填项');
				  		 return;
			       }
					params.id = $("#id").val();
				    $.post("${ctx}/student/modify",params,function(param){
					if(param.success==true){
					    $('#dd').dialog('close');
					    $('#dg').datagrid('reload');
					    parent.$.messager.alert("成功","更新成功");
					    
					}else{
						 parent.$.messager.alert("失败","失败原因："+param.message);
					}			
			    	});   
				}  
		    });
		
	    /*    //编辑
		 function editorClo(id) {
		        window.location.href="${ctx}/mrTemplate/write?id="+id;
		    }    */     
	</script>
</body>
</html>