
travel_id=$("#id").val();
proId=460000;
params={
	travel_id:travel_id
};

$(document).ready(function(){

	ajaxGet("get",URLMAP.gy_roaddetail,params,function(data){

		if(data.statusCode=="0000"){
			var sublist=data.data.list;
			var str="";
			var str2="";
			var str3="";
			var str4="";
				for(var i=0;i<1;i++){

				var str2=
					'<h4 class="ay-ellipsis ng-binding" id="sourcetxt" ng-bind="ProductName1">'+sublist[i].travel_name+'</h4>'+

					'<p class="productBox-des ng-binding " >'+sublist[i].travel_route+'</p>'

				var str= sublist[i].travel_describe

				var str3= sublist[i].travel_details

				var oneobj2=$("<article></article>");
				oneobj2.append(str2);
				$('.productBox').append(oneobj2);

				var oneobj=$("<section></section>");
				oneobj.append(str);
				$('.travel_describe').append(oneobj);

				var oneobj3=$("<div></div>");
				oneobj3.append(str3);
				$('.travel_details').append(oneobj3);

			}

			for(var i=0;i<sublist.length;i++){
				var oneobj4=$("<div></div>");
				var img='<img src="'+HTTPURL+'resource/upload_buildings/'+sublist[i].buildings_id+'/xct/xct.jpg" onerror="/images/one5.png">';



				str4='<div class="right-img none-padding col-xs-12 col-sm-6 col-md-7 col-lg-8">'+
				img+
				'<div class="float-detail">'+
				'<div class="main_active_buildings_name1"><span><strong>'+sublist[i].buildings_name+'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong></span>'+
				'</div>'+
				'</div>';
				oneobj4.addClass("right-img none-padding").attr("data-id",sublist[i].buildings_id).attr("data-id2",sublist[i].acid).attr("data-id3",sublist[i].buildings_name).on("click",function(){
					window.open(WEBMAP.gy_buildingsdetail+$(this).attr("data-id")+"/"+46000+"/"+$(this).attr("data-id2")+"/"+$(this).attr("data-id3"));
				})
			oneobj4.append(str4);
			$('.active-list').append(oneobj4);

			}



		}else{
			$(".bottom-pull-loading").html("网络繁忙，稍后重试");
			setTimeout(function(){
				$(".bottom-pull-loading").hide();
			},3000);
		}
	});



});






