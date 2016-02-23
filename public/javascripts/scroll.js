$(function () {  
	var loading=false;
	var i = 4;$(window).bind("scroll", function (event)  
	{  
		if(loading)return;
		//滚动条到网页头部的 高度，兼容ie,ff,chrome  
		var top = document.documentElement.scrollTop + document.body.scrollTop;  
		//网页的高度  
		var textheight = $(document).height();  
		// 网页高度-top-当前窗口高度  
		if (textheight - top - $(window).height() <= 100) {
			loading=true;
			if (curpage >= totalpage) { 
				$(".bottom-pull-loading").html("到底了,没数据了，别拉了.....");
				$(".bottom-pull-loading").show();
//				$(window).unbind("scroll");
				setTimeout(function(){
					$(".bottom-pull-loading").hide();
				},3000);
				return; 
			} 
			curpage++;
			$(".bottom-pull-loading").html("数据加载中，请稍后......");
			$(".bottom-pull-loading").show();
//			setTimeout(function(){
				//$('#div1').css("height", $(document).height() + 100);
				params.first=curpage*10;
				ajaxGet("get","http://localhost:9080/httpInterface/jsondata/buildings/getBuildingsDetailList",params,function(data){
					if(data.statusCode=="0000"){
						var sublist=data.data.list;
						var str="";
						for(var i=0;i<sublist.length;i++){
							str='<div class="one-active row"><div class="left-text col-xs-4 col-sm-4 col-md-4 col-lg-4">文字区域</div><div class="right-img col-xs-8 col-sm-8 col-md-8 col-lg-8"><img src="/images/one5.png"/><div class="float-detail">活动介绍</div></div></div>';
						}
						$('.active-list').append(str); 
						$(".bottom-pull-loading").hide();
						loading=false;
					}else{
						$(".bottom-pull-loading").html("网络繁忙，稍后重试");
						setTimeout(function(){
							$(".bottom-pull-loading").hide();
						},3000);
						
						$('.active-list').append(str); 
						curpage--;
						loading=false;
					}
				});
				
//			},3000);
			
		}  
	});  
})  