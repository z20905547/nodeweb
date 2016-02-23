function getSubList(pid,id,obj){
	obj.html("");
	obj.val("");
	if(!pid){
		return;
	}
	var url=URLMAP.citylist;
	var params={parentId:pid};
	ajaxGet('get',url,params,function(data){
		if(data.statusCode=="0000"){
			obj.html("");
			var sublist=data.data;
			for(var i=0;i<sublist.length;i++){
				if(id&&sublist[i].area_id==id){
					obj.append("<option value='"+sublist[i].area_id+"' selected>"+sublist[i].area_name+"</option>");
				}else{
					obj.append("<option value='"+sublist[i].area_id+"'>"+sublist[i].area_name+"</option>");
				}
			}
		}else{
			obj.append("<option value='460100'>海口</option>");
		}
		
	})
}