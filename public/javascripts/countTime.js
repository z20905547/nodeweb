
var interval = 1000; 
function ShowCountDown() 
{ 
	var now = new Date();
	$(".main_active_count_down").each(function(){
		var selftime=$(this).attr("data-time");
		var leftTime=selftime-now.getTime(); 
		var leftsecond = parseInt(leftTime/1000); 
		var day1=Math.floor(leftsecond/(60*60*24)); 
		var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
		var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
		var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
		$(this).find("span").html("活动还有："+hour+"小时"+minute+"分"+second+"秒"); 
	})

} 
window.setInterval(function(){ShowCountDown();}, interval); 