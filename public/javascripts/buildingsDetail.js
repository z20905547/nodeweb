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
				'			<div class="main_active_name"><span>原价</span><span>'+data.data.nomal_price+'</span><span>元</span></div>'+
				'			<div class="main_active_price">'+
				'				<div class="ico_active_price">限时特价</div>'+
				'				<span>'+data.data.active_price+'</span>'+
				'			</div>'+
				'			<div class="main_active_count_down" data-time="'+data.data.end_date+'">'+
				'				<div class="ico_active_count_down"></div>'+
				'				<span></span>'+
				'			</div>'
			$(".small_content").html(adcontent1);
			var adcontent2='<div class="text_label">楼盘地址:</div><div class="text_content">'+data.data.address+'</div>'+
				'	<div class="text_label">主力户型:</div><div class="text_content">'+data.data.main_door+'</div>'+
				'	<div class="text_label">开盘时间:</div><div class="text_content">'+data.data.open_date+'</div>'+
				'	<div class="text_label">交房时间:</div><div class="text_content">'+data.data.deliver_date+'</div>'+
				'	<div class="detail_phone"><span class="glyphicon glyphicon-phone-alt"></span>&nbsp;&nbsp;'+data.data.server_phone_num+'</div>'

			$(".buildings_detail_text").html(adcontent2);

			//$(".buildings_active_loading").html(adcontent);
			//特价图片加载
			var avtivepic=
				'	<div class="main_active_pic" id="main_active_pic"><img src="'+HTTPURL+data.data.tj_path+data.data.tj_name+'" onerror='+'javascript:this.style.display="none"'+'></div>'

				;
			$(".active_pic").html(avtivepic);
			//基本信息
			var basetextcontent='<div class="base_message_img col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
			'	<img src="'+HTTPURL+'/resource/upload_buildings/'+ data.data.buildings_id +'/ldt/ldt.jpg'+'">'+
			'</div>'+
			'<div class="base_message_text col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
			'	<div class="row">'+
			'	<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
			'		<div class="base_content_line">占地面积：&nbsp;&nbsp;&nbsp;&nbsp;'+data.data.floor_space+'平方米</div>'+
			'		<div class="base_content_line">总栋数：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data.data.building_count+'栋</div>'+
			'		<div class="base_content_line">容积率：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data.data.ratio+'</div>'+
			'		<div class="base_content_line">装修状况：&nbsp;&nbsp;&nbsp;&nbsp;'+data.data.decoration_condition+'</div>'+
			'		<div class="base_content_line">停车位：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data.data.parking_count+'个</div>'+
			'		<div class="base_content_line">主力户型：&nbsp;&nbsp;&nbsp;&nbsp;'+data.data.main_door+'</div>'+
			'		<div class="base_content_line">楼层状况：&nbsp;&nbsp;&nbsp;&nbsp;'+data.data.floor_detail+'</div>'+
			'	</div>'+
			'	<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
			'		<div class="base_content_line">建筑面积：&nbsp;&nbsp;&nbsp;&nbsp;'+data.data.building_space+'亩</div>'+
			'		<div class="base_content_line">总套数：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data.data.house_count+'户</div>'+
			'		<div class="base_content_line">绿化率：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'+data.data.green_rate+'%</div>'+
			'		<div class="base_content_line">现房期房：&nbsp;&nbsp;&nbsp;&nbsp;'+data.data.util_type+'</div>'+
			'		<div class="base_content_line">产权年限：&nbsp;&nbsp;&nbsp;&nbsp;'+data.data.right_years+'年</div>'+
			'	</div>'+
			'	</div>'+
			'</div>'+
			'<div class="base_message_detail col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
			'	<div class="row">'+
			'	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="box" name="box">'+data.data.buildings_detail+
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
					var str='<li onclick="highLevel(1,'+firstcount+')" class="picli1 lipic'+firstcount+' col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="hx-p-img"><img class="imgtype1" data-num="'+firstcount+'" src="'+HTTPURL+data.data.list[i].resource_path+data.data.list[i].resource_name+'"></div><div class="hx-p-txt"> <p>"'+data.data.list[i].house_type_name+'"</p> <p class="p-last">"'+data.data.list[i].tingshi+'"</p></div></li>';
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
					var str='<li onclick="highLevel(2,'+secendcount+')" class="picli2 lipic'+secendcount+' col-xs-12 col-sm-6 col-md-4 col-lg-3"><img class="imgtype2" data-num="'+secendcount+'" src="'+HTTPURL+data.data.list[i].resource_path+data.data.list[i].resource_name+'"></li>';
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
	
	//关闭大图
	$(".close_ico").on("click",function(){
		$(".high_level").hide(500);
		$("body").attr("style","overflow-y:auto;")
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
			$(".high_cur_pic").attr("src",$(this).attr("src"));
			
		}
		picsrclist[i]=$(this).attr("src");
		i++;
	});
	//设置当前张数与总张数
	bigpictotal=i;
	$(".cur_big_pic_num").html(num);
	$(".total_big_pic_num").html(bigpictotal);
	//设置左右控制按钮的可点击状态
	//显示大图
	$(".high_level").show();
	$(".high_level").animate({top:$(document).scrollTop()+"px"},500);
	$("body").attr("style","overflow-y:hidden;")
}
//大图左右切换
function movelist(index){
	var nowindex=curbignum-1;
	var newnum=nowindex+index;
	if(newnum<0||newnum>=bigpictotal)return;
	$(".high_cur_pic").attr("src",picsrclist[newnum]);
	if(newnum==0){
		$(".left_control").addClass("disabled");
	}else{
		$(".left_control").removeClass("disabled");
	}
	if(newnum==bigpictotal-1){
		$(".right_control").addClass("disabled");
	}else{
		$(".right_control").removeClass("disabled");
	}
	curbignum=newnum+1;
	$(".cur_big_pic_num").html(curbignum);
}

//活动图动态加载
$(function(){
	//过两秒显示 showImage(); 内容
	setTimeout("showImage();",2000);
	//alert(location);
});
function showImage()
{
	$("#main_active_pic").slideUp(1000,function(){$("#main_active_pic").slideDown(1000);});
}
