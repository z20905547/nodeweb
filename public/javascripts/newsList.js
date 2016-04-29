Id=$("#Id").val();
newsTitle=$("#newsTitle").val();

loading=true;
curpage=1;
totalpage=1;
pagecount=5;

params={
	Id:Id,
	newsTitle:newsTitle
};

$(document).ready(function(){
ajaxGet("get",URLMAP.notecelist,null,function(data){

	if(data.statusCode=="0000"){
		var sublist=data.data.list;
		var str="";
		for(var i=0;i<sublist.length;i++){
			str='<div class="list_box box_show02">' +
				'<a href="/news/'+sublist[i].Id+'/'+sublist[i].Title+'" target="_blank">'+
				'<img src="http://www.vfhui.com:8080/management/resource/upload_buildings/news/'+sublist[i].Id+'/fm.jpg"></a>'+
				'<h2> <a href="/news/'+sublist[i].Id+'/'+sublist[i].Title+'" target="_blank">'+sublist[i].Title+'</a> </h2>'+
				'<p class="color_h01"> <edit type="text" name="Index_RightContentArtlistReleaseDate">发布日期：</edit><span><time>'+sublist[i].MessageDate+'</time></span>'+
                '<edit type="text" name="Index_RightContentArtlistTotalHit">阅读</edit>'+
				'<span>（17130）</span></p>'+
				'<div class="tags">' +
				'<a class="fr c2" href="/news/'+sublist[i].Id+'/'+sublist[i].Title+'" target="_blank">'+
				'<edit type="text" name="Index_RightContentArtlistViewContent">查看全文</edit></a>'+
			    '</div></div>'

			var oneobj=$("<span></span>");
			oneobj.append(str);
			$('.ttbox').append(oneobj);
		}

	}else{
	}
});

});