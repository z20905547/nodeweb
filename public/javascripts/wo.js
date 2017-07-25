worker_id=$("#worker_id").val();
worker_name=$("#worker_name").val();

$(document).ready(function(){
   var str2 = '';
	if(null !=worker_name && worker_name!='' && worker_name != 'undefine') {
		str2=worker_name;
	}else {
		str2 = '点击登录，获取更多优惠';
	}

	str=' <a href="/users/login">'+str2+'</a>'

	var oneobj=$("<p></p>");
	oneobj.append(str);
	$('.xingming').append(oneobj);
});








