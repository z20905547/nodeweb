Id=$("#Id").val();
newsTitle=$("#newsTitle").val();
params={
	Id:Id,
	newsTitle:newsTitle
};



$(document).ready(function(){

	ajaxGet("get",URLMAP.noticedetail,params,function(data){

		if(data.statusCode=="0000"){

			var adcontent1='<div class="detail_til">'+
				'             <h2>'+data.data.Title+'</h2>'+
				'	          <span><edit type="text" name="Content_RightContentArtReleaseDate"></edit><time>发布日期：'+data.data.MessageDate+'</time></span>'+
				'			  </div>'+
				'             <big><img class="J_art_content_p" src="http://www.vfhui.com:8080/management/resource/upload_buildings/news/'+data.data.Id+'/fm.jpg" onerror="javascript:this.style.display=\'none\'"'+'></big>'+
				'			  <div class="de_text J_zw_p"> '+data.data.Content +'</div>';
			$(".box_show02").html(adcontent1);
			$(".J_last").html('&gt;&gt;'+data.data.Title);
		}
	});
});