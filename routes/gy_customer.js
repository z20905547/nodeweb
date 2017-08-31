var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/gy_customer', function(req, res, next) {


	//	console.log(req.session);
	//	console.log(req.session.worker_id);

		var worker_id = req.session.worker_id;
		var worker_name = req.session.worker_name;
		var remark = req.session.remark;
		//console.log(worker_id);
		res.render('gy_customer/gy_customer', {
			title: '我的信息 | 海南唯房会',
			worker_name: worker_name,
			worker_id: worker_id,
			remark: remark
		})



});
router.get('/:customer_id(\\d+)', function(req, res, next) {
	res.render('gy_customer/gy_order', { customer_id:req.params.customer_id});
});

router.get('/gy_addc', function(req, res, next) {

   if(req.session.sign){
	var user_name =req.session.userName;
	var worker_name =req.session.worker_name;
	var worker_id =req.session.worker_id;
	var p_id =req.session.p_id;
	var partners_mark = req.session.partners_mark;
	var remark = req.session.remark;

	res.render('gy_customer/gy_addc', { worker_id:worker_id, user_name:user_name, worker_name:worker_name, p_id:p_id, partners_mark:partners_mark,remark:remark});
   }else{
	   res.render('users/login', { title: '登陆 | 海南唯房会'});
   }

   });

router.get('/gy_log/:customer_id(\\d+)/:order_id', function(req, res, next) {


	//	console.log(req.session);
	//	console.log(req.session.worker_id);
	if(req.session.sign) {
		var log_userid = req.session.worker_id;
		var log_username = req.session.worker_name;
		var log_phone = req.session.userName;

		//console.log(worker_id);
		res.render('gy_customer/gy_log', {
			title: '我的信息 | 海南唯房会',
			log_username: log_username,
			log_userid: log_userid,
			customer_id: req.params.customer_id,
			order_id: req.params.order_id,
			log_phone: log_phone
		})
	}else {
		res.render('users/login', { title: '登陆 | 海南唯房会'});
	}

});
module.exports = router;
