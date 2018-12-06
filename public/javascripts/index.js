buildings_name=$("#buildings_name").val();
//city_id=$("#city_id").val();
area_id=$("#area_id").val();
city_id = $(".haveSelM1").val();
active_price = $(".haveSelM2").val();
acreage = $(".haveSelM3").val();
shi = $(".haveSelM4").val();

if(city_id==='111') city_id='';
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
	$("#e1").show();
	$("#e2").hide();
	$("#e3").hide();

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
				var hongbao = '<div class="red_box red_box_top"><p>'+tejia+'元/㎡</p></div>';
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
					'<div class="main_active_name"><span>原价</span><span>'+sublist[i].first_price+'</span><span>元/㎡</span></div>'+
					'<div class="main_active_price"><div class="ico_active_price">特价</div><span>'+sublist[i].active_price+'</span>元/㎡<span></span></div>'+
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
					'<div class="shoujiduan"><span>原价：</span><span>'+sublist[i].first_price+'</span><span>元/㎡</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>特价：</span><span>'+sublist[i].active_price+'</span><span>元/㎡</span>' +
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


//====================最新==最热============================================================
//最新开盘

	ajaxGet("get",URLMAP.buildingslist3,params,function(data3){

		if(data3.statusCode=="0000"){
			totalpage=parseInt((data3.data3.total-1)/pagecount+1);
			var sublist3=data3.data3.list;
			var str3="";
			for(var i=0;i<sublist3.length;i++){
				var ddate = sublist3[i].open_date;
				if(ddate==null||ddate==undefined||ddate=="") ddate='待定';
				var oneobj3=$("<li></li>");
				oneobj3.addClass("notice_link").attr("data-id",sublist3[i].buildings_id).attr("data-id2",sublist3[i].id).attr("data-id3",sublist3[i].buildings_name).on("click",function(){
					window.open(WEBMAP.buildingsdetail+$(this).attr("data-id")+"/"+proId+"/"+$(this).attr("data-id2")+"/"+$(this).attr("data-id3"));
				})
				str3= '<div class="hot"><div class="hotname">'+sublist3[i].buildings_name+'</div><div class="hotprice">'+ddate+'<span></span></div></div>';
				//str3= '<div class="new"><div class="newname">'+sublist3[i].buildings_name+'</div><div class="newdate">'+sublist3[i].open_date+'<span>元/㎡</span></div></div>';
				oneobj3.append(str3);
				$('.tt22').append(oneobj3);
			}

		}else{
		}

	});

// 最热楼盘
	ajaxGet("get",URLMAP.buildingslist2,params,function(data){

		if(data.statusCode=="0000"){
			totalpage=parseInt((data.data.total-1)/pagecount+1);
			var sublist2=data.data.list;
			var str="";
			for(var i=0;i<sublist2.length;i++){
				var oneobj=$("<li></li>");
				oneobj.addClass("notice_link").attr("data-id",sublist2[i].buildings_id).attr("data-id2",sublist2[i].id).attr("data-id3",sublist2[i].buildings_name).on("click",function(){
					window.open(WEBMAP.buildingsdetail+$(this).attr("data-id")+"/"+proId+"/"+$(this).attr("data-id2")+"/"+$(this).attr("data-id3"));
				})
				str= '<div class="hot"><div class="hotname">'+sublist2[i].buildings_name+'</div><div class="hotprice">'+sublist2[i].active_price+'<span>元/㎡</span></div></div>';
				oneobj.append(str);

				$('.tt222').append(oneobj);
			}

		}else{
		}

	});

//============================结束===========================================
	//params={
	//	first:0,
	//	last:5,
	//	mark:1,
	//};
    //
	//ajaxGet("get",URLMAP.notecelist,params,function(data){
    //
	//	if(data.statusCode=="0000"){
	//		var sublist=data.data.list;
	//		var str="";
	//		for(var i=0;i<sublist.length;i++){
	//			var oneobj=$("<li></li>");
	//			oneobj.addClass("notice_link").attr("data-id",sublist[i].Id).attr("data-tit",sublist[i].Title).on("click",function(){
	//				window.open(WEBMAP.noticedetail+$(this).attr("data-id")+'/'+$(this).attr("data-tit"));
	//			})
	//			str= '&nbsp;&nbsp;'+sublist[i].Title ;
	//			oneobj.append(str);
	//			$('.tt22').append(oneobj);
	//		}
    //
	//	}else{
	//	}
	//});

//================================各类资讯=========================================
//房产知识 头条
	params7={
		proId:proId,
		city_id:city_id,
		first:0,
		last:5,
		mark:4,
		is_top:1,
	};

	ajaxGet("get",URLMAP.notecelist,params7,function(data){

		if(data.statusCode=="0000"){
			var sublist=data.data.list;
			var str="";
			for(var i=0;i<1;i++){
				var oneobj=$("<a></a>");
				oneobj.attr("data-id",sublist[i].Id).attr("data-tit",sublist[i].Title).on("click",function(){
					window.open(WEBMAP.noticedetail+$(this).attr("data-id")+'/'+$(this).attr("data-tit"));
				})
				str= '&nbsp;&nbsp;'+sublist[i].Title ;
				oneobj.append(str);
				$('#e1top').append(oneobj);
			}

		}else{
		}
	});

//房产知识 列表
	params6={
		proId:proId,
		city_id:city_id,
		first:0,
		last:10,
		mark:4,
		is_top:0,
	};

	ajaxGet("get",URLMAP.notecelist,params6,function(data){

		if(data.statusCode=="0000"){
			var sublist=data.data.list;
			var str="";
			for(var i=0;i<sublist.length;i++){
				var oneobj=$("<li></li>");
				oneobj.addClass("f14").attr("id","dsy_D04_36").attr("data-id",sublist[i].Id).attr("data-tit",sublist[i].Title).on("click",function(){
					window.open(WEBMAP.noticedetail+$(this).attr("data-id")+'/'+$(this).attr("data-tit"));
				})
				str= ' <a class="cmsA" href="" target="_blank">'+sublist[i].Title+ ' </a>' ;
				oneobj.append(str);
				$('#e1list').append(oneobj);
			}

		}else{
		}
	});

//---------------------------------

//房产快讯 头条
	params77={
		proId:proId,
		city_id:city_id,
		first:0,
		last:5,
		mark:5,
		is_top:1,
	};

	ajaxGet("get",URLMAP.notecelist,params77,function(data){

		if(data.statusCode=="0000"){
			var sublist=data.data.list;
			var str="";
			for(var i=0;i<1;i++){
				var oneobj=$("<a></a>");
				oneobj.attr("style","font-size:18px").attr("data-id",sublist[i].Id).attr("data-tit",sublist[i].Title).on("click",function(){
					window.open(WEBMAP.noticedetail+$(this).attr("data-id")+'/'+$(this).attr("data-tit"));
				})
				str= '&nbsp;&nbsp;'+sublist[i].Title ;
				oneobj.append(str);
				$('#e2top').append(oneobj);
			}

		}else{
		}
	});

//房产快讯 列表
	params66={
		proId:proId,
		city_id:city_id,
		first:0,
		last:10,
		mark:5,
		is_top:0,
	};

	ajaxGet("get",URLMAP.notecelist,params66,function(data){

		if(data.statusCode=="0000"){
			var sublist=data.data.list;
			var str="";
			for(var i=0;i<sublist.length;i++){
				var oneobj=$("<li></li>");
				oneobj.addClass("f14").attr("id","dsy_D04_36").attr("data-id",sublist[i].Id).attr("data-tit",sublist[i].Title).on("click",function(){
					window.open(WEBMAP.noticedetail+$(this).attr("data-id")+'/'+$(this).attr("data-tit"));
				})
				str= ' <a class="cmsA" href="" target="_blank">'+sublist[i].Title+ ' </a>' ;
				oneobj.append(str);
				$('#e2list').append(oneobj);
			}

		}else{
		}
	});

//---------------------------------


//---------------------------------

//楼盘导购 头条
	params777={
		proId:proId,
		city_id:city_id,
		first:0,
		last:5,
		mark:6,
		is_top:1,
	};

	ajaxGet("get",URLMAP.notecelist,params777,function(data){

		if(data.statusCode=="0000"){
			var sublist=data.data.list;
			var str="";
			for(var i=0;i<1;i++){
				var oneobj=$("<a></a>");
				oneobj.attr("style","font-size:18px").attr("data-id",sublist[i].Id).attr("data-tit",sublist[i].Title).on("click",function(){
					window.open(WEBMAP.noticedetail+$(this).attr("data-id")+'/'+$(this).attr("data-tit"));
				})
				str= '&nbsp;&nbsp;'+sublist[i].Title ;
				oneobj.append(str);
				$('#e3top').append(oneobj);
			}

		}else{
		}
	});

//楼盘导购  列表
	params666={
		proId:proId,
		city_id:city_id,
		first:0,
		last:10,
		mark:6,
		is_top:0,
	};

	ajaxGet("get",URLMAP.notecelist,params666,function(data){

		if(data.statusCode=="0000"){
			var sublist=data.data.list;
			var str="";
			for(var i=0;i<sublist.length;i++){
				var oneobj=$("<li></li>");
				oneobj.addClass("f14").attr("id","dsy_D04_36").attr("data-id",sublist[i].Id).attr("data-tit",sublist[i].Title).on("click",function(){
					window.open(WEBMAP.noticedetail+$(this).attr("data-id")+'/'+$(this).attr("data-tit"));
				})
				str= ' <a class="cmsA" href="" target="_blank" >'+sublist[i].Title+ ' </a>' ;
				oneobj.append(str);
				$('#e3list').append(oneobj);
			}

		}else{
		}
	});

//---------------------------------



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
				var hongbao = '<div class="red_box red_box_top"><p>'+tejia+'元/㎡</p></div>';

				var imglogo='<img src="'+HTTPURL+'resource/upload_buildings/'+sublist[i].buildings_id+'/logo/logo.jpg " onerror="/images/logo.png">';
				var img='<img src="'+HTTPURL+'resource/upload_buildings/'+sublist[i].buildings_id+'/xct/xct.jpg" onerror="/images/one5.png">';
				var oneobj=$("<div></div>");
				oneobj.addClass("one-active row").attr("data-id",sublist[i].buildings_id).attr("data-id2",sublist[i].id).attr("data-id3",sublist[i].buildings_name).on("click",function(){
					window.open(WEBMAP.buildingsdetail+$(this).attr("data-id")+"/"+proId+"/"+$(this).attr("data-id2")+"/"+$(this).attr("data-id3"));
				})
				str='<div class="left-text col-xs-12 col-sm-6 col-md-5 col-lg-4">'+
					'<div class="main_active_logo">'+imglogo+'</div>'+hongbao+

					'<div class="main_active_buildings_name">'+sublist[i].buildings_name+'</div>'+
					'<div class="main_active_name"><span>原价</span><span>'+sublist[i].first_price+'</span><span>元/㎡</span></div>'+
					'<div class="main_active_price"><div class="ico_active_price">特价</div><span>'+sublist[i].active_price+'</span><span>元/㎡</span></div>'+
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
					'<div class="shoujiduan"><span>原价：</span><span>'+sublist[i].first_price+'</span><span>元/㎡</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>特价：</span><span>'+sublist[i].active_price+'</span><span>元/㎡</span>' +
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
				var hongbao = '<div class="red_box red_box_top"><p>'+tejia+'元/㎡</p></div>';

				var imglogo='<img src="'+HTTPURL+'resource/upload_buildings/'+sublist[i].buildings_id+'/logo/logo.jpg " onerror="/images/logo.png">';
				var img='<img src="'+HTTPURL+'resource/upload_buildings/'+sublist[i].buildings_id+'/xct/xct.jpg" onerror="/images/one5.png">';
				var oneobj=$("<div></div>");
				oneobj.addClass("one-active row").attr("data-id",sublist[i].buildings_id).attr("data-id2",sublist[i].id).attr("data-id3",sublist[i].buildings_name).on("click",function(){
					window.open(WEBMAP.buildingsdetail+$(this).attr("data-id")+"/"+proId+"/"+$(this).attr("data-id2")+"/"+$(this).attr("data-id3"));
				})
				str='<div class="left-text col-xs-12 col-sm-6 col-md-5 col-lg-4">'+
					'<div class="main_active_logo">'+imglogo+'</div>'+hongbao+
					'<div class="main_active_buildings_name">'+sublist[i].buildings_name+'</div>'+
					'<div class="main_active_name"><span>原价</span><span>'+sublist[i].first_price+'</span><span>元/㎡</span></div>'+
					'<div class="main_active_price"><div class="ico_active_price">特价</div><span>'+sublist[i].active_price+'</span><span>元/㎡</span></div>'+
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
					'<div class="shoujiduan"><span>原价：</span><span>'+sublist[i].first_price+'</span><span>元/㎡</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>特价：</span><span>'+sublist[i].active_price+'</span><span>元/㎡</span>' +
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
				var hongbao = '<div class="red_box red_box_top"><p>'+tejia+'元/㎡</p></div>';
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
					'<div class="main_active_name"><span>原价</span><span>'+sublist[i].first_price+'</span><span>元/㎡</span></div>'+
					'<div class="main_active_price"><div class="ico_active_price">特价</div><span>'+sublist[i].active_price+'</span><span>元/㎡</span></div>'+
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
					'<div class="shoujiduan"><span>原价：</span><span>'+sublist[i].first_price+'</span><span>元/㎡</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>特价：</span><span>'+sublist[i].active_price+'</span><span>元/㎡</span>' +
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



function submiBtn_m(ct) {
	$('.keyword_p').val("请输入楼盘名称");
	buildings_name="";
	//alert(buildings_name);
//city_id=$("#city_id").val();
	area_id=$("#area_id").val();
	city_id = ct;
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
				var hongbao = '<div class="red_box red_box_top"><p>'+tejia+'元/㎡</p></div>';
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
					'<div class="main_active_name"><span>原价</span><span>'+sublist[i].first_price+'</span><span>元/㎡</span></div>'+
					'<div class="main_active_price"><div class="ico_active_price">特价</div><span>'+sublist[i].active_price+'</span><span>元/㎡</span></div>'+
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
					'<div class="shoujiduan"><span>原价：</span><span>'+sublist[i].first_price+'</span><span>元/㎡</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>特价：</span><span>'+sublist[i].active_price+'</span><span>元/㎡</span>' +
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
				var hongbao = '<div class="red_box red_box_top"><p>'+tejia+'元/㎡</p></div>';
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
					'<div class="main_active_name"><span>原价</span><span>'+sublist[i].first_price+'</span><span>元/㎡</span></div>'+
					'<div class="main_active_price"><div class="ico_active_price">特价</div><span>'+sublist[i].active_price+'</span><span>元/㎡</span></div>'+
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
					'<div class="shoujiduan"><span>原价：</span><span>'+sublist[i].first_price+'</span><span>元/㎡</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>特价：</span><span>'+sublist[i].active_price+'</span><span>元/㎡</span>' +
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

$('#search_submit').on('submit', function(e){ submitFourm_p();}	);
