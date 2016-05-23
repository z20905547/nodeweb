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

			//楼盘动态
			var adcontent1= '	<div class="main_active_logo"><img src="'+HTTPURL+data.data.logo_path+data.data.logo_name+'"></div>'+
				'			<div class="main_active_buildings_name">'+data.data.buildings_name+'</div>'+
				'			<div class="main_active_name"><span>原价</span><span>'+data.data.first_price+'</span><span>元</span></div>'+
				'			<div class="main_active_price">'+
				'				<div class="ico_active_price">限时特价</div>'+
				'				<span>'+data.data.active_price+'</span>'+
				'			</div>'+
				'			<div class="main_active_count_down" data-time="'+data.data.end_date+'">'+
				'				<div class="ico_active_count_down"></div>'+
				'				<span></span>'+
				'			</div>'
			$(".small_content").html(adcontent1);
			var adcontent2='<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
				'<div class="base_content_line"><span>楼盘地址：&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.address+'</div>'+
				'<div class="base_content_line"><span>开盘时间：&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.open_date+'</div>'+
				'<div class="base_content_line"><span>交房时间：&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.deliver_date+'</div>'+
				'<div class="base_content_line"><span>主力户型：&nbsp;&nbsp;&nbsp;&nbsp;</span>'+data.data.main_door+'</div>'+
				'<div class="detail_phone "><span class="col-sm-4 col-md-4 col-lg-4">售楼处电话</span><span class="col-sm-1 col-md-1 col-lg-1">|</span><span class="col-sm-7 col-md-7 col-lg-7">'+data.data.server_phone_num+'</span></div>'+
				'</div>'

			$(".buildings_detail_text").html(adcontent2);

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



