/**
 * 
 */
proId=$("#proId").val();
function ajaxGet(type,url,params,successFun){
	$.ajax({
		type: type,
		url:url,
		async: false,
		dataType: 'jsonp',
		data:params,
		success:successFun,
		error:function(data){
			alert("网络错误");
		}
	});
}
$(".loading-big").append("<img alt='加载中' src='"+WEBURL+"/images/loading_big.gif'>");
$(".loading-small").append("<img alt='加载中' src='"+WEBURL+"/images/loading_big.gif'>");
var nodata="<div class='space_message'><img src='"+WEBURL+"/images/nodata.jpg'><div class='space_message_text'>没有对应数据！</div></div>";
var netbusy="<div class='space_message'><img src='"+WEBURL+"/images/netbusy.jpg'><div class='space_message_text'>网络状况不佳，请稍后重试</div></div>";
$(document).ready(function(){
	//城市选择
//	var proObj=$(".proId");
//	var proId=$("#proId").val();
//	getSubList(100000,proId,proObj);
//	proObj.on("change",function(){
//		window.location.href=WEBURL+$(this).val();
//	})
	
	$("[data-proid="+proId+"]").addClass("active");
	$(".top_city_item").on("click",function(){
		window.location.href=WEBURL+$(this).attr("data-proid");
	})


});

function zhuce() {

	window.open('/users/register2');


}
function zhuce2() {
	var mobile_flag = isMobile();// true为PC端，false为手机端

	if(mobile_flag){
	}else{
		window.open('/buildings/759/460000/478/海花岛');
	}
}

function loupan() {
	var mobile_flag = isMobile();// true为PC端，false为手机端
	if(mobile_flag){
	}else{
		window.open('/buildings/679/460000/399/融创观澜湖公园壹号');
	}
}

function tuangoubaoming() {
	$("#rePriceOpen").css('display','block');
}
function shut() {
	$("#rePriceOpen").css('display','none');
}
// 首页团购对话框退出 弹出是在点击首页大banner时 在head.js 里面
$("#hideNotice").click(function(){
	$("#rePriceOpen").css('display','none');
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
function tuangouPC(){
	//var data = $("#form1").serializeArray(); //自动将form表单封装成json
	//alert(JSON.stringify(data));
	var jsonuserinfo = $('#tuangouPC').serializeObject();
	//alert(JSON.stringify(jsonuserinfo));

	var options = {
		url:URLMAP.demandorder,
		dataType: "json",
		data:JSON.stringify(jsonuserinfo),
		type:"post",
		beforeSubmit: showRequest,

	};

	$('#tuangouPC').ajaxSubmit(options);

	$('#tuangouPC').clearForm();

	function showRequest() {
		var name = $("#NamePC").val();
		var phone = $("#PhonePC").val();
		if (name == '') {
			alert('请输入您的称呼哦!');
			return false;
		}
		if ( phone == '') {
			alert('请输入您的联系方式哦!');
			return false;
		}
		alert("提交成功！团购客服将尽快与您联系，请保持手机畅通！");
		$("#rePriceOpen").css('display','none');
		return true;
	}
}





function tuangouSJ(){
	//var data = $("#form1").serializeArray(); //自动将form表单封装成json
	//alert(JSON.stringify(data));
	var jsonuserinfo = $('#tuangouSJ').serializeObject();
	//alert(JSON.stringify(jsonuserinfo));

	var options = {
		url:URLMAP.demandorder,
		dataType: "json",
		data:JSON.stringify(jsonuserinfo),
		type:"post",
		beforeSubmit: showRequest,

	};

	$('#tuangouSJ').ajaxSubmit(options);

	$('#tuangouSJ').clearForm();

	function showRequest() {
		var name = $("#Name").val();
		var phone = $("#Phone").val();
		if (name == '') {
			alert('请输入您的称呼哦!');
			return false;
		}
		if ( phone == '') {
			alert('请输入您的联系方式哦!');
			return false;
		}
		alert("提交成功！团购客服将尽快与您联系，请保持手机畅通！");
		$("#rePriceOpen").css('display','none');
		return true;
	}
}


function shut() {
	$("#rePriceOpen").css('display','none');
	$("#rePriceOpen2").css('display','none');
}
function yuyuePC(){
	//var data = $("#form1").serializeArray(); //自动将form表单封装成json
	//alert(JSON.stringify(data));
	var jsonuserinfo = $('#yuyuePC').serializeObject();
	//alert(JSON.stringify(jsonuserinfo));

	var options = {
		url:URLMAP.demandorder,
		dataType: "json",
		data:JSON.stringify(jsonuserinfo),
		type:"post",
		beforeSubmit: showRequest,

	};

	$('#yuyuePC').ajaxSubmit(options);

	$('#yuyuePC').clearForm();

	function showRequest() {
		var name = $("#yyNamePC").val();
		var phone = $("#yyPhonePC").val();

		if ( phone == '') {
			alert('请输入您的联系方式哦!');
			return false;
		}
		alert("提交成功！团购客服将尽快与您联系，请保持手机畅通！");
		$("#rePriceOpen2").css('display','none');
		// 发送短信通知
		var buildings_name = $("#buildings_name").val(); //1 团购客户 2 其他预约 3降价通知 4预约看房
		var content = phone;
		//var content = '预约看房用户：'+name+'电话：'+phone+'已经注册，请尽快处理！预约楼盘：'+buildings_name;
		//	alert(content);
		duanxin(content);
		return true;

	}
}
// 首页团购对话框退出 弹出是在点击首页大banner时 在head.js 里面
$("#hideNotice").click(function(){
	$("#rePriceOpen").css('display','none');
});

function yuyuekanfangche() {
	$("#rePriceOpen2").css('display','block');
}

function duanxin(content){
	var ct = content;
	var str = '{ "uid": "14", "pwd": "123456", "mobile": "13876002062", "content":'+ct+' }';
	//var obj = jQuery.parseJSON(str);
	//alert(ct);

	$.ajax({
		url:'http://www.467890.com/Admin/index.php/Message/send',  //api接口地址
		data:str,
		type:'post',    //数据传输方式
		dataType:'json',//数据传输格式
		success:function(data) {
			//执行成功后的回调函数，data为返回的数据
			//alert("成功"+data);
		},
		error : function(data22) {
			//alert("失败"+data22.status+"uu"+JSON.stringify(data22));
		}
	});
}

function isMobile() {
	var userAgentInfo = navigator.userAgent;

	var mobileAgents = [ "Android", "iPhone", "SymbianOS", "Windows Phone", "iPad","iPod"];

	var mobile_flag = false;

	//根据userAgent判断是否是手机
	for (var v = 0; v < mobileAgents.length; v++) {
		if (userAgentInfo.indexOf(mobileAgents[v]) > 0) {
			mobile_flag = true;
			break;
		}
	}

	var screen_width = window.screen.width;
	var screen_height = window.screen.height;

	//根据屏幕分辨率判断是否是手机
	if(screen_width < 500 && screen_height < 800){
		mobile_flag = true;
	}

	return mobile_flag;
}
