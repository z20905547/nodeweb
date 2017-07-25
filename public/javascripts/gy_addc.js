

user_name=$("#user_name").val();
worker_name=$("#worker_name").val();
worker_id=$("#worker_id").val();
p_id=$("#p_id").val();
partners_mark=$("#partners_mark").val();
remark=$("#remark").val();


$(document).ready(function(){

	str='<input name="c_tj_phone"  id="c_tj_phone" type="hidden" value="'+user_name+'">' +
		'<input name="c_tj_name"  id="c_tj_name" type="hidden" value="'+worker_name+'">' +
		'<input name="c_tj_id" id="c_tj_id" type="hidden" value="'+worker_id+'">' +
		'<input name="p_tj_id" id="p_tj_id" type="hidden" value="'+p_id+'">' +
		'<input name="remark" id="remark" type="hidden" value="'+remark+'">'


	var oneobj=$("<div></div>");
	oneobj.append(str);
	$('.ttt').append(oneobj);


	$(".gentleman,.lady").click( function () {
		$(this).addClass("current");
		$("#c_sex").val($(this).attr("data-val"));
		if ($(this).hasClass("gentleman")) {
			$(".lady").removeClass("current");
		} else {
			$(".gentleman").removeClass("current");
		}
	});
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

function submitForm() {
	//var data = $("#form1").serializeArray(); //自动将form表单封装成json
	//alert(JSON.stringify(data));
	var jsonuserinfo = $('#logform').serializeObject();
	//alert(JSON.stringify(jsonuserinfo));

	var options = {
		url: URLMAP.gy_addc,
		dataType: "jsonp",
		data: JSON.stringify(jsonuserinfo),
		type: "post",
		beforeSubmit: showRequest,
		success: function (data) {
			window.location.href="/gy_customer/gy_customer";

		}
	};

	$('#customerform').ajaxSubmit(options);

	$('#customerform').clearForm();

	function showRequest() {
		var c_name = $("#c_name").val();
		var c_phone = $("#c_phone").val();
		if (c_name == '') {
			alert('不填写姓名？');
			return false;
		}
		if (c_phone == '') {
			alert('不填电话 咋联系客户？');
			return false;
		}
		return true;
	}

}
















