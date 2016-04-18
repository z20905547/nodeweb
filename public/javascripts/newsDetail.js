Id=$("#Id").val();

params={
	Id:Id
};

$(document).ready(function(){

	ajaxGet("get",URLMAP.noticedetail,params,function(data){

		if(data.statusCode=="0000"){

			var adcontent1='<div class="detail_til">'+
				'             <h2>'+data.data.Title+'</h2>'+
				'	          <span><edit type="text" name="Content_RightContentArtReleaseDate"></edit><time>发布日期：'+data.data.MessageDate+'</time></span>'+
				'			 </div>'+
				'				<div class="de_text J_zw_p"> '+data.data.Content +'</div>';
			$(".box_show02").html(adcontent1);
		}
	});
});