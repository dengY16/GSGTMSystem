function changeTwoDecimal(x)
{
var f_x = parseFloat(x);
if (isNaN(f_x))
{
	return "0";
}
	f_x = Math.round(f_x *100)/100;

	return f_x;
}


String.prototype.trim=function(){
　　    return this.replace(/(^\s*)|(\s*$)/g, "");
}


function addData(a, b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch(f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch(f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)),
    (mul(a, e) + mul(b, e)) / e;

}
//乘法函数，用来得到精确的乘法结果 
//说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。 
//调用：accMul(arg1,arg2) 
//返回值：arg1乘以arg2的精确结果 
function mul(a, b) {
    var c = 0,
    d = a.toString(),
    e = b.toString();
    try {
        c += d.split(".")[1].length;
    } catch(f) {}
    try {
        c += e.split(".")[1].length;
    } catch(f) {}
    return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}
//减法函数，用来得到精确的减法结果 
//说明：javascript的减法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的减法结果。 
//调用：accSubtr(arg1,arg2) 
//返回值：arg1减去arg2的精确结果 
function sub(a, b) {
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch(f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch(f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)),
    (mul(a, e) - mul(b, e)) / e;

}
//除法函数，用来得到精确的除法结果 
//说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。 
//调用：accDiv(arg1,arg2) 
//返回值：arg1除以arg2的精确结果 
function div(a, b) {
    var c, d, e = 0,
    f = 0;
    try {
        e = a.toString().split(".")[1].length;
    } catch(g) {}
    try {
        f = b.toString().split(".")[1].length;
    } catch(g) {}
    return c = Number(a.toString().replace(".", "")),
    d = Number(b.toString().replace(".", "")),
    mul(c / d, Math.pow(10, f - e));
}


$(document).ready(function() {
	/**
	 * 序列化
	 */
	$.fn.serializeObject = function() {
	    var o = {};
	    var a = this.serializeArray();
	    $.each(a, function() {
	        if (o[this.name]) {
	            if (!o[this.name].push) {
	                o[this.name] = [ o[this.name] ];
	            }
	            if(this.value){
	            	o[this.name] = this.value;
	            }
	            
	        } else {
	            if(this.value){
	            	o[this.name]= this.value;
	            }
	        }
	    });
	    return o;
	};
	
	
	
})




/**
 * 针对easyui 下拉combox随意输入随意判断
 */
function onHidePanelCombox() {
	var _options = $(this).combobox('options');  
    var _data = $(this).combobox('getData');
    var _value = $(this).combobox('getValue');
    var _b = false;
    for (var i = 0; i < _data.length; i++) {  
        if (_data[i][_options.valueField] == _value) {  
            _b=true;  
            break;  
        }  
    }  
    if(!_b){  
        $(this).combobox('setValue', '');  
    }  
}

function onHidePanelCombo() {
	var _options = $(this).combo('options');  
    var _data = _options.data;
    var _value = $(this).combo('getValues'); 
    var _b = false; 
    
    for (var i = 0; i < _data.length; i++) {  
        if (_data[i] == _value) {  
            _b=true;  
            break;  
        }  
    }  
    if(!_b){  
        $(this).textbox('setValue', '');  
    }  
}

function onHidePanelTree() {
	var _options = $(this).combogrid('options');  
	var _data = $(this).combogrid('grid').datagrid('getRows');
	var _value = $(this).combogrid('getValue');
	var _b = false;
	for (var i = 0; i < _data.length; i++) {  
        if (_data[i][_options.idField] == _value  ||  _data[i][_options.textField]== _value) {  
            _b=true;  
            break;  
        }  
    }  
	
    if(!_b){  
        $(this).combogrid('setValue', '');  
    }  
}



// 重置
function searchReset(tabId) {
	// 第一步刪除所以數據
	$("#searchFrom").find("*[showType]").each(function(index,data){
			var  showType = $(this).attr("showType");
			if(showType == "datetimebox"){
				$(this).datetimebox("setValue","");
			}else if(showType == "datebox"){
				$(this).datebox("setValue","");
			}else if(showType == "textbox"){
				$(this).textbox("setValue","");
			}else if(showType == "combobox"){
				$(this).combobox("setValue","");
			}
	});
	// 第二步重新加载数据
	$("#"+tabId+"List").datagrid("load",{});
}

/*******************************************************************************
 * 增加方法
 */

function add(des,url,id,width,height,fit) {
	 if(width == null){
		 width = 1000;
	 }
	 if(height == null){
		 height = 500;
	 }
	 $(document.body).ldialog({
		idFled: "add_"+id,
		width: width,
		height: height,
		ishowButton:true,
		fit:fit,
		url: url,
		title: des,
	}); 
}

/** 单个进行删除 */
function delObj(url,gridid) {
	$.messager.confirm('确认对话框', '你确认要删除吗？', function(r){
		if (r){
			$.post(url,function(data){
				var code = data.code;
				if(code != 200){
					$.messager.alert("提示",data.msg,"error");
				}else{
					$.messager.show({
    					title:'消息',
    					msg:'删除成功。',
    					timeout:500,
    					showType:'slide'
    				});
					reloadWindow();
				}		
			},"JSON")
		}
	})
}

/** 批量删除 */
function deleteALLSelect(url,gridid) {
	var rows = $("#"+gridid).datagrid("getSelections");
	if (rows == null || rows.length == 0) {
		$.messager.alert("提示", "请至少选择一条信息进行删除", "info");
		return;
	}
	
	$.messager.confirm('确认对话框',
			'你确认要删除吗?</font></center>',
	function(r) {
		if (r) {
			jQuery(top.document.body).mask("删除信息中，请等候...");
			var ids = [];
			for (index in rows) {
				var rowData = rows[index];
				ids.push(rowData.id);
			}
			var ids = ids.join();
			var param = {
				ids: ids
			}
			$.post(url, param, function(data) {
				jQuery(top.document.body).unmask();
				if (data.code != 200) {
					$.messager.alert('提示', data.msg, "error");
				}else{
					$.messager.show({
    					title:'消息',
    					msg:'删除成功。',
    					timeout:500,
    					showType:'slide'
    				});
				// 重新加载信息，去除已经选择的信息
				reloadWindow();
				}
			}, "JSON")
		}
	});
}


/**
 * 查看信息
 */
function detail(des,url,gridid,width,height,fit) {
	
	var rows = $("#"+gridid).datagrid("getSelections");
	if (rows == null || rows.length  == 0  || rows.length > 1) {
		$.messager.alert("提示", "请选择一条记录进行查看操作", "info");
		return;
	}
	
	var id = rows[0].id;
	
	if(width == null){
		 width = 1000;
	 }
	 if(height == null){
		 height = 500;
	 }
	 $(document.body).ldialog({
		idFled: "show_"+gridid,
		width: width,
		height: height,
		ishowButton:false,
		fit:fit,
		url: url + "?data="+new Date().getTime() + "&id=" + id,
		title: des
	}); 
}

/*******************************************************************************
 * 双击查看信息
 */

function showData(des,url,gridid,width,height,fit) {
	if(width == null){
		 width = 1000;
	 }
	 if(height == null){
		 height = 500;
	 }
	 $(document.body).ldialog({
		idFled: "show_"+gridid,
		width: width,
		height: height,
		ishowButton:false,
		fit:fit,
		url: url + "&data="+new Date().getTime(),
		title: des
	}); 
	
}

/** 修改界面 */
function update(des,url,gridid,width,height,fit) {
	var rows = $("#"+gridid).datagrid("getSelections");
	if (rows == null || rows.length  == 0  || rows.length > 1) {
		$.messager.alert("提示", "请选择一条记录进行查看操作", "info");
		return;
	}
	var id = rows[0].id;
	
	if(width == null){
		 width = 1000;
	 }
	 if(height == null){
		 height = 500;
	 }
	 $(document.body).ldialog({
		idFled: "update_"+gridid,
		width: width,
		height: height,
		ishowButton:true,
		fit:fit,
		url: url + "?data="+new Date().getTime() + "&id=" + id,
		title: des
	}); 
	
}


function convert(rows){
	function exists(rows, parentId){
		for(var i=0; i<rows.length; i++){
			if (rows[i].id == parentId) return true;
		}
		return false;
	}

	var nodes = [];
	// get the top level nodes
	for(var i=0; i<rows.length; i++){
		var row = rows[i];
		if (!exists(rows, row.parentId)){
			nodes.push(row);
		}
	}
	
	var toDo = [];
	for(var i=0; i<nodes.length; i++){
		toDo.push(nodes[i]);
	}
	while(toDo.length){
		var node = toDo.shift();	// the parent node
		// get the children nodes
		for(var i=0; i<rows.length; i++){
			var row = rows[i];
			if (row.parentId == node.id){
				var child = row;
				if (node.children){
					node.children.push(child);
				} else {
					node.children = [child];
				}
				toDo.push(child);
			}
		}
	}
	return nodes;
}

// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
Date.prototype.format = function (fmt) { // author: meizz
 var o = {
     "M+": this.getMonth() + 1, // 月份
     "d+": this.getDate(), // 日
     "h+": this.getHours(), // 小时
     "m+": this.getMinutes(), // 分
     "s+": this.getSeconds(), // 秒
     "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
     "S": this.getMilliseconds() // 毫秒
 };
 if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
 for (var k in o)
 if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
 return fmt;
}


function generateUUID() {
	var d = new Date().getTime();
	var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	  var r = (d + Math.random()*16)%16 | 0;
	  d = Math.floor(d/16);
	  return (c=='x' ? r : (r&0x3|0x8)).toString(16);
	});
	return uuid;
};

/**
 * 英文金钱转中文
 * 
 * @param money
 * @returns {String}
 */
function changeMoneyToChinese(money) {
    var cnNums = new Array("零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"); // 汉字的数字
    var cnIntRadice = new Array("", "拾", "佰", "仟"); // 基本单位
    var cnIntUnits = new Array("", "万", "亿", "兆"); // 对应整数部分扩展单位
    var cnDecUnits = new Array("角", "分", "毫", "厘"); // 对应小数部分单位
    var cnInteger = "整"; // 整数金额时后面跟的字符
    var cnIntLast = "元"; // 整型完以后的单位
    var maxNum = 999999999999999.9999; // 最大处理的数字

    var IntegerNum; // 金额整数部分
    var DecimalNum; // 金额小数部分
    var ChineseStr = ""; // 输出的中文金额字符串
    var parts; // 分离金额后用的数组，预定义

    if (money == "") {
        return "";
    }

    money = parseFloat(money);
    if (money >= maxNum) {
        $.alert('超出最大处理数字');
        return "";
    }
    if (money == 0) {
        ChineseStr = cnNums[0] + cnIntLast + cnInteger;
        return ChineseStr;
    }
    money = money.toString(); // 转换为字符串
    if (money.indexOf(".") == -1) {
        IntegerNum = money;
        DecimalNum = '';
    } else {
        parts = money.split(".");
        IntegerNum = parts[0];
        DecimalNum = parts[1].substr(0, 4);
    }
    if (parseInt(IntegerNum, 10) > 0) { // 获取整型部分转换
        zeroCount = 0;
        IntLen = IntegerNum.length;
        for (i = 0; i < IntLen; i++) {
            n = IntegerNum.substr(i, 1);
            p = IntLen - i - 1;
            q = p / 4;
            m = p % 4;
            if (n == "0") {
                zeroCount++;
            } else {
                if (zeroCount >
                    0) {
                    ChineseStr += cnNums[0];
                }
                zeroCount = 0; // 归零
                ChineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
            }
            if (m == 0 && zeroCount < 4) {
                ChineseStr += cnIntUnits[q];
            }
        }
        ChineseStr += cnIntLast;
        // 整型部分处理完毕
    }
    if (DecimalNum != '') { // 小数部分
        decLen = DecimalNum.length;
        for (i = 0; i < decLen; i++) {
            n = DecimalNum.substr(i, 1);
            if (n != '0') {
                ChineseStr += cnNums[Number(n)] + cnDecUnits[i];
            }
        }
    }
    if (ChineseStr == '') {
        ChineseStr += cnNums[0] + cnIntLast + cnInteger;
    } else if (DecimalNum == '') {
        ChineseStr += cnInteger;
    }
    return ChineseStr;

}


function  fullWindow(){
	var docElm = document.documentElement;
	//W3C 
	if (docElm.requestFullscreen) { 
	  docElm.requestFullscreen(); 
	 
	}
	//FireFox 
	 
	else if (docElm.mozRequestFullScreen) { 
	  docElm.mozRequestFullScreen(); 
	}
	 
	//Chrome等 
	else if (docElm.webkitRequestFullScreen) { 
	  docElm.webkitRequestFullScreen(); 
	}
	 
	//IE11
	else if (docElm.msRequestFullscreen) {
		docElm.msRequestFullscreen();
	 
	}
	
}

function outWindow(){
	if (document.exitFullscreen) { 
		document.exitFullscreen(); 
	} 
	else if (document.mozCancelFullScreen) { 
		document.mozCancelFullScreen(); 
	} 
	else if (document.webkitCancelFullScreen) { 
		document.webkitCancelFullScreen(); 
	} 
	else if (document.msExitFullscreen) { 
		document.msExitFullscreen(); 
	}
	
}




