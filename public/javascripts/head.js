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
	