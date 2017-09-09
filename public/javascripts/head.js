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

function loupan() {
	window.open('/buildings/505/460000/126/石梅山庄');
}

function tuangoubaoming() {
	$("#rePriceOpen").css('display','block');
}
function shut() {
	$("#rePriceOpen").css('display','none');
}


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
	alert(JSON.stringify(jsonuserinfo));

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