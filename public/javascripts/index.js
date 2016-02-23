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
	curpage=1;
	totalpage=1;
	var params={
			cityId:cityId,
			now:1,
			first:0,
			last:10
	}
	ajaxGet("get","http://www.vfhui.com:8080/management/jsondata/buildings/getBuildingsDetailList",params,function(data){
		if(data.statusCode=="0000"){
			totalpage=data.data.total;
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
			}
			$('.active-list').append(str); 
		}else{
		}
	})
});