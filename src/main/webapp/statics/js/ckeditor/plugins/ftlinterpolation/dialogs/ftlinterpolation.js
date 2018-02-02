/**
 * @author:zhangxudong
 */
var ctx="/boco-emr";
CKEDITOR.dialog.add('ftlinterpolationDialog', function(editor) {
    return {
	title : '插值标签选择',
	minWidth : 300,
	minHeight : 160,
	className : 'selectpicker',
	contents : [ {
	    id : 'choose',
	    label : '选择',
	    title : '插值标签选择',
	    elements : [ {
		id : 'ftl',
		type : 'select',
		label : '选择插值标签:',
		'default' : 'none',
		items : [],
		onLoad : function() {
		    $(this.getInputElement().$).combobox({
			width:'240px',
		        valueField: 'field',
		        textField: 'name',
		        method:'get',
		        mode:'remote',
		        url: ctx+'/tag/getJsonList'
		    	});
		 
		},
		onShow :function(){
		    $(".textbox-addon").css("position","absolute");
		    $(".textbox").css("position","relative");
		    $(".combo-arrow").css("background","url('"+ctx+"/statics/themes/easyui/images/combo_arrow.png') no-repeat center center");
		    $(this.getInputElement().$).combobox('setValue','');
		}
	    },{
		id: 'defaultValue',
		type: 'text',
		label: "缺省值",
		'default': '',
		style:"width:240px"
	    } ]
	} ],
	onOk: function() {
	    var dialog = this;	
	    var defaultValue=dialog.getValueOf('choose', 'defaultValue');
	    var ftlValue=$(dialog.getContentElement('choose', 'ftl').getInputElement().$).combobox('getValue') ;
	    if(ftlValue==''||ftlValue==null){
		layer.alert("请选择一项")
		return;
	    }
	    if(defaultValue.trim()==''){
		defaultValue="&nbsp;";
		var length=defaultValue.length;
		for(var i=0;i<length;i++){
		    defaultValue=defaultValue+"&nbsp;";
		}
	    }
	    editor.insertHtml("${"+ftlValue+"!'"+defaultValue+"'}");
	}
    };
});