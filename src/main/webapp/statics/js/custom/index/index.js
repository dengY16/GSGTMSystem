

function xuanzheKeshi() {
	$(document.body).ldialog({
	        idFled: "ke_shi_xuan_zhe",
	        width: 400,
	        height: 300,
	        closable:false,
	       // showOutSide:true,
	        ishowButton: false,
	        fit: false,
	        url: baseContextPath+"/views/index/checkkeshi.jsp",
	        title: "切换科室"
	 });
}
/**修改密码界面*/

function edit(des, url, id, width, height, fit) {

    var id = id;

    if (width == null) {
        width = 600;
    }
    if (height == null) {
        height = 238;
    }
    $(document.body).ldialog({
        idFled: "edit_password",
        width: width,
        height: height,
        ishowButton: true,
        fit: fit,
        url: url + "?data=" + new Date().getTime() + "&id=" + id,
        title: des
    });
}

/**查看用户资料界面*/

function detailUser(des, url, id, width, height, fit) {

    var id = id;

    if (width == null) {
        width = 600;
    }
    if (height == null) {
        height = 250;
    }
    $(document.body).ldialog({
        idFled: "show_user",
        width: width,
        height: height,
        ishowButton: false,
        fit: fit,
        url: url + "?data=" + new Date().getTime() + "&id=" + id,
        title: des
    });
}