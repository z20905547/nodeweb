

$(document).ready(function(){



    //radio ui
    $('.webui :radio').each(function () {
        $(this).hide();
        var html = '<u type="radio" class="ui_radio"></u>';
        $(this).after(html)
    });
    $('.ui_radio label').click(function (e) {
        var rdo = $(this).find('.ui_radio');
        rdo.prev().attr('checked', true);
        var ids = 'input[name="' + rdo.prev().attr('name') + '"]';
        $(ids).each(function () { $(this).next().removeClass('radio_on'); })
        rdo.addClass('radio_on');
        event.stopPropagation(); event.preventDefault();
    });
    //checkbox ui
    $('.webui :checkbox').each(function () {
        $(this).hide();
        var html = '<u type="checkbox" class="ui_checkbox"></u>';
        $(this).after(html)
    });
    $('.ui_checkbox label').click(function (e) {
        var chkbox = $(this).find('.ui_checkbox');
        if (chkbox.hasClass('checkbox_on')) {
            chkbox.removeClass('checkbox_on');
            $(this).find(':checkbox').attr("checked", false);
        } else {
            chkbox.addClass('checkbox_on');
            $(this).find(':checkbox').attr('checked', true)
        }
        event.stopPropagation(); event.preventDefault();
    });



});

$(function(){
    $("#dropdown p").click(function(){
        var ul = $("#dropdown ul");
        if(ul.css("display")=="none"){
            ul.slideDown("fast");
        }else{
            ul.slideUp("fast");
        }
    });
    $("#dropdown ul li a").click(function(){
        var txt = $(this).text();
        $("#dropdown p").html(txt);
        var value = $(this).attr("rel");
        $("#dropdown ul").hide();
        $("#yusuan").val(value);
    });


});



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

function onClik123(){
    //var data = $("#form1").serializeArray(); //自动将form表单封装成json
    //alert(JSON.stringify(data));
    var jsonuserinfo = $('#welcomeform').serializeObject();
   //alert(JSON.stringify(jsonuserinfo));

    var options = {
        url:URLMAP.demandorder,
        dataType: "json",
        data:JSON.stringify(jsonuserinfo),
        type:"post",
        dataType: "json",
        beforeSubmit: showRequest,

    };

    $('#welcomeform').ajaxSubmit(options);

    $('#welcomeform').clearForm();

    function showRequest() {
        var name = $("#Name").val();
        var phone = $("#Phone").val();
        if (name == '') {
            alert('请输入您的称呼哦!');
            return false;
        }
        var phone = $("#Phone").val();
        if ( phone == '') {
            alert('请输入您的联系方式哦!');
            return false;
        }
        alert("提交成功！我们将在24小时之内处理您的需求！");
        return true;
    }
}

function onClik456(){
    // var data1 = $("#registerPage").serializeArray(); //自动将form表单封装成json
    //  alert(JSON.stringify(data1));
    var jsonuserinfo = $('#registerPage').serializeObject();
   // alert(JSON.stringify(jsonuserinfo));

    var options = {
        url:URLMAP.demandorder,
        data:JSON.stringify(jsonuserinfo),
        type:"post",
        dataType: "JSONP",
        async:true,
        beforeSubmit: showRequest()



    };
    $('#registerPage').ajaxSubmit(options);

    //  $('#registerPage').clearForm();

    gy_duanxin();
    function showRequest() {

        var jsonuserinfo2 = $('#registerPage').serializeObject();
        var name =jsonuserinfo2['Name'];
        var phone = jsonuserinfo2['Phone'];

        if (name == '') {

            if ($("#sendFloat").css('display') == "none") {
                $("#sendFloat").css("display", 'block');
            }

            if ($("#sendText").css('display') == "none") {
                $("#sendText").css("display", 'block');
            }
            setTimeout(func, "1000");//三秒后执行

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

            setTimeout(func, "1000");//三秒后执行

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

        alert("提交成功！我们将在24小时之内处理您的需求！");
        $(location).attr('href', 'http://www.vfhui.com');


    }
}