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
	ajaxGet("get",URLMAP.resourceList,params,function(data){
		if(data.statusCode=="0000"){
		}
	});
	
});