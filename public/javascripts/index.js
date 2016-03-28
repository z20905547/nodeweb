buildings_name=$("#buildings_name").val();
city_id=$("#city_id").val();
area_id=$("#area_id").val();
$(document).ready(function(){
	//公告切换
//	$(".small-tab").on("mouseover",function(){
//		if($(this).hasClass("active"))return;
//		$(".small-tab.active").removeClass("active");
//		$(this).addClass("active");
//		var did=$(this).attr("data-id");
//		$(".notice-content").hide();
//		$("."+did).show();
//	});


	loading=true;
	curpage=1;
	totalpage=1;
	pagecount=10;
	params={
			proId:proId,
			now:1,
			first:0,
			last:pagecount,
		    buildings_name:buildings_name,
		    city_id:city_id,
		    area_id:area_id
	}
	ajaxGet("get",URLMAP.buildingslist,params,function(data){
		
		if(data.statusCode=="0000"){
			totalpage=parseInt((data.data.total-1)/pagecount+1);
			var sublist=data.data.list;
			var str="";
			for(var i=0;i<sublist.length;i++){
				var imglogo='<img src="'+HTTPURL+'resource/upload_buildings/'+sublist[i].buildings_id+'/logo/logo.jpg " onerror="/images/logo.png">';
				var img='<img src="'+HTTPURL+'resource/upload_buildings/'+sublist[i].buildings_id+'/xct/xct.jpg" onerror="/images/one5.png">';
				var oneobj=$("<div></div>");
				oneobj.addClass("one-active row").attr("data-id",sublist[i].buildings_id).attr("data-id2",sublist[i].id).on("click",function(){
					window.location.href=WEBMAP.buildingsdetail+$(this).attr("data-id")+"/"+proId+"/"+$(this).attr("data-id2");
				})
				str='<div class="left-text col-xs-12 col-sm-6 col-md-5 col-lg-4">'+
							'<div class="main_active_logo">'+imglogo+'</div>'+
							'<div class="main_active_buildings_name">'+sublist[i].buildings_name+'</div>'+
							'<div class="main_active_name"><span>原价</span><span>'+sublist[i].first_price+'</span><span>元</span></div>'+
							'<div class="main_active_price"><div class="ico_active_price">特价</div><span>'+sublist[i].active_price+'</span><span>元</span></div>'+
							'<div class="main_active_count_down" data-time="'+sublist[i].end_date+'">'+
								'<div class="ico_active_count_down"></div><span></span>'+
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
			
		}else{
			$(".bottom-pull-loading").html("网络繁忙，稍后重试");
			setTimeout(function(){
				$(".bottom-pull-loading").hide();
			},3000);
		}
		loading=false;
	});

	ajaxGet("get",URLMAP.notecelist,null,function(data){
		if(data.statusCode=="0000"){
			var sublist=data.data.list;
			var str="";
			for(var i=0;i<sublist.length;i++){




				var oneobj=$("<div></div>");
				oneobj.addClass("one-active row").attr("data-id",sublist[i].Id).on("click",function(){
					window.location.href=URLMAP.noticedetail+$(this).attr("data-id");
				})
				str=sublist[i].Title+'   ['+sublist[i].MessageDate+']';
				oneobj.append(str);
				$('.notice-item').append(oneobj);
			}

		}else{
		}
	});


});

