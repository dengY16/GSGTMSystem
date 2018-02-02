var ctx="/boco-emr";
/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
CKEDITOR.dialog.add( 'textfield', function( editor ) {

	var acceptedTypes = { email: 1, password: 1, search: 1, tel: 1, text: 1, url: 1 };

	function autoCommit( data ) {
		var element = data.element;
		var value = this.getValue();

		value ? element.setAttribute( this.id, value ) : element.removeAttribute( this.id );
	}

	function autoSetup( element ) {
		var value = element.hasAttribute( this.id ) && element.getAttribute( this.id );
		this.setValue( value || '' );
	}

	return {
		title: editor.lang.forms.textfield.title,
		minWidth: 350,
		minHeight: 150,
		onShow: function() {
			delete this.textField;

			var element = this.getParentEditor().getSelection().getSelectedElement();
			if ( element && element.getName() == 'input' && ( acceptedTypes[ element.getAttribute( 'type' ) ] || !element.getAttribute( 'type' ) ) ) {
				this.textField = element;
				this.setupContent( element );
			}
		},
		onOk: function() {
			var editor = this.getParentEditor(),
				element = this.textField,
				isInsertMode = !element;

			if ( isInsertMode ) {
				element = editor.document.createElement( 'input' );
				element.setAttribute( 'type', 'text' );
			}

			var data = { element: element };

			if ( isInsertMode )
				editor.insertElement( data.element );

			this.commitContent( data );

			// Element might be replaced by commitment.
			if ( !isInsertMode )
				editor.getSelection().selectElement( data.element );
		},
		onLoad: function() {
			this.foreach( function( contentObj ) {
				if ( contentObj.getValue ) {
					if ( !contentObj.setup )
						contentObj.setup = autoSetup;
					if ( !contentObj.commit )
						contentObj.commit = autoCommit;
				}
			} );
		},
		contents: [ {
			id: 'info',
			label: editor.lang.forms.textfield.title,
			title: editor.lang.forms.textfield.title,
			elements: [ {
				type: 'hbox',
				widths: [ '40%', '40%','20%' ],
				children: [ {
					id: '_cke_saved_name',
					type: 'text',
					label: editor.lang.forms.textfield.name+"(必填)",
					'default': '',
					accessKey: 'N',
					setup: function( element ) {
						this.setValue( element.data( 'cke-saved-name' ) || element.getAttribute( 'name' ) || '' );
					},
					commit: function( data ) {
						var element = data.element;

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
					id: 'value',
					type: 'text',
					label: editor.lang.forms.textfield.value,
					'default': '',
					accessKey: 'V',
					commit: function( data ) {
						if ( CKEDITOR.env.ie && !this.getValue() ) {
							var element = data.element,
								fresh = new CKEDITOR.dom.element( 'input', editor.document );
							element.copyAttributes( fresh, { value: 1 } );
							fresh.replace( element );
							data.element = fresh;
						} else {
							autoCommit.call( this, data );
						}
					}
				},
				{
				    type: 'button',
				    id: 'fromFtl',
				    label: '来自标签',
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
				type: 'hbox',
				widths: [ '50%', '50%' ],
				children: [ {
					id: 'size',
					type: 'text',
					label: editor.lang.forms.textfield.charWidth,
					'default': '',
					accessKey: 'C',
					style: 'width:50px',
					validate: CKEDITOR.dialog.validate.integer( editor.lang.common.validateNumberFailed )
				},
				{
					id: 'maxLength',
					type: 'text',
					label: editor.lang.forms.textfield.maxChars,
					'default': '',
					accessKey: 'M',
					style: 'width:50px',
					validate: CKEDITOR.dialog.validate.integer( editor.lang.common.validateNumberFailed )
				} ],
				onLoad: function() {
					// Repaint the style for IE7 (https://dev.ckeditor.com/ticket/6068)
					if ( CKEDITOR.env.ie7Compat )
						this.getElement().setStyle( 'zoom', '100%' );
				}
			},
			{
				id: 'type',
				type: 'select',
				label: editor.lang.forms.textfield.type,
				'default': 'text',
				accessKey: 'M',
				items: [
				        [ editor.lang.forms.textfield.typeText,		'text' ],
					[ editor.lang.forms.textfield.typeEmail,	'email' ],
					[ editor.lang.forms.textfield.typePass,		'password' ],
					[ editor.lang.forms.textfield.typeSearch,	'search' ],
					[ editor.lang.forms.textfield.typeTel,		'tel' ],			
					[ editor.lang.forms.textfield.typeUrl,		'url' ]
				],
				setup: function( element ) {
					this.setValue( element.getAttribute( 'type' ) );
				},
				commit: function( data ) {
					var element = data.element;

					if ( CKEDITOR.env.ie ) {
						var elementType = element.getAttribute( 'type' );
						var myType = this.getValue();

						if ( elementType != myType ) {
							var replace = CKEDITOR.dom.element.createFromHtml( '<input type="' + myType + '"></input>', editor.document );
							element.copyAttributes( replace, { type: 1 } );
							replace.replace( element );
							data.element = replace;
						}
					} else {
						element.setAttribute( 'type', this.getValue() );
					}
				}
			},
			//自定义边框
			{
				id: 'type',
				type: 'select',
				label: '边框',
				'default': 'bottom',
				accessKey: 'M',
				items: [
				        [ '下边框',	'bottom' ],
					[ '无边框',	'none' ],
					[ '全边框',	'full' ]
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
				commit: function( data ) {
					var element = data.element;
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
				commit: function( data ) {
					var element = data.element;
					if ( this.getValue() )
						element.setAttribute( 'required', 'required' );
					else
						element.removeAttribute( 'required' );
				}
			} ]
		} ]
	};
} );
