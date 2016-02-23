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
				ajaxGet("get",URLMAP.buildingslist,params,function(data){
					if(data.statusCode=="0000"){
						var sublist=data.data.list;
						var str="";
						for(var i=0;i<sublist.length;i++){
							var imglogo='<img src="/images/logo.png">';
							if(sublist[i].path){
								imglogo='<img src="'+sublist[i].path+sublist[i].name+'" onerror="/images/logo.png">'
							}
							var img='<img src="/images/one5.png">';
							if(sublist[i].path){
								imglogo='<img src="'+sublist[i].path+sublist[i].name+'" onerror="/images/one5.png">'
							}
							str='<div class="one-active row" data-id="'+sublist[i].buildings_id+'">'+
									'<div class="left-text col-xs-4 col-sm-4 col-md-4 col-lg-4">'+
										'<div class="main_active_logo">'+imglogo+'</div>'+
										'<div class="main_active_buildings_name">'+sublist[i].buildings_name+'</div>'+
										'<div class="main_active_name"><div class="ico_active_name"></div><span>'+sublist[i].active_name+'</span></div>'+
										'<div class="main_active_price"><div class="ico_active_price">限时特价</div><span>'+sublist[i].active_price+'</span></div>'+
										'<div class="main_active_count_down" data-time="'+sublist[i].end_date+'">'+
											'<div class="ico_active_count_down"></div><span></span>'+
										'</div>'+
									'</div>'+
									'<div class="right-img col-xs-8 col-sm-8 col-md-8 col-lg-8">'+
										img+
										'<div class="float-detail">'+
										sublist[i].active_detail+
										'</div>'+
									'</div>'+
								'</div>';
							$('.active-list').append(str); 
						}
						
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