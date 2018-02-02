//自定义验证下拉列表选择数字值验证
$.extend($.fn.validatebox.defaults.rules, {
	age:{
			validator: function(value, param){    
				return /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/i.test(value);
	        },    
	        message: '请输入正确的日期格式，如2016-11-08' 
	},
	chackValue: {    
        validator: function(value, param){   
            var  required = $(this).validatebox("options").required;
            if(required == true){
            	 return value.indexOf("请选择")==-1;
            }
            return  true;
        },    
        message: ''   
    },  
	minLength : { // 判断最小长度
		validator : function(value, param) {
			return value.length >= param[0];
		},
		message : '最少输入 {0} 个字符。'
	},
    maxLength: { // 判断最大长度
        validator: function(value, param){     
            return param[0] >= value.length;     
        },     
        message: '请输入最大{0}位字符.'    
    },     
	length:{validator:function(value,param){
		var len=$.trim(value).length;
			return len>=param[0]&&len<=param[1];
		},
			message:"内容长度介于{0}和{1}之间."
		},
	phone : {// 验证电话号码
		validator : function(value) {
			return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
		},
		message : '格式不正确,请使用下面格式:020-88888888'
	},
	mobile : {// 验证手机号码
		validator : function(value) {
			return /^(13|15|18)\d{9}$/i.test(value);
		},
		message : '手机号码格式不正确(正确格式如：13450774432)'
	},
	phoneOrMobile:{//验证手机或电话
		validator : function(value) {
			return /^(13|15|18)\d{9}$/i.test(value) || /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
		},
		message:'请填入手机或电话号码,如13688888888或020-8888888'
	},
	idcard : {// 验证身份证
		validator : function(value) {
			return /^\d{15}(\d{2}[A-Za-z0-9])?$/i.test(value);
		},
		message : '身份证号码格式不正确'
	},
	floatOrInt : {// 验证是否为小数或整数
		validator : function(value) {
			return /^(\d{1,3}(,\d\d\d)*(\.\d{1,3}(,\d\d\d)*)?|\d+(\.\d+))?$/i.test(value);
		},
		message : '请输入数字，并保证格式正确'
	},
	currency : {// 验证货币
		validator : function(value) {
			return /^\d+\.*\d*$/i.test(value);
		},
		message : '请填入正确数值,如100或100.23'
	},
	qq : {// 验证QQ,从10000开始
		validator : function(value) {
			return /^[1-9]\d{4,9}$/i.test(value);
		},
		message : 'QQ号码格式不正确(正确如：453384319)'
	},
	integer : {// 验证整数
		validator : function(value) {
			return /^[+]?[1-9]+\d*$/i.test(value);
		},
		message : '请输入整数'
	},
	chinese : {// 验证中文
		validator : function(value) {
			return /^[\u0391-\uFFE5]+$/i.test(value);
		},
		message : '请输入中文'
	},
	english : {// 验证英语
		validator : function(value) {
			return /^[A-Za-z]+$/i.test(value);
		},
		message : '请输入英文'
	},
	unnormal : {// 验证是否包含空格和非法字符
		validator : function(value) {
			return /.+/i.test(value);
		},
		message : '输入值不能为空和包含其他非法字符'
	},
	username : {// 验证用户名
		validator : function(value) {
			return /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/i.test(value);
		},
		message : '用户名不合法（字母开头，允许6-16字节，允许字母数字下划线）'
	},
	faxno : {// 验证传真
		validator : function(value) {
//			return /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/i.test(value);
			return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
		},
		message : '传真号码不正确'
	},
	zip : {// 验证邮政编码
		validator : function(value) {
			return /^[1-9]\d{5}$/i.test(value);
		},
		message : '邮政编码格式不正确'
	},
	ip : {// 验证IP地址
		validator : function(value) {
			return /d+.d+.d+.d+/i.test(value);
		},
		message : 'IP地址格式不正确'
	},
	name : {// 验证姓名，可以是中文或英文
			validator : function(value) {
				return /^[\u0391-\uFFE5]+$/i.test(value)|/^\w+[\w\s]+\w+$/i.test(value);
			},
			message : '请输入姓名'
	},
	carNo:{
		validator : function(value){
			return /^[\u4E00-\u9FA5][\da-zA-Z]{6}$/.test(value); 
		},
		message : '车牌号码无效（例：粤J12350）'
	},
	carenergin:{
		validator : function(value){
			return /^[a-zA-Z0-9]{16}$/.test(value); 
		},
		message : '发动机型号无效(例：FG6H012345654584)'
	},
	email:{
		validator : function(value){
		return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value); 
	},
	message : '请输入有效的电子邮件账号(例：abc@126.com)'	
	},
	msn:{
		validator : function(value){
		return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value); 
	},
	message : '请输入有效的msn账号(例：abc@hotnail(msn/live).com)'
	},department:{
		validator : function(value){
			return /^[0-9]*$/.test(value); 
		},
		message : '请输入部门排序号(例：1)'	
	},same:{
		validator : function(value, param){
			if($("#"+param[0]).val() != "" && value != ""){
				return $("#"+param[0]).val() == value; 
			}else{
				return true;
			}
		},
		message : '两次输入的密码不一致！'	
	},datetime: {
        validator: function (value) {
            var r = value.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/);
            if (r == null) return false;
            var d = new Date(r[1], r[3] - 1, r[4], r[5], r[6], r[7]);
            return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4] && d.getHours() == r[5] && d.getMinutes() == r[6] && d.getSeconds() == r[7]);
        },
        message: '时间不正确，请重新输入。'
    },date: {
        validator: function (value) {
            var r = value.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
            if (r == null) {
                return false;
            }
            var d = new Date(r[1], r[3] - 1, r[4]);
            return (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]);
        },
        message: '时间格式不正确，请重新输入。'
    },unique:{
    	  validator: function(value, param){ 
            if(param.length >= 7){
          	  //需要往后台传递的参数列表
          	  var tableName = param[0];
          	  var params = {};
          	  params.tableName = tableName;
          	  //获取数据库字段值属性
          	  var fileName = param[1];
          	  var fileNames = fileName.split(",");
          	  //获取传递的endity属性字段值
          	  var endityFiled = param[2];
          	  var endityFileds = endityFiled.split(",");
          	  
          	  if(fileName &&  endityFiled){
          		  if(fileNames.length != endityFileds.length){
              		  $.fn.validatebox.defaults.rules.unique.message ="参数值不匹配,请检查";
              		  return false;
              	  }
          	  }else{
          		  $.fn.validatebox.defaults.rules.unique.message ="参数值不匹配,请检查";
          		  return false;
          	  }
          	  //判断属性是否全部都有值，全部有值才往后台发送请求验证是否通过
          	  for(var i = 0 ; i < endityFileds.length ; i++){
          		  var fileName = fileNames[i];
          		  var endityFile = endityFileds[i];
          		  
          		  if(endityFile == param[4]){
              		  params[fileName] = value;
          		  }else{
          			  var fileValue = $("#"+endityFileds[i]).textbox("getValue");
          			  // 需要做空判断，如果有null值默认通过
          			  if("true" != param[6]){
          				  if(!fileValue){
          					  return true;
                  		  }
          			  }
              		  params[fileName] = fileValue;
          		  }
          	  }
          	  
          	  if(param[7]){
          		  params.id = param[7];
          	  }
          	  var shifoujigou = param[3];
          	  params.shifoujigou = shifoujigou;
          	  var url = baseurl+'/unique/unique.do?data='+new Date().getTime();
          	  var flag = true;
          	  $.ajax({
                    type : 'post',
                    async : false,
                    url :url ,
                    data :params,
                    success : function(data) {
                        if(data.code == 200){
                      	  if(data.data > 0){
                      		  $.fn.validatebox.defaults.rules.unique.message =param[5];
                      		  flag =  false;
                      	  }
                        }else{
                      	  $.fn.validatebox.defaults.rules.unique.message ="发送请求信息失败,请检查是否满足验证格式";
                      	  flag=  false;
                        }
                    }
                });
          	  
          	  return flag;
            }
        },
        message: ''   
  }
});