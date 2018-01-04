/**
 * 
 */




$(document).ready(function(){


	var params={
			buildingsId:$("#buildingsId").val(),
	        pid:$("#pid").val()
	}
	ajaxGet("get",URLMAP.buildingsDetail,params,function(data){

		if(data.statusCode=="0000"){
			map_x=data.data.map_x;
			map_y=data.data.map_y;
			xy(data.data.map_x,data.data.map_y);
			var tejia = data.data.discount_price;
			var hongbao = '<div class="hongbao"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;唯房会红包'+tejia+'元</p></div>';
			if (typeof(tejia) == "undefined")
			{
				var hongbao = '';
			}

			var buildname='<input type="hidden" name="from_tag" id="from_tag"  value="3">'+
					        '<input type="hidden" name="buildings_name" id="buildings_name"  value="'+data.data.buildings_name+'">'+
				          '<input type="hidden" name="buildings_id" id="buildings_id"  value="'+data.data.id+'">'


			$(".forbset").html(buildname);


//周边顾问
			var guwen =' <div class="consultant_nearby c_n_2">  '+
			' <dl class="clearfix">'+
			'  <dt>周边顾问：<a style="cursor:pointer" class="seek_more_" onclick="">更多顾问</a></dt>'+
			'			<dd>'+
			'                   <div class="consultant_nearby_unit" id="xfdsxq_B04_20" 	onmouseout="" onmouseover="">'+
			'                        <a 	class="cnu_head"  href="">'+
			'                             <img src="'+HTTPURL+'/resource/upload_buildings/user/'+data.data.user_id+'/tx.jpg"'+'></a><img class="cnu_head_asied" alt="">'+

			'                      <div class="cnu_info">'+
			'                   <div class="cnu_name" ><a href="" 	target="_blank"><span id="AgentRealname_164001707"> '+data.data.nickname+'</span></a>  </div> '+

			'                   <p class="cnu_tel">'+data.data.user_phone+'</p></div></div></dd>' +
				'	<div class="fr1">'+
				'	<a href="javascript:void(0)" class="fr" id="baomingBtn"  onclick="yuyuekanfangche();">预约免费看房专车</a>'+
				'	</div>'
			'</dl> '






			$(".buildings_detail_price").html(guwen);


			//楼盘动态
			var adcontent1=hongbao+ '<div class="main_active_logo"><img src="'+HTTPURL+data.data.logo_path+data.data.logo_name+'"></div>'+
				'			<div class="main_active_buildings_name">'+data.data.buildings_name+'</div>'+
				'			<div class="main_active_name"><span>原价</span><span>'+data.data.first_price+'</span><span>元</span></div>'+
				'			<div class="main_active_price">'+
				'				<div class="ico_active_price">限时特价</div>'+
				'				<span>'+data.data.active_price+'</span>'+
				'			</div>'+
				'			<div class="main_active_count_down" data-time="'+data.data.end_date+'">'+
				'<a class="u-push alert-box-btn1" onclick="jiangjiatongzhi();" id="86biguiyuanjinshatanjj"><i class="tb-icon" ></i>降价通知我</a>'+
		//		'				<div class="ico_active_count_down"></div>'+
				'				<span></span>'+
				'			</div>'
			$(".small_content").html(adcontent1);

			var df = data.data.server_phone_num;
			var df3 = df.substring(df.length-3,df.length) ;//截取电话后三位
			var adcontent2='<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+

				'<div class="base_content_line"><span>楼盘地址：&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.address+'<span class="lp_dt"><span class="dz_icon "></span></span></div>'+
				'<div class="base_content_line"><span>开  发  商：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.developer_company+'</div>'+
				'<div class="base_content_line"><span>近期开盘：&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.open_date+'<a href="javascript:void(0)"  onclick="jiangjiatongzhi();" id="informBtn">开盘通知我</a></div>'+
				'<div class="base_content_line"><span>主力户型：&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.main_door+'</div>'+
				'<div class="detail_phone "><a href="tel:4008520213,'+df3+'"><span class="col-sm-12 col-md-12 col-lg-12">售楼处电话&nbsp;&nbsp;|&nbsp;&nbsp;'+data.data.server_phone_num+'</span></a></div>'+
				'<div class="detail_phone1 "><span class="col-sm-4 col-md-4 col-lg-4">售楼处电话</span><span class="col-sm-1 col-md-1 col-lg-1">|</span><span class="col-sm-7 col-md-7 col-lg-7">'+data.data.server_phone_num+'</span></div>'+
				'</div>'
			$(".buildings_detail_text").html(adcontent2);

			if(data.data.latestnews != "wu"){
			    var adcontent3='<div class="banner_index4 row">'+

				'<div class="touxiang2  col-sm-4 col-md-4 col-lg-4"> <img src="'+HTTPURL+'/resource/upload_buildings/user/'+data.data.user_id+'/tx.jpg"  onerror="javascript:this.src=\'/images/tx.jpg\'" '+'></div>'+
				'<div class="jieshao2 col-sm-8 col-md-8 col-lg-8"><dl><dd><strong>楼盘最新情况：</strong>'+data.data.latestnews+'</dd>'+
				'<dd  class="ddxx">此消息由 <strong> '+data.data.nickname+' </strong>   最新发布！  想了解更多信息，请联系手机：<strong>'+data.data.user_phone+'</strong>（同微信） <p>'+data.data.recodetime+'</p> </dd></dl></div>'+
				'<div class="banner_index5 ">'+
				'<div class="sm_tx"> <img src="'+HTTPURL+'/resource/upload_buildings/user/'+data.data.user_id+'/tx.jpg" onerror="javascript:this.src=\'/images/tx.jpg\'"'+'></div>'+

				'<div class="sm_nr "><dl><dd><strong>最新发布：</strong>'+data.data.nickname+'</dd><dd><strong>咨询电话：</strong>'+data.data.user_phone+'</dd><dd><strong>发布时间：</strong>'+data.data.recodetime+'</dd></dd></div>'
				'</div>'+
				'</div>'

			}
			$(".module_detail_zuixinzhuangtai").html(adcontent3);
			$(".module_detail_zuixinzhuangtai2").html(adcontent3);
			//$(".buildings_active_loading").html(adcontent);
			//特价图片加载
			var avtivepic=
				'	<div class="main_active_pic col-xs-12 col-sm-12 col-md-12 col-lg-12" id="main_active_pic" onclick="bigPic()"><img class="dde" src="'+HTTPURL+data.data.tj_path+data.data.tj_name+'" onerror='+'javascript:this.style.display="none"'+' alt1="'+HTTPURL+data.data.tj_path+data.data.tj_name+'"></div>'				;
			$(".active_pic").html(avtivepic);

			//基本信息
			var basetextcontent='<div class="base_message_img col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
			'	<img src="'+HTTPURL+'/resource/upload_buildings/'+ data.data.buildings_id +'/ldt/ldt.jpg'+'">'+
			'</div>'+
			'<div class="base_message_text col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
			'	<div class="row">'+
			'	<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
			'		<div class="base_content_line"><span>占地面积：&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.floor_space+'平方米</div>'+
			'		<div class="base_content_line"><span>总栋数：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.building_count+'栋</div>'+
			'		<div class="base_content_line"><span>容积率：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.ratio+'</div>'+
			'		<div class="base_content_line"><span>装修状况：&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.decoration_condition+'</div>'+
			'		<div class="base_content_line"><span>停车位：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.parking_count+'个</div>'+


			'	</div>'+
			'	<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
			'		<div class="base_content_line"><span>建筑面积：&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.building_space+'㎡</div>'+
			'		<div class="base_content_line"><span>总套数：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.house_count+'户</div>'+
			'		<div class="base_content_line"><span>绿化率：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.green_rate+'%</div>'+
			'		<div class="base_content_line"><span>现房期房：&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.util_type+'</div>'+
			'		<div class="base_content_line"><span>产权年限：&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.right_years+'年</div>'+
			'	</div>'+
			'	</div>'+
			'		<div class="base_content_line"><span>主力户型：&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.main_door+'</div>'+
			'	    <div class="base_content_line"><span>楼层状况：&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.floor_detail+'</div>'+
			'</div>'+

			'<div class="base_message_text col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
			'	<div class="row">'+

			'	</div>'+
			'</div>'+

				'<div class="base_message_detail col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
			'	<div class="row">'+
			'	<div class="message_box  col-xs-12 col-sm-12 col-md-12 col-lg-12" id="box" name="box">'+data.data.buildings_detail+data.data.around_peitao+data.data.traffic+
			'	</div>'+
			'	</div>'+
			'</div>';

			$(".buildings_base_loading").html(basetextcontent);


		}
	});

	//加载楼盘对应展示图
	ajaxGet("get",URLMAP.resourceList,params,function(data){
		if(data.statusCode=="0000"){
			//将对返回对象分类，没有就把对应的设为无数据
			//图片大类：1：户型图；2：楼盘相册;3：地产logo，4：地产广告，5：banner，6：活动宣传图
			//图片小类：1：一房；2：两房；3：三房；4：四房；5：五房；6：六房；21效果图；22交通图；23实景图；24样板间；30：地产logo  ， 31，地产宣传图，32 banner ,33 ，活动图
			var firstcount=0;
			var secendcount=0;
			//移除加载框
			$(".house_pic_door").empty();
			$(".effect_pic_door").empty();
			for(var i=0;i<data.data.total;i++){
				if(data.data.list[i].big_type==1){
					firstcount++;
					var str='<li onclick="highLevel(1,'+firstcount+')" class="picli1 lipic'+firstcount+' col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="hx-p-img"><img class="imgtype1" data-num="'+firstcount+'" src="'+HTTPURL+data.data.list[i].resource_path+"sm_"+data.data.list[i].resource_name+'"  alt1="'+HTTPURL+data.data.list[i].resource_path+data.data.list[i].resource_name+'"></div><div class="hx-p-txt"> <p>"'+data.data.list[i].house_type_name+'"</p> <p class="p-last">"'+data.data.list[i].tingshi+'"</p></div></li>';
					//拼接所有图片选项卡和图片列表区，默认选中，没有就先创建
					if($(".hptag10").length==0){
						var tagobj=$('<span class="pic-tag hptag10 active" data-type="10" data-space="house_pic_door">全部</span>');
						tagobj.on("click",tagchange);
						$(".house_pic_tag").append(tagobj);
						$(".house_pic_door").append('<div class="pic-div picdiv10 active"><ul class="ul10"></ul></div>');
					}
					$(".ul10").append(str);
					//拼接到对应子户型列表中，没有就创建默认隐藏
					if(($(".hptag"+data.data.list[i].sm_type).length==0)){
						var tt="";
						switch(data.data.list[i].sm_type){
							case 1:
								tt="一房";
								break;
							case 2:
								tt="二房";
								break;
							case 3:
								tt="三房";
								break;
							case 4:
								tt="四房";
								break;
							case 5:
								tt="五房";
								break;
							case 6:
								tt="六房";
								break;
							
						};
						var tagobj=$('<span class="pic-tag hptag'+data.data.list[i].sm_type+'" data-type="'+data.data.list[i].sm_type+'" data-space="house_pic_door">'+tt+'</span>');
						tagobj.on("click",tagchange);
						$(".house_pic_tag").append(tagobj);
						$(".house_pic_door").append('<div class="pic-div picdiv'+data.data.list[i].sm_type+'" style="display:none;"><ul class="ul'+data.data.list[i].sm_type+'"></ul></div>');
					}
					$(".ul"+data.data.list[i].sm_type).append(str);
				}else if(data.data.list[i].big_type==2){
					secendcount++;
					var str='<li onclick="highLevel(2,'+secendcount+')" class="picli2 lipic'+secendcount+' col-xs-6 col-sm-6 col-md-4 col-lg-3"><img class="imgtype2" data-num="'+secendcount+'" src="'+HTTPURL+data.data.list[i].resource_path+"sm_"+data.data.list[i].resource_name+'" alt1="'+HTTPURL+data.data.list[i].resource_path+data.data.list[i].resource_name+'"></li>';
					//拼接所有图片选项卡和图片列表区，默认选中，没有就先创建
					if($(".hptag20").length==0){
						var tagobj=$('<span class="pic-tag hptag20 active" data-type="20" data-space="effect_pic_door">全部</span>');
						tagobj.on("click",tagchange);
						$(".effect_pic_tag").append(tagobj);
						$(".effect_pic_door").append('<div class="pic-div picdiv20 active"><ul class="ul20"></ul></div>');
					}
					$(".ul20").append(str);
					//拼接到对应子户型列表中，没有就创建默认隐藏
					if(($(".hptag"+data.data.list[i].sm_type).length==0)){
						switch(data.data.list[i].sm_type){
							case 21:
								tt="效果图";
								break;
							case 22:
								tt="交通图";
								break;
							case 23:
								tt="实景图";
								break;
							case 24:
								tt="样板间";
								break;
						
						}
						var tagobj=$('<span class="pic-tag hptag'+data.data.list[i].sm_type+'" data-type="'+data.data.list[i].sm_type+'" data-space="effect_pic_door">'+tt+'</span>');
						tagobj.on("click",tagchange);
						$(".effect_pic_tag").append(tagobj);
						$(".effect_pic_door").append('<div class="pic-div picdiv'+data.data.list[i].sm_type+'" style="display:none;"><ul class="ul'+data.data.list[i].sm_type+'"></ul></div>');
					}
					$(".ul"+data.data.list[i].sm_type).append(str);
				}
			}
			//没有户型图，拼接无数据提示
			if(!firstcount){
				$(".house_pic_door").append(nodata);
			}
			//没有效果图，拼接无数据提示
			if(!secendcount){
				$(".effect_pic_door").append(nodata);
				
			}
		}else{
			$(".house_pic_door").append(netbusy);
			$(".effect_pic_door").append(netbusy);
		}
	});
	
	//关闭遮罩层
	$(".close_ico").bind("click",function(){
		$(".high_level").hide();
		$(".maincontent").removeClass("gaublue");
		$("body").attr("style","overflow-y:none;");//关闭时恢复页面的纵向滚动条
		$("body").unbind("touchmove");//解除对默认行为的阻止
		
	});
	
	//手机滑动
	$(".big-content").bind("touchstart",function(e){
		 e.preventDefault();
		 startX = e.originalEvent.changedTouches[0].pageX,
		 startY = e.originalEvent.changedTouches[0].pageY;
		
	});
	$(".big-content").bind("touchmove",function(e){
		
		
	});
	$(".big-content").bind("touchend",function(e){

		e.preventDefault();
		    moveEndX = e.originalEvent.changedTouches[0].pageX,
			moveEndY = e.originalEvent.changedTouches[0].pageY,
			X = moveEndX - startX,
			Y = moveEndY - startY;

		if ( Math.abs(X) > Math.abs(Y) && X > 0 ) {
			changeBigPic(-1);
		}
		else if ( Math.abs(X) > Math.abs(Y) && X < 0 ) {
			changeBigPic(1);
		}else if ( Math.abs(X)== Math.abs(Y) && X == 0 ) {

				$(".high_level").hide();
				$(".maincontent").removeClass("gaublue");
				$("body").attr("style","overflow-y:none;");//关闭时恢复页面的纵向滚动条
				$("body").unbind("touchmove");//解除对默认行为的阻止
		}



	});
	//获取浏览器高度 设置图片显示高度
	var winhetght = $(window).height();
	var winwidth = $(window).width();

    if(winwidth>768) {
	  $(".cur_big_pic").css("height", winhetght);
    }

	//获取图片宽度
	//var imgWidth = $(".cur_big_pic").attr("width");
	//alert(imgWidth);


	//拖动大图
	$(".cur_big_pic").bind("mousedown",function(e){
		e.preventDefault();
        e.stopPropagation();
		//记录坐标，改变鼠标
		$(this).css("cursor","-webkit-grabbing");
		parentX=parseInt($(this).css("margin-left"));
		parentY=parseInt($(this).css("margin-top"));
		pagex=e.pageX;
		pagey=e.pageY;
		begin=true;
	}).bind("mousemove",function(e){
		//变更位置
		if(begin){
			$(this).css("margin-left",parentX+e.pageX-pagex+"px");
			$(this).css("margin-top",parentY+e.pageY-pagey+"px");
		}

	}).bind("mouseup",function(e){
		//决定最终位置
		if(begin){
			$(this).css("cursor","-webkit-grab");
			$(this).css("margin-left",parentX+e.pageX-pagex+"px");
			$(this).css("margin-top",parentY+e.pageY-pagey+"px");
			begin=false;
		}
	}).bind("mouseout",function(e){
		//决定最终位置
		if(begin){
			$(this).css("cursor","-webkit-grab");
			$(this).css("margin-left",parentX+e.pageX-pagex+"px");
			$(this).css("margin-top",parentY+e.pageY-pagey+"px");
			begin=false;
		}

	});
});
//切换图片选项卡
function tagchange(){
	if($(this).hasClass("active"))return;
	$(this).siblings(".pic-tag.active").removeClass("active");
	$(this).addClass("active");
	//内容切换
	$("."+$(this).attr("data-space")).find(".pic-div.active").removeClass("active").hide();
	var contentClass=$(this).attr("data-type");
	$(".picdiv"+contentClass).addClass("active").show();
}
//------------------特价图片处理
//活动图点击后放大
function bigPic() {
	$(".cur_big_pic2").attr("src",$(".dde").attr("alt1"));
	$(".high_level2").attr("style","top:"+getScrollTop()+"px");//触发遮罩层显示时，获取当前的高度
	//显示大图
	$(".high_level2").show();
	$("body").attr("style","overflow-y:hidden;");//加这个是去掉最外层的滚动条，防止滚到遮罩层挡不住的部分
	$("body").bind("touchmove",function(event){event.preventDefault();});//手机端，出遮罩层就禁止滚动内容
}
//关闭遮罩层
$(".close_ico2").bind("click",function(){
	$(".high_level2").hide();
	$(".maincontent2").removeClass("gaublue");
	$("body").attr("style","overflow-y:none;");//关闭时恢复页面的纵向滚动条
	$("body").unbind("touchmove");//解除对默认行为的阻止

});

$(".big-content2").bind("touchstart",function(e){
	e.preventDefault();
	startX = e.originalEvent.changedTouches[0].pageX,
	startY = e.originalEvent.changedTouches[0].pageY;

});
$(".big-content2").bind("touchmove",function(e){

});

$(".big-content2").bind("touchend",function(e){

	e.preventDefault();
	moveEndX = e.originalEvent.changedTouches[0].pageX,
	moveEndY = e.originalEvent.changedTouches[0].pageY,
	X = moveEndX - startX,
	Y = moveEndY - startY;

	if  ( Math.abs(X)== Math.abs(Y) && X == 0 ) {

		$(".high_level2").hide();
		$(".maincontent2").removeClass("gaublue");
		$("body").attr("style","overflow-y:none;");//关闭时恢复页面的纵向滚动条
		$("body").unbind("touchmove");//解除对默认行为的阻止
	}



});
//拖动大图
$(".cur_big_pic2").bind("mousedown",function(e){
	e.preventDefault();
	e.stopPropagation();
	//记录坐标，改变鼠标
	$(this).css("cursor","-webkit-grabbing");
	parentX=parseInt($(this).css("margin-left"));
	parentY=parseInt($(this).css("margin-top"));
	pagex=e.pageX;
	pagey=e.pageY;
	begin=true;
}).bind("mousemove",function(e){
	//变更位置
	if(begin){
		$(this).css("margin-left",parentX+e.pageX-pagex+"px");
		$(this).css("margin-top",parentY+e.pageY-pagey+"px");
	}

}).bind("mouseup",function(e){
	//决定最终位置
	if(begin){
		$(this).css("cursor","-webkit-grab");
		$(this).css("margin-left",parentX+e.pageX-pagex+"px");
		$(this).css("margin-top",parentY+e.pageY-pagey+"px");
		begin=false;
	}
}).bind("mouseout",function(e){
	//决定最终位置
	if(begin){
		$(this).css("cursor","-webkit-grab");
		$(this).css("margin-left",parentX+e.pageX-pagex+"px");
		$(this).css("margin-top",parentY+e.pageY-pagey+"px");
		begin=false;
	}

});
// ---------------特价图片处理结束
//-------户型图等开始
var picsrclist;
var bigpictotal;
var curbignum;
//初始化显示大图
function highLevel(type,num){
	picsrclist=[];
	bigpictotal=0;
	curbignum=num;
	//拼接对应类别所有图片
	//显示入口图片
	//设置当前张数与总张数
	var i=0;
	$(".ul"+type+"0 .imgtype"+type).each(function(){
		if($(this).attr("data-num")==num){
			//换大图
			$(".cur_big_pic").attr("src",$(this).attr("alt1"));
			
		}
		picsrclist[i]=$(this).attr("alt1");
		i++;
	});
	//设置当前张数与总张数
	bigpictotal=i;
	$(".cur_big_pic_num").html(num);
	$(".total_big_pic_num").html(bigpictotal);
	//设置左右控制按钮的可点击状态
	showControl(num-1);
	$(".high_level").attr("style","top:"+getScrollTop()+"px");//触发遮罩层显示时，获取当前的高度
	//显示大图
	$(".high_level").show();
	//添加高斯模糊
    //$(".maincontent").addClass("gaublue");
	//$(".high_level").animate({top:$(document).scrollTop()+"px"},500);
	//图片高度不够时设置上边距
	
	$("body").attr("style","overflow-y:hidden;");//加这个是去掉最外层的滚动条，防止滚到遮罩层挡不住的部分
	$("body").bind("touchmove",function(event){event.preventDefault();});//手机端，出遮罩层就禁止滚动内容
}

//大图左右切换
function changeBigPic(index){
	var nowindex=curbignum-1;
	var newnum=nowindex+index;
	if(newnum<0||newnum>=bigpictotal)return;
	$(".cur_big_pic").attr("src",picsrclist[newnum]);
	//图片高度不够时设置上边距
	//var moreHeight=$(".cur_pic").height()-$(".cur_big_pic").height();
	//if(moreHeight>0){
	//	$(".cur_big_pic").css("margin-top",moreHeight/2+"px");
	//}else{
	//	$(".cur_big_pic").css("margin-top","0px");
	//}
	//var moreWidth=$(".cur_pic").width()-$(".cur_big_pic").width();
	//if(moreWidth>0){
	//	$(".cur_big_pic").css("margin-left",moreWidth/2+"px");
	//}else{
	//	$(".cur_big_pic").css("margin-left","0px");
	//}
	showControl(newnum);
	curbignum=newnum+1;
	$(".cur_big_pic_num").html(curbignum);
}
//左右按钮的显示
function showControl(index){
	if(index==0){
		$(".left_control").addClass("disabled");
	}else{
		$(".left_control").removeClass("disabled");
	}
	if(index==bigpictotal-1){
		$(".right_control").addClass("disabled");
	}else{
		$(".right_control").removeClass("disabled");
	}
}
//获取滚动条距离顶部位置
function getScrollTop() {  
        var scrollPos;  
        if (window.pageYOffset) {  
        scrollPos = window.pageYOffset; }  
        else if (document.compatMode && document.compatMode != 'BackCompat')  
        { scrollPos = document.documentElement.scrollTop; }  
        else if (document.body) { scrollPos = document.body.scrollTop; }   
        return scrollPos;   
} 
//活动图动态加载
$(function(){
	//过两秒显示 showImage(); 内容
	setTimeout("showImage();",1000);
	//alert(location);
});
function showImage()
{
	$("#main_active_pic").slideUp(1000,function(){$("#main_active_pic").slideDown(1000);});
}




$.fn.serializeObject = function()
{
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};
function tuangouSJ(){
	//var data = $("#form1").serializeArray(); //自动将form表单封装成json
	//alert(JSON.stringify(data));
	var jsonuserinfo = $('#tuangouSJ').serializeObject();
	//alert(JSON.stringify(jsonuserinfo));

	var options = {
		url:URLMAP.demandorder,
		dataType: "json",
		data:JSON.stringify(jsonuserinfo),
		type:"post",
		beforeSubmit: showRequest,

	};

	$('#tuangouSJ').ajaxSubmit(options);

	$('#tuangouSJ').clearForm();

	function showRequest() {
		var name = $("#Name").val();
		var phone = $("#Phone").val();
		if (name == '') {
			alert('请输入您的称呼哦!');
			return false;
		}
		if ( phone == '') {
			alert('请输入您的联系方式哦!');
			return false;
		}
		alert("提交成功！团购客服将尽快与您联系，请保持手机畅通！");
		$("#rePriceOpen").css('display','none');
		return true;
		// 发送短信通知
		var buildings_name = $("#buildings_name").val(); //1 团购客户 2 其他预约 3降价通知 4预约看房
		var content = '团购用户：'+name+'电话：'+phone+'已经注册，请尽快处理！团购楼盘：'+buildings_name;
		duanxin(content);
	}
}


function tuangouPC(){
	//var data = $("#form1").serializeArray(); //自动将form表单封装成json
	//alert(JSON.stringify(data));
	var jsonuserinfo = $('#tuangouPC').serializeObject();
	//alert(JSON.stringify(jsonuserinfo));

	var options = {
		url:URLMAP.demandorder,
		dataType: "json",
		data:JSON.stringify(jsonuserinfo),
		type:"post",
		beforeSubmit: showRequest,

	};

	$('#tuangouPC').ajaxSubmit(options);

	$('#tuangouPC').clearForm();
	duanxin();
	function showRequest() {
		var name = $("#NamePC").val();
		var phone = $("#PhonePC").val();
		if (name == '') {
			alert('请输入您的称呼哦!');
			return false;
		}
		if ( phone == '') {
			alert('请输入您的联系方式哦!');
			return false;
		}
		alert("提交成功！团购客服将尽快与您联系，请保持手机畅通！");
		$("#rePriceOpen").css('display','none');
		return true;
		// 发送短信通知
		//var buildings_name = $("#buildings_name").val(); //1 团购客户 2 其他预约 3降价通知 4预约看房
		//var content = '团购用户：'+name+'电话：'+phone+'已经注册，请尽快处理！团购楼盘：'+buildings_name;

	}
}


function yuyuePC(){
	//var data = $("#form1").serializeArray(); //自动将form表单封装成json
	//alert(JSON.stringify(data));
	var jsonuserinfo = $('#yuyuePC').serializeObject();
	//alert(JSON.stringify(jsonuserinfo));

	var options = {
		url:URLMAP.demandorder,
		dataType: "json",
		data:JSON.stringify(jsonuserinfo),
		type:"post",
		beforeSubmit: showRequest,

	};

	$('#yuyuePC').ajaxSubmit(options);

	$('#yuyuePC').clearForm();

	function showRequest() {
		var name = $("#yyNamePC").val();
		var phone = $("#yyPhonePC").val();

		if ( phone == '') {
			alert('请输入您的联系方式哦!');
			return false;
		}
		alert("预约成功！客服将尽快与您联系，请保持手机畅通！");
		$("#rePriceOpen2").css('display','none');
		// 发送短信通知
		var buildings_name = $("#buildings_name").val(); //1 团购客户 2 其他预约 3降价通知 4预约看房

		var content = '预约看房用户：'+name+'电话：'+phone+'已经注册，请尽快处理！预约楼盘：'+buildings_name;
	//	alert(content);
		duanxin(content);
		return true;

	}
}

function yuyueSJ(){
	//var data = $("#form1").serializeArray(); //自动将form表单封装成json
	//alert(JSON.stringify(data));
	var jsonuserinfo = $('#yuyueSJ').serializeObject();
	//alert(JSON.stringify(jsonuserinfo));

	var options = {
		url:URLMAP.demandorder,
		dataType: "json",
		data:JSON.stringify(jsonuserinfo),
		type:"post",
		beforeSubmit: showRequest,

	};

	$('#yuyueSJ').ajaxSubmit(options);

	$('#yuyueSJ').clearForm();


	function showRequest() {
		var name = $("#yysjName").val();
		var phone = $("#yysjPhone").val();

		if ( phone == '') {
			alert('请输入您的联系方式哦!');
			return false;
		}
		alert("预约成功！客服将尽快与您联系，请保持手机畅通！");
		$("#rePriceOpen2").css('display','none');
		return true;
		// 发送短信通知
		var from_tag = $("#from_tag").val();
		var buildings_name = $("#buildings_name").val(); //1 团购客户 2 其他预约 3降价通知 4预约看房
		var content = '预约看房用户：'+name+'电话：'+phone+'已经注册，请尽快处理！预约楼盘：'+buildings_name;
		//alert(content);
		duanxin(content);
	}
}


function jiangjiatongzhi() {
	$("#rePriceOpen").css('display','block');
}

function shut() {
	$("#rePriceOpen").css('display','none');
	$("#rePriceOpen2").css('display','none');
}

// 首页团购对话框退出 弹出是在点击首页大banner时 在head.js 里面
$("#hideNotice").click(function(){
	$("#rePriceOpen").css('display','none');
});

function yuyuekanfangche() {
	$("#rePriceOpen2").css('display','block');
}

function duanxin(content){
	var str = '{ "uid": "14", "pwd": "123456", "mobile": "13876002062", "content":"有唯房会客户预约了，请立即处理！" }';
	//var obj = jQuery.parseJSON(str);
	//alert(obj.toString);

	$.ajax({
		url:'http://www.467890.com/Admin/index.php/Message/send',  //api接口地址
		data:str,
		type:'post',    //数据传输方式
		dataType:'json',//数据传输格式
		success:function(data) {
			//执行成功后的回调函数，data为返回的数据
			//alert("成功"+data);
		},
		error : function(data22) {
			//alert("失败"+data22.status+"uu"+JSON.stringify(data22));
		}
	});
}