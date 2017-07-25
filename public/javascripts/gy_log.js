customer_id=$("#customer_id").val();
log_userid=$("#log_userid").val();
log_username=$("#log_username").val();
log_phone=$("#log_phone").val();
order_id=$("#order_id").val();

$(document).ready(function(){

	str='<input name="customer_id"  id="customer_id" type="hidden" value="'+customer_id+'">' +
		'<input name="log_userid"  id="log_userid" type="hidden" value="'+log_userid+'">' +
		'<input name="log_username" id="log_username" type="hidden" value="'+log_username+'">' +
		'<input name="order_id" id="order_id" type="hidden" value="'+order_id+'">' +
		'<input name="log_phone" type="hidden" value="'+log_phone+'">'

	var oneobj=$("<div></div>");
	oneobj.append(str);
	$('.container').append(oneobj);
});



$.fn.serializeObject = function()
{
	var o = {};
	var a = this.serializeArray();
	$.each(a, function() {
		if (o[this.name]) {
			if (!o[this.name].push) {
				o[this.name] = [o[this.name]];
			}
			o[this.name].push(this.value || '');
		} else {
			o[this.name] = this.value || '';
		}
	});
	return o;
};

function saveFollowUp() {
	//var data = $("#form1").serializeArray(); //自动将form表单封装成json
	//alert(JSON.stringify(data));
	var jsonuserinfo = $('#logform').serializeObject();
	//alert(JSON.stringify(jsonuserinfo));

	var options = {
		url: URLMAP.gy_log,
		dataType: "jsonp",
		data: JSON.stringify(jsonuserinfo),
		type: "post",
		beforeSubmit: showRequest,
		success: function (data) {
			window.location.href="/gy_customer/"+customer_id;

		}
	};

	$('#logform').ajaxSubmit(options);

	$('#logform').clearForm();

	function showRequest() {
		var log_content = $("#log_content").val();

		if (log_content == '') {
			alert('真的啥都不填就提交？!');
			return false;
		}
		return true;
	}

}



















