/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
    config.toolbarGroups = [
	        		{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
	        		{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
	        		{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
	        		{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
	        		{ name: 'colors', groups: [ 'colors' ] },
	        		{ name: 'tools', groups: [ 'tools' ] },
	        		{ name: 'links', groups: [ 'links' ] },
	        		{ name: 'insert', groups: [ 'insert' ] },
	        		'/',
	        		{ name: 'styles', groups: [ 'styles' ] },
	        		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
	        		{ name: 'forms', groups: [ 'forms' ] },
	        		'/',
	        		{ name: 'others', groups: [ 'others' ] },
	        		{ name: 'about', groups: [ 'about' ] }
	        	];

	 config.removeButtons = 'Save,NewPage,Templates,Paste,PasteText,PasteFromWord,Scayt,Form,CreateDiv,Flash,About';
	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'dialogui,dialog,about,a11yhelp,dialogadvtab,basicstyles,bidi,blockquote,notification,button,toolbar,clipboard,panelbutton,panel,floatpanel,colorbutton,colordialog,templates,menu,contextmenu,copyformatting,div,resize,elementspath,enterkey,entities,popup,filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo,font,forms,format,horizontalrule,htmlwriter,iframe,wysiwygarea,image,indent,indentblock,indentlist,smiley,justify,menubutton,language,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastetext,pastefromword,preview,print,removeformat,save,selectall,showblocks,showborders,sourcearea,specialchar,scayt,stylescombo,tab,table,tabletools,tableselection,undo,lineutils,widgetselection,widget,filetools,notificationaggregator,uploadwidget,uploadimage,wsc,tableresize';
	config.skin = 'office2013';
	config.font_names = 'Arial;Times New Roman;Verdana;宋体;黑体;楷体';
	config.extraPlugins = 'ftlinterpolation';
	
};
