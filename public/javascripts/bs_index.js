buildings_name=$("#buildings_name").val();
//city_id=$("#city_id").val();
area_id=$("#area_id").val();
city_id = $(".haveSelM1").val();
active_price = $(".haveSelM2").val();
acreage = $(".haveSelM3").val();
shi = $(".haveSelM4").val();
proId = 460000;
wuye_type='别墅';
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
	pagecount=15;

	params={
			proId:proId,
			now:1,
			first:0,
			last:pagecount,
		    buildings_name:buildings_name,
		    city_id:city_id,
		    area_id:area_id,
		    active_price: active_price,
		    acreage: acreage,
		    shi: shi,
		    wuye_type: wuye_type
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
				var tejia = sublist[i].discount_price;
				var hongbao = '<div class="red_box red_box_top"><p>'+tejia+'元</p></div>';
				var df = sublist[i].server_phone_num;
				var df3 = df.substring(df.length-3,df.length) ;//截取电话后三位
				if (typeof(tejia) == "undefined")
				{
					var hongbao = '';
				}
				oneobj.addClass("one-active row").attr("data-id",sublist[i].buildings_id).attr("data-id2",sublist[i].id).attr("data-id3",sublist[i].buildings_name).on("click",function(){
					window.open(WEBMAP.buildingsdetail+$(this).attr("data-id")+"/"+proId+"/"+$(this).attr("data-id2")+"/"+$(this).attr("data-id3"));
				})
				str='<div class="left-text col-sm-6 col-md-5 col-lg-4">'+
							'<div class="main_active_logo">'+imglogo+'</div>'+hongbao+

							'<div class="main_active_buildings_name">'+sublist[i].buildings_name+'</div>'+
							'<div class="main_active_name"><span>原价</span><span>'+sublist[i].first_price+'</span><span>元</span></div>'+
							'<div class="main_active_price"><div class="ico_active_price">特价</div><span>'+sublist[i].active_price+'</span>元<span></span></div>'+
							'<div class="main_active_count_down" data-time="'+sublist[i].end_date+'">'+
				//				'<div class="ico_active_count_down"></div><span></span>'+
					'<div><a class="u-push alert-box-btn1" onclick="jiangjiatongzhi();" id="86biguiyuanjinshatanjj"><i class="tb-icon"></i>加入团购</a></div><span></span>'+
							'</div>'+
						'</div>'+
						'<div class="right-img col-xs-12  col-sm-6 col-md-7 col-lg-8">'+
							img+
							'<div class="float-detail">'+
					sublist[i].address+
							'</div>'+
					        '<div class="float-detail2"><strong>'+
					          sublist[i].buildings_name+
					        '</strong>&nbsp;* '+
					sublist[i].address+
					' </div>'+
					'<div class="shoujiduan"><span>原价：</span><span>'+sublist[i].first_price+'</span><span>元</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>特价：</span><span>'+sublist[i].active_price+'</span><span>元</span>' +
					'<span class="contact">'+
					'<a href="tel:4008520213,'+df3+'"><img src="../images/11.png" alt="联系电话" style="color:#000"></a>'+
					'</span>'+
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






	params={
		first:0,
		last:5,
		wuye_type: wuye_type
	};

	ajaxGet("get",URLMAP.notecelist,params,function(data){

		if(data.statusCode=="0000"){
			var sublist=data.data.list;
			var str="";
			for(var i=0;i<sublist.length;i++){
				var oneobj=$("<li></li>");
				oneobj.addClass("notice_link").attr("data-id",sublist[i].Id).attr("data-tit",sublist[i].Title).on("click",function(){
					window.open(WEBMAP.noticedetail+$(this).attr("data-id")+'/'+$(this).attr("data-tit"));
				})
				str= '&nbsp;&nbsp;'+sublist[i].Title ;
				oneobj.append(str);
				$('.tt22').append(oneobj);
			}

		}else{
		}
	});


});


$(function () {
	document.onkeydown = function (event) {
		var e = event || window.event || arguments.callee.caller.arguments[0];
		if (e && e.keyCode == 13) {
			submitFourm_p();
		}
	};
});


function submiBtn() {
	$('.keyword').val("请输入楼盘名称");
	buildings_name="";
	//alert(buildings_name);
//city_id=$("#city_id").val();
	area_id=$("#area_id").val();
	city_id = $(".haveSelM1").val();
	active_price = $(".haveSelM2").val();
	acreage = $(".haveSelM3").val();
	shi = $(".haveSelM4").val();
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
		area_id:area_id,
		active_price: active_price,
		acreage: acreage,
		shi: shi,
		wuye_type: wuye_type
	}
	ajaxGet("get",URLMAP.buildingslist,params,function(data){
		$('.active-list').html("");
		if(data.statusCode=="0000"){
		//	alert("33333333333");

			if (typeof(tejia) == "undefined")
			{
				var hongbao = '';
			}
			totalpage=parseInt((data.data.total-1)/pagecount+1);
			var sublist=data.data.list;
			var str="";
			//alert(sublist.length);
			for(var i=0;i<sublist.length;i++){
				var tejia = sublist[i].discount_price;
				var hongbao = '<div class="red_box red_box_top"><p>'+tejia+'元</p></div>';

				var imglogo='<img src="'+HTTPURL+'resource/upload_buildings/'+sublist[i].buildings_id+'/logo/logo.jpg " onerror="/images/logo.png">';
				var img='<img src="'+HTTPURL+'resource/upload_buildings/'+sublist[i].buildings_id+'/xct/xct.jpg" onerror="/images/one5.png">';
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
					sublist[i].address+
					'</div>'+
					'<div class="float-detail2">'+
					sublist[i].buildings_name+
					'&nbsp;* '+
					sublist[i].address+
					' </div>'+
					'<div class="shoujiduan"><span>原价：</span><span>'+sublist[i].first_price+'</span><span>元</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>特价：</span><span>'+sublist[i].active_price+'</span><span>元</span>' +
					'<span class="contact">'+
					'<a href="tel:4008520213"><img src="../images/11.png" alt="联系电话" style="color:#000"></a>'+
					'</span>'+
					'</div>'+
					'</div>';

				oneobj.append(str);
				$('.active-list').append(oneobj);
			}
			//$('.active-list').append(oneobj);
		}else{
			$(".bottom-pull-loading").html("ddddd");
			setTimeout(function(){
				$(".bottom-pull-loading").hide();
			},3000);
		}
		loading=false;
	});


}

//楼盘搜索-单个标注
function submitFourm(){

	buildings_name=$(".keyword").val();

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
		wuye_type: wuye_type
	}


	ajaxGet("get",URLMAP.buildingslist,params,function(data){
		$('.active-list').html("");
		if(data.statusCode=="0000"){

			totalpage=parseInt((data.data.total-1)/pagecount+1);
			var sublist=data.data.list;
			var str="";

			for(var i=0;i<sublist.length;i++){
				var tejia = sublist[i].discount_price;
				var hongbao = '<div class="red_box red_box_top"><p>'+tejia+'元</p></div>';

				var imglogo='<img src="'+HTTPURL+'resource/upload_buildings/'+sublist[i].buildings_id+'/logo/logo.jpg " onerror="/images/logo.png">';
				var img='<img src="'+HTTPURL+'resource/upload_buildings/'+sublist[i].buildings_id+'/xct/xct.jpg" onerror="/images/one5.png">';
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
					sublist[i].address+
					'</div>'+
					'<div class="float-detail2">'+
					sublist[i].buildings_name+
					'&nbsp;* '+
					sublist[i].address+
					' </div>'+
					'<div class="shoujiduan"><span>原价：</span><span>'+sublist[i].first_price+'</span><span>元</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>特价：</span><span>'+sublist[i].active_price+'</span><span>元</span>' +
					'<span class="contact">'+
					'<a href="tel:4008520213"><img src="../images/11.png" alt="联系电话" style="color:#000"></a>'+
					'</span>'+
					'</div>'+
					'</div>';

				oneobj.append(str);
				$('.active-list').append(oneobj);
			}
			//$('.active-list').append(oneobj);
		}else{
			$(".bottom-pull-loading").html("ddddd");
			setTimeout(function(){
				$(".bottom-pull-loading").hide();
			},3000);
		}
		loading=false;
	});
}


function submiBtn_p() {
	$('.keyword_p').val("请输入楼盘名称");
	buildings_name="";
	//alert(buildings_name);
//city_id=$("#city_id").val();
	area_id=$("#area_id").val();
	city_id = $(".haveSelM1_p").val();
	active_price = $(".haveSelM2_p").val();
	acreage = $(".haveSelM3_p").val();
	shi = $(".haveSelM4_p").val();
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
		area_id:area_id,
		active_price: active_price,
		acreage: acreage,
		shi: shi,
		wuye_type: wuye_type
	}
	ajaxGet("get",URLMAP.buildingslist,params,function(data){
		$('.active-list').html("");
		if(data.statusCode=="0000"){
			//	alert("33333333333");

			totalpage=parseInt((data.data.total-1)/pagecount+1);
			var sublist=data.data.list;
			var str="";
			//alert(sublist.length);
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
			//		'<div class="ico_active_count_down"></div><span></span>'+
					'</div>'+
					'</div>'+
					'<div class="right-img col-sm-6 col-md-7 col-lg-8">'+
					img+
					'<div class="float-detail">'+
					sublist[i].address+
					'</div>'+
					'<div class="float-detail2">'+
					sublist[i].buildings_name+
					'&nbsp;* '+
					sublist[i].address+
					' </div>'+
					'<div class="shoujiduan"><span>原价：</span><span>'+sublist[i].first_price+'</span><span>元</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>特价：</span><span>'+sublist[i].active_price+'</span><span>元</span>' +
					'<span class="contact">'+
					'<a href="tel:4008520213"><img src="../images/11.png" alt="联系电话" style="color:#000"></a>'+
					'</span>'+
					'</div>'+
					'</div>';

				oneobj.append(str);
				$('.active-list').append(oneobj);
			}
			//$('.active-list').append(oneobj);
		}else{
			$(".bottom-pull-loading").html("ddddd");
			setTimeout(function(){
				$(".bottom-pull-loading").hide();
			},3000);
		}
		loading=false;
	});


}




//楼盘搜索-单个标注
function submitFourm_p(){

	buildings_name=$(".keyword_p").val();

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
		wuye_type: wuye_type
	}


	ajaxGet("get",URLMAP.buildingslist,params,function(data){
		$('.active-list').html("");
		if(data.statusCode=="0000"){

			totalpage=parseInt((data.data.total-1)/pagecount+1);
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
			//		'<div class="ico_active_count_down"></div><span></span>'+
					'</div>'+
					'</div>'+
					'<div class="right-img col-sm-6 col-md-7 col-lg-8">'+
					img+
					'<div class="float-detail">'+
					sublist[i].address+
					'</div>'+
					'<div class="float-detail2">'+
					sublist[i].buildings_name+
					'&nbsp;* '+
					sublist[i].address+
					' </div>'+
					'<div class="shoujiduan"><span>原价：</span><span>'+sublist[i].first_price+'</span><span>元</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>特价：</span><span>'+sublist[i].active_price+'</span><span>元</span>' +
					'<span class="contact">'+
					'<a href="tel:4008520213"><img src="../images/11.png" alt="联系电话" style="color:#000"></a>'+
					'</span>'+
					'</div>'+



					'</div>';
				oneobj.append(str);
				$('.active-list').append(oneobj);
			}
			//$('.active-list').append(oneobj);
		}else{
			$(".bottom-pull-loading").html("ddddd");
			setTimeout(function(){
				$(".bottom-pull-loading").hide();
			},3000);
		}
		loading=false;
	});
}

function loupan1() {
	window.open('/buildings/505/460000/126/石梅山庄');
}
function loupan2() {
	window.open('/buildings/585/460000/298/富力湾	');
}
function loupan3() {
	window.open('/buildings/505/460000/126/石梅山庄');
}

