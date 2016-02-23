
var interval = 1000; 
function ShowCountDown() 
{ 
	var now = new Date();
	$(".main_active_count_down").each(function(){
		var selftime=$(this).attr("data-time");
		var leftTime=selftime-now.getTime(); 
		if(leftTime<=0){
			$(this).find("span").html("活动已结结束！"); 
			return;
		}
		var leftsecond = parseInt(leftTime/1000); 
		var day1=Math.floor(leftsecond/(60*60*24)); 
		var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
		var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
		var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
		var mes="活动倒计时：";
		if(day1){
			mes+=day1+"天";
		}
		if(hour){
			if(hour<10){
				mes+="0"+hour;
			}else{
				mes+=hour;
			}
		}else{
			mes+="00";
		}
		mes+=":";
		if(minute){
			if(minute<10){
				mes+="0"+minute;
			}else{
				mes+=minute;
			}
		}else{
			mes+="00";
		}
		mes+=":";
		if(second){
			if(second<10){
				mes+="0"+second;
			}else{
				mes+=second;
			}
		}else{
			mes+="00";
		}
		$(this).find("span").html(mes); 
	})

} 
window.setInterval(function(){ShowCountDown();}, interval); 