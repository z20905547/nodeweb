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



	curpage=1;
	totalpage=1;
	params={
			proId:proId,
			now:1,
			first:0,
			last:10
	}
	ajaxGet("get",URLMAP.buildingslist,params,function(data){
		if(data.statusCode=="0000"){
			totalpage=data.data.total;
			var sublist=data.data.list;
			var str="";
			$('.active-list .loading-big').hide();
			for(var i=0;i<sublist.length;i++){
				var imglogo='<img src="/images/logo.png">';

				   //本地环境 logo
					//imglogo='<img src="http://localhost:9080/httpInterface/resource/upload_buildings/'+sublist[i].buildings_id+'/logo/logo.jpg " onerror="/images/logo.png">'
				   //正式环境 logo
					imglogo='<img src="http://www.vfhui.com:8080/management/resource/upload_buildings/'+sublist[i].buildings_id+'/logo/logo.jpg " onerror="/images/logo.png">'

				   //本地环境宣传图 xct
				  // var img='<img src="http://localhost:9080/httpInterface/resource/upload_buildings/'+sublist[i].buildings_id+'/xct/xct.jpg" onerror="/images/logo.png">'
                   //正式环境 xct
				   var img='<img src="http://www.vfhui.com:8080/management/resource/upload_buildings/'+sublist[i].buildings_id+'/xct/xct.jpg" onerror="/images/logo.png">'

				var oneobj=$("<div></div>");
				oneobj.addClass("one-active row").attr("data-id",sublist[i].buildings_id).on("click",function(){
					window.location.href=WEBMAP.buildingsdetail+$(this).attr("data-id")+"/"+proId;
				})
				str='<div class="left-text col-xs-12 col-sm-6 col-md-5 col-lg-4">'+
							'<div class="main_active_logo">'+imglogo+'</div>'+
							'<div class="main_active_buildings_name">'+sublist[i].buildings_name+'</div>'+
							'<div class="main_active_name"><span>原价</span><span>'+sublist[i].nomal_price+'</span><span>元</span></div>'+
							'<div class="main_active_price"><div class="ico_active_price">特价（均价）</div><span>'+sublist[i].active_price+'</span><span>元</span></div>'+
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
		}
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