


params={
	Id:Id,
}
$(document).ready(function(){
	ajaxGet("get",URLMAP.noticedetail,params,function(data){

		if(data.statusCode=="0000"){
			var sublist=data.data.list;
			var str="";
			for(var i=0;i<sublist.length;i++){
				var oneobj=$("<dev></dev>");

				str= sublist[i].Content;
				oneobj.append(str);
				$('.detail_til').append(oneobj);
			}

		}else{
		}
	});

});

