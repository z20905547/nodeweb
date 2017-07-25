worker_id=$("#worker_id").val();
remark=$("#remark").val();
params={
	worker_id:worker_id,
	remark:remark
};

$(document).ready(function(){
   var str;
	str= '<a href="/gy_customer/gy_addc" class="red-f6">推客</a>'


	if(remark == '1'){
		str= '<a href="" class="red-f6"></a>'
	}else if(remark == '2') {
		str= '<a href="/gy_customer/gy_addc" class="red-f6">推客</a>'
	}
	var oneobj=$("<div></div>");
	oneobj.append(str);
	$('.tt').append(oneobj);




	ajaxGet("get",URLMAP.gy_customer,params,function(data){
		if(data.statusCode=="0000"){
			var sublist=data.data.list;
			var str="";

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




				str='<a href="/gy_customer/'+sublist[i].customer_id+'">'+
					'<h3>'+sublist[i].c_name+'&nbsp;'+sublist[i].c_phone+'<span class="fr">'+status+'</span></h3>'+
					'<p>推荐时间：'+sublist[i].c_createtime+'</p></a>'

				var oneobj=$("<li></li>");

				oneobj.append(str);
				$('#customerList').append(oneobj);
			}

		}else{
			$(".bottom-pull-loading").html("网络繁忙，稍后重试");
			setTimeout(function(){
				$(".bottom-pull-loading").hide();
			},3000);
		}
	});

});