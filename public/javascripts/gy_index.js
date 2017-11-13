buildings_name=$("#buildings_name").val();
//city_id=$("#city_id").val();
area_id=$("#area_id").val();
city_id = $(".haveSelM1").val();
active_price = $(".haveSelM2").val();
acreage = $(".haveSelM3").val();
shi = $(".haveSelM4").val();
proId = 460000;


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
		    area_id:area_id,
		    active_price: active_price,
		    acreage: acreage,
		    shi: shi
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
				if (typeof(tejia) == "undefined")
				{
					var hongbao = '';
				}
				oneobj.addClass("one-active row").attr("data-id",sublist[i].buildings_id).attr("data-id2",sublist[i].id).attr("data-id3",sublist[i].buildings_name).on("click",function(){
					window.open(WEBMAP.gy_buildingsdetail+$(this).attr("data-id")+"/"+proId+"/"+$(this).attr("data-id2")+"/"+$(this).attr("data-id3"));
				})
				str='<div class="left-text none-padding  col-sm-6 col-md-5 col-lg-4">'+
							'<div class="main_active_logo">'+imglogo+'</div>'+hongbao+

							'<div class="main_active_buildings_name">'+sublist[i].buildings_name+'</div>'+
							'<div class="main_active_name"><span>原价</span><span>'+sublist[i].first_price+'</span><span>元</span></div>'+
							'<div class="main_active_price"><div class="ico_active_price">特价</div><span>'+sublist[i].active_price+'</span><span>元</span></div>'+
							'<div class="main_active_count_down" data-time="'+sublist[i].end_date+'">'+
				//				'<div class="ico_active_count_down"></div><span></span>'+
							'</div>'+
						'</div>'+
						'<div class="right-img none-padding col-xs-12 col-sm-6 col-md-7 col-lg-8">'+
							img+
							'<div class="float-detail">'+
					        '<div class="main_active_buildings_name1"><span><strong>'+sublist[i].buildings_name+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></span>'+
							'<span class="main_active_name">均价：</span><span>'+sublist[i].first_price+'</span><span>元&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'+
					        '<span class="main_active_name">佣金：<span>'+sublist[i].commission_out+'</span></div>'+
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
	};

	
	ajaxGet("get",URLMAP.gy_roadlist,params,function(data){

		if(data.statusCode=="0000"){
			var sublist=data.data.list;
			var str="";

			for(var i=0;i<sublist.length;i++){


				str='<li class="feature-box-list" data-fa="msy005" data-ad-position="351" data-ad-title="50万新房">'+
					'<a href="/users/gy_road/'+sublist[i].id +'">'+
				'<figure>'+
				'<p class="img"><img src="../images/'+i+'.png" alt="旅游地产"></p>'+
				'<figcaption>'+
				'<h3>'+sublist[i].travel_name+'</h3>'+
				'<p class="text">'+sublist[i].travel_route+'</p>'+
				'</figcaption>'+
				'</figure>'+
				'</a>'+
				' </li>'


				var oneobj=$("<ul></ul>");

				oneobj.append(str);
				$('.eee').append(oneobj);
			}

		}else{
			$(".bottom-pull-loading").html("网络繁忙，稍后重试");
			setTimeout(function(){
				$(".bottom-pull-loading").hide();
			},3000);
		}
	});


	//获取微信code
//alert (window.location.href);
var code_url =  window.location.href;
	var code = getUrlParam('code');
	alert (code);

	//通过code获取openID

		$.ajax({
			url: 'https://api.weixin.qq.com/sns/oauth2/access_token?appid=wx632df32f90c89d91&secret=579af1f3fe1def341b2951ebf09f59d1&code=' + code + '&grant_type=authorization_code',  //api接口地址
			type: 'post',    //数据传输方式
			dataType: 'jsonp',//数据传输格式
			success: function (data) {
				//执行成功后的回调函数，data为返回的数据
				alert("成功" + JSON.stringify(data.openid));
			},
			error: function (data) {
				alert("失败" + data.status + "uu" + JSON.stringify(data));
				console.log('发生错误:'+JSON.stringify(data));
			}
		});




	function getUrlParam (name) {
			var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
			var r = window.location.search.substr(1).match(reg);
			if (r != null) return unescape(r[2]); return null;
		}

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
		shi: shi
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
					window.open(WEBMAP.gy_buildingsdetail+$(this).attr("data-id")+"/"+proId+"/"+$(this).attr("data-id2")+"/"+$(this).attr("data-id3"));
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
					'<div class="main_active_buildings_name1"><span><strong>'+sublist[i].buildings_name+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></span>'+
					'<span class="main_active_name">均价：</span><span>'+sublist[i].first_price+'</span><span>元&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'+
					'<span class="main_active_name">佣金：<span>'+sublist[i].commission_out+'</span></div>'+
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
		buildings_name:buildings_name

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
					'<div class="main_active_buildings_name1"><span><strong>'+sublist[i].buildings_name+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></span>'+
					'<span class="main_active_name">均价：</span><span>'+sublist[i].first_price+'</span><span>元&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'+
					'<span class="main_active_name">佣金：<span>'+sublist[i].commission_out+'</span></div>'+
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
		shi: shi
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
					'<div class="main_active_buildings_name1"><span><strong>'+sublist[i].buildings_name+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></span>'+
					'<span class="main_active_name">均价：</span><span>'+sublist[i].first_price+'</span><span>元&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'+
					'<span class="main_active_name">佣金：<span>'+sublist[i].commission_out+'</span></div>'+
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
		buildings_name:buildings_name

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
					'<div class="main_active_buildings_name1"><span><strong>'+sublist[i].buildings_name+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></span>'+
					'<span class="main_active_name">均价：</span><span>'+sublist[i].first_price+'</span><span>元&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'+
					'<span class="main_active_name">佣金：<span>'+sublist[i].commission_out+'</span></div>'+
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