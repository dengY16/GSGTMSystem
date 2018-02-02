function submitFrom() {
    var pwd1 = $("#xinMiMa").val();
    var pwd2 = $("#queRenXinMiMa").val();
    if (pwd1 == pwd2) {
        var s = $("#editsubmitFrom").form('enableValidation').form('validate');
        //如果验证通过往后台提交代码
        if (s) {
            var url = baseurl + '/login/editPassword.do?data=' + new Date().getTime();
            var data = $("#editsubmitFrom").serialize();

            $.post(url, data, function(data) {
                var code = data.code;
                if (code != 200) {
                    $.messager.alert("提示", data.msg, "error");
                } else {
                    $.messager.alert("提示", data.msg, "success", function() {
                        parent.$("#s_edit_password").window("close");
                        //直接刷新父页面
                        parent.reloadWindow();
                    });
                }

            }, "JSON")

        }
    } else {
        document.getElementById("tishi").innerHTML = "<font color='red'>两次密码不相同</font>";
    }
}