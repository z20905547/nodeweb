Id=$("#Id").val();
newsTitle=$("#newsTitle").val();
curpage=$("#curpage").val();
mark=$("#mark").val();

loading=true;
pagecount=8;

params={
	Id:Id,
	newsTitle:newsTitle,
	first:(curpage-1)*pagecount,
	last:pagecount,
	mark:mark,
};


$(document).ready(function(){

ajaxGet("get",URLMAP.notecelist,params,function(data){

	if(data.statusCode=="0000"){
		var sublist=data.data.list;
		var str="";
		var str2="";
		var str3="";
		var str4="";
		for(var i=0;i<sublist.length;i++){
			str='<div class="list_box box_show02">' +
				'<a href="/news/'+sublist[i].Id+'/'+sublist[i].Title+'" target="_blank">'+
				'<img src="http://www.vfhui.com:8080/management/resource/upload_buildings/news/'+sublist[i].Id+'/fm.jpg" onerror="javascript:this.style.display=\'none\'"'+'></a>'+
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

		str2='<span class="page_total">共'+data.data.total+'条</span>&nbsp;&nbsp;'+
             '<a target="_self"  href="/news/newslist/1">首页</a>';

		var totalpage=parseInt((data.data.total-1)/pagecount+1);

		for(var i=0;i<totalpage;i++){
			var k = i+1;
		str3+='&nbsp;&nbsp;<a target="_self" href="/news/newslist/'+k+'">'+k+'</a>'
		}
		str4='&nbsp;&nbsp;<a	target="_self" href="/news/newslist/'+totalpage+'">尾页</a>&nbsp;&nbsp;'
		var oneobj2=$("<dev></dev>");
		$('.pagination-xs').append(str2+str3+str4);
	}else{
	}
});

});