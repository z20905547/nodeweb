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

function bannerClick() {
	window.open('/users/register2');
}

function bannerClick2() {
	window.open('/buildings/505/460000/126/石梅山庄');
}

function bannerClick3() {
	window.open('/buildings/679/460000/399/融创观澜湖公园壹号');
}