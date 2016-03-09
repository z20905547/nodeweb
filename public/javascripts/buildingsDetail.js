/**
 * 
 */
$(document).ready(function(){
	var params={
			buildingsId:$("#buildingsId").val()
	}
	ajaxGet("get",URLMAP.buildingsDetail,params,function(data){
		if(data.statusCode=="0000"){
			//楼盘动态
			var adcontent='<div class="buildings_detail_price small_content col-xs-12 col-sm-12 col-md-4 col-lg-4">'+
			'	<img src="/images/error.png" onerror="/images/error.png">'+
			'</div>'+
			'<div class="buildings_detail_ad small_content col-xs-12 col-sm-12 col-md-3 col-lg-3">'+
			'	<div class="main_active_logo"><img src="'+HTTPURL+data.data.logo_path+data.data.logo_name+'"></div>'+
			'			<div class="main_active_buildings_name">'+data.data.buildings_name+'</div>'+
			'			<div class="main_active_name">'+
			'				<div class="ico_active_name"></div>'+
			'				<span>'+data.data.active_name+'</span>'+
			'			</div>'+
			'			<div class="main_active_price">'+
			'				<div class="ico_active_price">限时特价</div>'+
			'				<span>'+data.data.active_price+'</span>'+
			'			</div>'+
			'			<div class="main_active_count_down" data-time="'+data.data.end_date+'">'+
			'				<div class="ico_active_count_down"></div>'+
			'				<span></span>'+
			'			</div>'+
			'</div>'+
			'<div class="buildings_detail_text col-xs-12 col-sm-12 col-md-5 col-lg-5">'+
			'	<div class="text_label">楼盘地址:</div><div class="text_content">'+data.data.address+'</div>'+
			'	<div class="text_label">主力户型:</div><div class="text_content">'+data.data.main_door+'</div>'+
			'	<div class="text_label">开盘时间:</div><div class="text_content">'+data.data.open_date+'</div>'+
			'	<div class="text_label">交房时间:</div><div class="text_content">'+data.data.deliver_date+'</div>'+
			'	<div class="detail_phone"><span class="glyphicon glyphicon-phone-alt"></span>&nbsp;&nbsp;'+data.data.server_phone_num+'</div>'+
			'</div>';
			$(".buildings_active_loading").html(adcontent);
			//基本信息
			var basetextcontent='<div class="base_message_img col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
			'	<img src="'+HTTPURL+data.data.ad_path+data.data.ad_name+'">'+
			'</div>'+
			'<div class="base_message_text col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
			'	<div class="row">'+
			'	<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
			'		<div class="base_content_line">占地面积：'+data.data.floor_space+'平方米</div>'+
			'		<div class="base_content_line">总栋数：'+data.data.building_count+'栋</div>'+
			'		<div class="base_content_line">容积率：'+data.data.ratio+'</div>'+
			'		<div class="base_content_line">装修状况：'+data.data.decoration_condition+'</div>'+
			'		<div class="base_content_line">停车位：'+data.data.parking_count+'</div>'+
			'		<div class="base_content_line">主力户型：'+data.data.main_door+'</div>'+
			'		<div class="base_content_line">楼层状况：'+data.data.floor_detail+'</div>'+
			'	</div>'+
			'	<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">'+
			'		<div class="base_content_line">建筑面积：'+data.data.building_space+'亩</div>'+
			'		<div class="base_content_line">总套数：'+data.data.house_count+'户</div>'+
			'		<div class="base_content_line">绿化率：'+data.data.green_rate+'%</div>'+
			'		<div class="base_content_line">现房期房：'+data.data.util_type+'</div>'+
			'		<div class="base_content_line">产权年限：'+data.data.right_years+'</div>'+
			'	</div>'+
			'	</div>'+
			'</div>'+
			'<div class="base_message_detail col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
			'	<div class="row">'+
			'	<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+data.data.buildings_detail+
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
			for(var i=0;i<data.data.count;i++){
				
				if(data.data.list[i].big_type=="1"){
					firstcount++;
					var str='<li onclick="highLevel(1,'+firstcount+')" class="picli1 lipic'+firstcount+'"><img class="imgtype1" data-num="'+firstcount+'" src="'+data.data.list[i].path+data.data.list[i].name+'"></li>';
					//拼接所有图片选项卡和图片列表区，默认选中，没有就先创建
					if($(".hptag10").length==0){
						$(".house_pic_tag").append('<span class="pic-tag hptag10 active" data-type="10" data-space="house_pic_door"></span>');
						$(".house_pic_door").append('<div class="pic-div picdiv10 active"><ul class="ul10"></ul></div>');
					}
					$(".ul10").append(str);
					//拼接到对应子户型列表中，没有就创建默认隐藏
					if(($(".hptag"+data.data.list[i].sm_type).length==0)){
						$(".house_pic_tag").append('<span class="pic-tag hptag'+data.data.list[i].sm_type+'" data-type="'+data.data.list[i].sm_type+'" data-space="house_pic_door"></span>');
						$(".house_pic_door").append('<div class="pic-div picdiv'+data.data.list[i].sm_type+'" style="display:none;"><ul class="ul'+data.data.list[i].sm_type+'"></ul></div>');
					}
					$(".ul"+data.data.list[i].sm_type).append(str);
				}else if(data.data.list[i].big_type=="2"){
					secendcount++;
					var str='<li onclick="highLevel(2,'+secendcount+')" class="picli2 lipic'+secendcount+'"><img class="imgtype2" data-num="'+secendcount+'" src="'+data.data.list[i].path+data.data.list[i].name+'"></li>';
					//拼接所有图片选项卡和图片列表区，默认选中，没有就先创建
					if($(".hptag20").length==0){
						$(".effect_pic_tag").append('<span class="pic-tag hptag20 active" data-type="20" data-space="effect_pic_door"></span>');
						$(".effect_pic_door").append('<div class="pic-div picdiv20"><ul class="ul20"></ul></div>');
					}
					$(".ul20").append(str);
					//拼接到对应子户型列表中，没有就创建默认隐藏
					if(($(".hptag"+data.data.list[i].sm_type).length==0)){
						$(".effect_pic_tag").append('<span class="pic-tag hptag'+data.data.list[i].sm_type+'" data-type="'+data.data.list[i].sm_type+'" data-space="effect_pic_door"></span>');
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
	//切换图片选项卡
	$(".pic-tag").on("click",function(){
		if($(this).hasClass("active"))return;
		$(this).siblings(".pic-tag.active").removeClass("active");
		$(this).addClass("active");
		//内容切换
		$("."+$(this).attr("data-space")).find(".pic-div.active").removeClass("active").hide();
		var contentClass=$(this).attr("data-type");
		$(".picdiv"+contentClass).addClass("active").show();
	});
});
var picsrclist;
var bigpictotal;
var curbignum;
//初始化显示大图
function highLevel(type,num){
	picsrclist=[];
	bigpictotal=0;
	curbignum=num;
	$(".high_level").show();
	//拼接对应类别所有图片
	//显示入口图片
	//设置当前张数与总张数
	var i=0;
	$(".imgtype"+type).each(function(){
		if($(this).attr("data-num")==num){
			//换大图
			$(".high_cur_pic").attr("src",$(this).attr("src"));
			
		}
		picsrclist[i].$(this).attr("src");
		i++;
	});
	//设置当前张数与总张数
	bigpictotal=i;
	$(".cur_big_pic_num").html(num);
	$(".total_big_pic_num").html(bigpictotal);
	//设置左右控制按钮的可点击状态
}
//大图左右切换
function movelist(index){
	var nowindex=curbignum-1;
	var newnum=nowindex+index;
	if(newnu<0||newnum>=bigpictotal)return;
	$(".high_cur_pic").attr("src",picsrclist[newnum]);
	if(newnu==0){
		$(".left_control").addClass("disabled");
	}else{
		$(".left_control").removeClass("disabled");
	}
	if(newnu==bigpictotal-1){
		$(".right_control").addClass("disabled");
	}else{
		$(".right_control").removeClass("disabled");
	}
	curbignum=newnum+1;
}