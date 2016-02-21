$(document).ready(function(){
	//城市选择
	var proObj=$(".proId");
	var cityId=$(".cityId").val();
	getSubList(460000,cityId,proObj);
	proObj.on("change",function(){
		window.location.href="http://localhost:3000/"+$(this).val();
	})
	//公告切换
	$(".small-tab").on("mouseover",function(){
		if($(this).hasClass("active"))return;
		$(".small-tab.active").removeClass("active");
		$(this).addClass("active");
		var did=$(this).attr("data-id");
		$(".notice-content").hide();
		$("."+did).show();
	});
	var curpage=1;
	var totalpage=1;
	var params={
			cityId:cityId,
			now:1,
			first:0,
			last:10
	}
	ajaxGet("get","http://www.vfhui.com:8080/management/jsondata/buildings/getBuildingsDetailList",params,function(){
		if(data.statusCode=="0000"){
			totalpage=data.data.total;
			var sublist=data.data.list;
			var str="";
			for(var i=0;i<sublist.length;i++){
				str='<div class="one-active row"><div class="left-text col-xs-4 col-sm-4 col-md-4 col-lg-4">文字区域</div><div class="right-img col-xs-8 col-sm-8 col-md-8 col-lg-8"><img src="/images/one5.png"/><div class="float-detail">活动介绍</div></div></div>';
			}
			$('.active-list').append(str); 
		}else{
		}
	})
});