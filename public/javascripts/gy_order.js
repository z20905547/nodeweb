customer_id=$("#customer_id").val();

$(document).ready(function(){

	params={
		customer_id:customer_id
	};
	ajaxGet("get",URLMAP.gy_customerById,params,function(data){

		if(data.statusCode=="0000"){
			var sublist=data.data.list;
			var str="";
			var str2="";

			for(var i=0;i<sublist.length;i++){
				var status="";
				if(sublist[i].c_status==1){
					status="待审核";
				}else if(sublist[i].c_status==2){
					status="审核通过";
				}else if(sublist[i].c_status==3){
					status="审核未通过";
				}else if(sublist[i].c_status==4){
					status="对接客户中";
				}else if(sublist[i].c_status==5){
					status="已成交";
				}else if(sublist[i].c_status==6){
					status="未成交";
				}

				var str2=
					'<span class="icon"></span>'+
					'<span>客户跟进</span>'+
					'<a class="details fr" href="/gy_customer/gy_log/'+sublist[i].customer_id+'/'+sublist[i].order_id+'">添加日志</a>'

				var oneobj2=$("<div></div>");
				oneobj2.append(str2);
				$('.head').append(oneobj2);

				var jdname = sublist[i].c_jd_name;
				var jdphone = sublist[i].c_jd_phone;
				if(null ==jdname || jdname == '' || jdname == 'undefined' )  jdname='等待安排';
				if(null ==jdphone || jdphone == ''|| jdphone == 'undefined')  jdphone='';



					str='<h1 class="name">'+sublist[i].c_name+'</h1>'+
					' <p class="phone-num">'+sublist[i].c_phone+'</p>'+
					'<div class="recommend-info">'+
					'<span class="intention fl"><em>接待置业顾问&nbsp;&nbsp;</em>'+jdname+'&nbsp;&nbsp;&nbsp;'+jdphone+'</span>'+
					'</div>'

				var oneobj=$("<div></div>");

				oneobj.append(str);
				$('.head-info').append(oneobj);
			}

		}else{
			$(".bottom-pull-loading").html("网络繁忙，稍后重试");
			setTimeout(function(){
				$(".bottom-pull-loading").hide();
			},3000);
		}
	});



	ajaxGet("get",URLMAP.gy_orderdetail,params,function(data){

		if(data.statusCode=="0000"){
			var sublist=data.data.list;
			var str="";

			for(var i=0;i<sublist.length;i++){
				str='<strong><h5>'+sublist[i].log_content+'</h5></strong>'+
					'<p>'+sublist[i].log_createtime+' &nbsp;&nbsp;'+sublist[i].log_username+'</p>'

				var oneobj=$("<li></li>");

				oneobj.append(str);
				$('#customerList2').append(oneobj);
			}

		}else{
			$(".bottom-pull-loading").html("网络繁忙，稍后重试");
			setTimeout(function(){
				$(".bottom-pull-loading").hide();
			},3000);
		}
	});

});