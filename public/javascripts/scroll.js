$(function () {  
	
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
				params.first=(curpage-1)*pagecount;
			//alert("first:"+params.first+";curpage:"+curpage+"pagecount:"+pagecount+"totalpage:"+totalpage);
				ajaxGet("get",URLMAP.buildingslist,params,function(data){
					if(data.statusCode=="0000"){
						var sublist=data.data.list;

						var str="";
						for(var i=0;i<sublist.length;i++){
							var imglogo='<img src="'+HTTPURL+'resource/upload_buildings/'+sublist[i].buildings_id+'/logo/logo.jpg " onerror="/images/logo.png">';
							var img='<img src="'+HTTPURL+'resource/upload_buildings/'+sublist[i].buildings_id+'/xct/xct.jpg" onerror="/images/one5.png">';
							var tejia = sublist[i].discount_price;
							var hongbao = '<div class="red_box red_box_top"><p>'+tejia+'元</p></div>';
							if (typeof(tejia) == "undefined")
							{
								var hongbao = '';
							}
							var oneobj=$("<div></div>");
							oneobj.addClass("one-active row").attr("data-id",sublist[i].buildings_id).attr("data-id2",sublist[i].id).attr("data-id3",sublist[i].buildings_name).on("click",function(){
								window.open(WEBMAP.buildingsdetail+$(this).attr("data-id")+"/"+proId+"/"+$(this).attr("data-id2")+"/"+$(this).attr("data-id3"));
							})
							str='<div class="left-text col-xs-12 col-sm-6 col-md-5 col-lg-4">'+
										'<div class="main_active_logo">'+imglogo+'</div>'+hongbao+
										'<div class="main_active_buildings_name">'+sublist[i].buildings_name+'</div>'+
										'<div class="main_active_name"><span>原价</span><span>'+sublist[i].first_price+'</span><span>元</span></div>'+
										'<div class="main_active_price"><div class="ico_active_price">特价</div><span>'+sublist[i].active_price+'</span><span>元</span></div>'+
										'<div class="main_active_count_down" data-time="'+sublist[i].end_date+'">'+
										//	'<div class="ico_active_count_down"></div><span></span>'+
										'</div>'+
									'</div>'+
									'<div class="right-img col-sm-6 col-md-7 col-lg-8">'+
										img+
										'<div class="float-detail">'+
										sublist[i].active_detail+
										'</div>'+
									'</div>';
							oneobj.append(str);
							$('.active-list').append(oneobj); 
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