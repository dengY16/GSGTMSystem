/*
 * freemarker的FTL插值标签
 * 
 */
CKEDITOR.plugins.add( 'ftlinterpolation', {
    icons: 'ftlinterpolation',
    init: function( editor ) {
	editor.addCommand( 'ftlinterpolation', new CKEDITOR.dialogCommand( 'ftlinterpolationDialog' ) );
	editor.ui.addButton( 'Ftlinterpolation', {
	    label: '插入FTL标签',
	    command: 'ftlinterpolation',
	    toolbar: 'forms,100'
	});
	CKEDITOR.dialog.add( 'ftlinterpolationDialog', this.path + 'dialogs/ftlinterpolation.js' );
	//editor.addContentsCss(this.path + 'styles/ftlinterpolation.css' );
    }
});