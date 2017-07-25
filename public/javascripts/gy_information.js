worker_id=$("#worker_id").val();

if(null ==worker_id || worker_id=='' || worker_id=='undefine' ) {
	worker_id=0;
}

$(document).ready(function(){

	params={
		worker_id:worker_id
	};

	ajaxGet("get",URLMAP.gy_workerInfo,params,function(data){

		if(data.statusCode=="0000"){
			var sublist=data.data;

			var str="";



				str='<div></div><div class="panel-body"><strong>'+sublist.worker_name+'</strong></div>'+
				     '<table class="table">'+
					 '<tr><td>手机号码： '+sublist.user_name+'</td></tr>'+
					 '<tr><td>所属机构： '+sublist.p_name+'</td></tr>'  +
					 '<tr><td>机构编码： '+sublist.partners_mark+'</td></tr>' +
					 '</table></div>'

				var oneobj=$("<div></div>");
				oneobj.append(str);
				$('.rr').append(oneobj);


		}else{
			$(".bottom-pull-loading").html("网络繁忙，稍后重试");
			setTimeout(function(){
				$(".bottom-pull-loading").hide();
			},3000);
		}
	});

});