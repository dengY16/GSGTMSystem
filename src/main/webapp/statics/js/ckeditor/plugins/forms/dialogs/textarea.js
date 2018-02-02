var ctx="/boco-emr";
/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
CKEDITOR.dialog.add( 'textarea', function( editor ) {
	return {
		title: editor.lang.forms.textarea.title,
		minWidth: 350,
		minHeight: 220,
		onShow: function() {
			delete this.textarea;

			var element = this.getParentEditor().getSelection().getSelectedElement();
			if ( element && element.getName() == 'textarea' ) {
				this.textarea = element;
				this.setupContent( element );
			}
		},
		onOk: function() {
			var editor,
				element = this.textarea,
				isInsertMode = !element;

			if ( isInsertMode ) {
				editor = this.getParentEditor();
				element = editor.document.createElement( 'textarea' );
				element.setStyle("resize","none");//禁止右下角拖动标志
			}
			this.commitContent( element );

			if ( isInsertMode )
				editor.insertElement( element );
		},
		contents: [ {
			id: 'info',
			label: editor.lang.forms.textarea.title,
			title: editor.lang.forms.textarea.title,
			elements: [ {
				id: '_cke_saved_name',
				type: 'text',
				label: editor.lang.common.name+"(必填)",
				'default': '',
				accessKey: 'N',
				setup: function( element ) {
					this.setValue( element.data( 'cke-saved-name' ) || element.getAttribute( 'name' ) || '' );
				},
				commit: function( element ) {
					if ( this.getValue() )
						element.data( 'cke-saved-name', this.getValue() );
					else {
						element.data( 'cke-saved-name', false );
						element.removeAttribute( 'name' );
					}
				},
				validate: CKEDITOR.dialog.validate.notEmpty( "请填写名称" )
				
			},
			{
				type: 'hbox',
				widths: [ '30%', '30%','30%' ],
				children: [ {
					id: 'cols',
					type: 'text',
					label: editor.lang.forms.textarea.cols,
					'default': '',
					accessKey: 'C',
					style: 'width:50px',
					validate: CKEDITOR.dialog.validate.integer( editor.lang.common.validateNumberFailed ),
					setup: function( element ) {
						var value = element.hasAttribute( 'cols' ) && element.getAttribute( 'cols' );
						this.setValue( value || '' );
					},
					commit: function( element ) {
						if ( this.getValue() )
							element.setAttribute( 'cols', this.getValue() );
						else
							element.removeAttribute( 'cols' );
					}
				},
				{
					id: 'rows',
					type: 'text',
					label: editor.lang.forms.textarea.rows,
					'default': '',
					accessKey: 'R',
					style: 'width:50px',
					validate: CKEDITOR.dialog.validate.integer( editor.lang.common.validateNumberFailed ),
					setup: function( element ) {
						var value = element.hasAttribute( 'rows' ) && element.getAttribute( 'rows' );
						this.setValue( value || '' );
					},
					commit: function( element ) {
						if ( this.getValue() )
							element.setAttribute( 'rows', this.getValue() );
						else
							element.removeAttribute( 'rows' );
					}
				},{
				    type: 'button',
				    id: 'fromFtl',
				    label: '初始值来自标签',
				    title: '来自标签',
				    style:"margin-top:15px",
				    onClick: function() {
					$("#chooseFtl").remove(); 
					var dialog=this._.dialog;
					$("<div id='chooseFtl' style='padding:10px' class='cke_dialog_body' >" +
							"<input id='ftl_select'>" +
							"<a id='ftl_btn' style='margin-left:10px' type='button'>确定</a>"+
							"</div>").appendTo("body");
					$("#chooseFtl").dialog({
					    title: '选择标签',
					    width: 400,
					    height: 100,
					    closed: false,
					    modal: true,
					    draggable:false,
					    onOpen: function(){
						$(this).window('window').css('zIndex',19000);
					    }
					});
					$("#ftl_select").combobox({
						width:'240px',
					        valueField: 'field',
					        textField: 'name',
					        method:'get',
					        mode:'remote',
					        url: ctx+'/tag/getJsonList'
					});
					$('#ftl_btn').linkbutton({
					    iconCls: 'icon-qiyong'
					});
					$("#ftl_btn").click(function(){
					    $("#chooseFtl").dialog('close');
					    var value=$("#ftl_select").combobox("getValue");
					    if(value!=''){
						dialog.getContentElement('info', 'value').setValue("${"+value+"!''}");
					    }	
					});
					
				    }
				}
				
				
				]
			},
			{
				id: 'value',
				type: 'textarea',
				label: editor.lang.forms.textfield.value,
				'default': '',
				setup: function( element ) {
					this.setValue( element.$.defaultValue );
				},
				commit: function( element ) {
					element.$.value = element.$.defaultValue = this.getValue();
				}
			},
			//自定义边框
			{
				id: 'type',
				type: 'select',
				label: '边框',
				'default': 'full',
				accessKey: 'M',
				items: [
					[ '全边框',	'full' ],
					[ '无边框',	'none' ]
				],
				setup: function( element ) {
				    	var border=element.getStyle("border-style");
				    	if(border=='none'){
				    	    this.setValue("none");
				    	}else if(border=='solid'){
				    	    this.setValue("full");
				    	}else {
				    	 this.setValue("bottom");
				    	}
				},
				commit: function( element ) {
					var myType = this.getValue();
					if(myType=='none'){
					  element.setStyle("border-style","none");
					}
					else if(myType=='bottom'){
					    element.setStyle("border-style","none none solid none");
					    element.setStyle("border-width","1px");
					    element.setStyle("border-color","black");
					}
					else if(myType=='full'){
					    element.setStyle("border-style","solid");
					    element.setStyle("border-color","black");
					    element.setStyle("border-width","1px");
					}
				}
			},
				{
				id: 'required',
				type: 'checkbox',
				label: editor.lang.forms.textfield.required,
				'default': '',
				accessKey: 'Q',
				value: 'required',
				setup: function( element ) {
					this.setValue( element.getAttribute( 'required' ) );
				},
				commit: function( element ) {
					if ( this.getValue() )
						element.setAttribute( 'required', 'required' );
					else
						element.removeAttribute( 'required' );
				}
			} ]
		} ]
	};
} );
