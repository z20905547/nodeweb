


$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

//登录
function onClik123() {
  //  var data = $("#loginForm").serializeArray(); //自动将form表单封装成json
 //   alert(JSON.stringify(data));
    var jsonuserinfo = $('#loginForm').serializeObject();
    ////alert(JSON.stringify(jsonuserinfo));
    //
    var options = {
        url:URLMAP.gy_login,
        data:JSON.stringify(jsonuserinfo),
        type:"post",
        dataType: "JSONP",
        eforeSubmit: showRequest,
        success: function (data) {

            if (data.statusCode == "1111"){
                if ($("#sendFloat").css('display') == "none") {
                    $("#sendFloat").css("display", 'block');
                }

                if ($("#sendText2").css('display') == "none") {
                    $("#sendText2").css("display", 'block');
                }

                setTimeout(func, "2000");//三秒后执行

                function func() {
                    if ($("#sendText2").css('display') == "block") {
                        $("#sendText2").css("display", 'none');
                    }
                    if ($("#sendFloat").css('display') == "block") {
                        $("#sendFloat").css("display", 'none');
                    }
                }
                return false;
            };
            if (data.statusCode == "0000"){
                //req.session.sign=true;
                //req.session.p_id=data.data.p_id;
                //req.session.worker_name=data.data.worker_name;
                //req.session.worker_sex=data.data.worker_sex;
                //req.session.worker_age=data.data.worker_age;
                //req.session.partners_mark=data.data.partners_mark;
                //req.session.user_name=data.data.user_name;
                //req.session.userName=data.data.worker_name;
                //req.session.worker_shenfenzheng=data.data.worker_shenfenzheng;
                //req.session.worker_email=data.data.worker_email;
                //req.session.wechat=data.data.wechat;
                //req.session.remark=data.data.remark;
                //req.session.password=data.data.password;
                //req.session.record_time=data.data.record_time;
                //req.session.is_right=data.data.is_right;
                str='<input type="hidden" name="worker_name" id="worker_name" value="'+data.data.worker_name+'"> '+
                    '<input type="hidden" name="worker_id" id="worker_id" value="'+data.data.id+'"> '+
                    '<input type="hidden" name="p_id" id="p_id" value="'+data.data.p_id+'"> '+
                    '<input type="hidden" name="partners_mark" id="partners_mark" value="'+data.data.partners_mark+'"> '+
                    '<input type="hidden" name="remark" id="remark" value="'+data.data.remark+'"> '+
                    '<input type="hidden" name="user_name" id="user_name" value="'+data.data.user_name+'"> ';
                //oneobj.append(str);
                $('.hedden').append(str);

                document.getElementById('loginForm').submit();
      //          res.render('users/user_info', { title: '我的信息 | 共赢经纪',worker_name:worker_name});
      //          alert("333333333333");
            }else{//登陆失败，返回登陆页面
       //         res.render('users/login', { title: '登陆 | 海南唯房会',errorMsg:userName+'闲人免进！'});
            }

        },
        error: function () {

            alert("系统出现错误，请联系管理员");
        }
    };
    $('#loginForm').ajaxSubmit(options);
    //
  //  $('#loginForm').clearForm();

    function showRequest() {
        var name = $("#userName").val();
        var phone = $("#passWord").val();
        if (name == '') {

            if ($("#sendText").css('display') == "none") {
                $("#sendFloat").css("display", 'block');
            }

            if ($("#sendText").css('display') == "none") {
                $("#sendText").css("display", 'block');
            }
            setTimeout(func, "1500");//三秒后执行

            function func() {
                if ($("#sendText").css('display') == "block") {
                    $("#sendText").css("display", 'none');
                }
                if ($("#sendFloat").css('display') == "block") {
                    $("#sendFloat").css("display", 'none');
                }
            }

            return false;
        }
        var phone = $("#passWord").val();
        if (phone == '') {
            if ($("#sendFloat").css('display') == "none") {
                $("#sendFloat").css("display", 'block');
            }

            if ($("#sendText").css('display') == "none") {
                $("#sendText").css("display", 'block');
            }

            setTimeout(func, "1500");//三秒后执行

            function func() {
                if ($("#sendText").css('display') == "block") {
                    $("#sendText").css("display", 'none');
                }
                if ($("#sendFloat").css('display') == "block") {
                    $("#sendFloat").css("display", 'none');
                }
            }

            return false;
        }

        document.getElementById('loginForm').submit();

    }
}

//注册

function onClik456(){
  // var data1 = $("#registerPage").serializeArray(); //自动将form表单封装成json
  //  alert(JSON.stringify(data1));
    var jsonuserinfo = $('#registerPage').serializeObject();
    //alert(JSON.stringify(jsonuserinfo));

    var options = {
        url:URLMAP.gy_register,
        data:JSON.stringify(jsonuserinfo),
        type:"post",
        dataType: "JSONP",
        beforeSubmit: showRequest,
        success: function (data) {

            if (data.statusCode == "1111"){
                if ($("#sendFloat").css('display') == "none") {
                    $("#sendFloat").css("display", 'block');
                }

            if ($("#sendText5").css('display') == "none") {
                $("#sendText5").css("display", 'block');
            }

            setTimeout(func, "2000");//三秒后执行

            function func() {
                if ($("#sendText5").css('display') == "block") {
                    $("#sendText5").css("display", 'none');
                }
                if ($("#sendFloat").css('display') == "block") {
                    $("#sendFloat").css("display", 'none');
                }
            }
            return false;
            }

            if (data.statusCode == "2222"){
                if ($("#sendFloat").css('display') == "none") {
                    $("#sendFloat").css("display", 'block');
                }

                if ($("#sendText6").css('display') == "none") {
                    $("#sendText6").css("display", 'block');
                }

                setTimeout(func, "2000");//三秒后执行

                function func() {
                    if ($("#sendText6").css('display') == "block") {
                        $("#sendText6").css("display", 'none');
                    }
                    if ($("#sendFloat").css('display') == "block") {
                        $("#sendFloat").css("display", 'none');
                    }
                }
                return false;
            }

            if (data.statusCode == "0000"){
                if ($("#sendFloat").css('display') == "none") {
                    $("#sendFloat").css("display", 'block');
                }

                if ($("#sendText7").css('display') == "none") {
                    $("#sendText7").css("display", 'block');
                }

                setTimeout(func, "3000");//三秒后执行

                function func() {
                    if ($("#sendText7").css('display') == "block") {
                        $("#sendText7").css("display", 'none');
                    }
                    if ($("#sendFloat").css('display') == "block") {
                        $("#sendFloat").css("display", 'none');
                    }
                    ;
                }
                setTimeout(window.location.href = "/users/login", "30000")


            }

        },
        error: function () {

            alert("系统出现错误，请联系管理员");
        }
    };
    $('#registerPage').ajaxSubmit(options);

  //  $('#registerPage').clearForm();


    function showRequest() {
        var name = $("#usname").val();
        var phone = $("#user_name").val(); //手机号码
        var password = $("#password").val();
        var partners_mark = $("#partners_mark").val();// 机构编码


        if (name == '') {

            if ($("#sendFloat").css('display') == "none") {
                $("#sendFloat").css("display", 'block');
            }

            if ($("#sendText").css('display') == "none") {
                $("#sendText").css("display", 'block');
            }
            setTimeout(func, "2000");//三秒后执行

            function func() {
                if ($("#sendText").css('display') == "block") {
                    $("#sendText").css("display", 'none');
                }
                if ($("#sendFloat").css('display') == "block") {
                    $("#sendFloat").css("display", 'none');
                }
            }

            return false;
        }

        if (phone == '') {
            if ($("#sendFloat").css('display') == "none") {
                $("#sendFloat").css("display", 'block');
            }

            if ($("#sendText2").css('display') == "none") {
                $("#sendText2").css("display", 'block');
            }

            setTimeout(func, "2000");//三秒后执行

            function func() {
                if ($("#sendText2").css('display') == "block") {
                    $("#sendText2").css("display", 'none');
                }
                if ($("#sendFloat").css('display') == "block") {
                    $("#sendFloat").css("display", 'none');
                }
            }
            return false;
        }



        if (password == '') {
            if ($("#sendFloat").css('display') == "none") {
                $("#sendFloat").css("display", 'block');
            }

            if ($("#sendText3").css('display') == "none") {
                $("#sendText3").css("display", 'block');
            }

            setTimeout(func, "2000");//三秒后执行

            function func() {
                if ($("#sendText3").css('display') == "block") {
                    $("#sendText3").css("display", 'none');
                }
                if ($("#sendFloat").css('display') == "block") {
                    $("#sendFloat").css("display", 'none');
                }
            }
            return false;
        }


        if (partners_mark == '') {
            if ($("#sendFloat").css('display') == "none") {
                $("#sendFloat").css("display", 'block');
            }

            if ($("#sendText4").css('display') == "none") {
                $("#sendText4").css("display", 'block');
            }

            setTimeout(func, "2000");//三秒后执行

            function func() {
                if ($("#sendText4").css('display') == "block") {
                    $("#sendText4").css("display", 'none');
                }
                if ($("#sendFloat").css('display') == "block") {
                    $("#sendFloat").css("display", 'none');
                }
            }
            return false;
        }
    }
}

// 登录

