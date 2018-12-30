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
				'             <p class="p1">'+data.data.Title+'</p>'+
				'	         <p class="p2"> <span class="time"><edit type="text" name="Content_RightContentArtReleaseDate"></edit><time>发布日期：'+data.data.MessageDate+'</time></span></p>'+
				'			  </div>'+
				'             <big><img class="J_art_content_p" src="http://www.vfhui.com:8080/management/resource/upload_buildings/news/'+data.data.Id+'/fm.jpg" onerror="javascript:this.style.display=\'none\'"'+'></big>'+
				'			  <div id="newsContent" style="width:100%;overflow:hidden;font-size: 16px;" class="text" deep="2">	<p style="text-indent:32px;text-autospace:ideograph-numeric;line-height:29px"><span style=";font-family:微软雅黑;font-size:16px">'+data.data.Content +'</span></p>  </div>';
			$(".box_show02").html(adcontent1);
			$(".border-bottom").html(adcontent1);
			$(".J_last").html('&gt;&gt;'+data.data.Title);
		}
	});


});