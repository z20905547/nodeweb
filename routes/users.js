var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
	//已经登陆跳转到user_info
	if(req.session.sign){
		res.render('users/user_info', { title: '我的信息 | 共赢经纪'});
	}else{
		//未登陆跳转login
		res.render('users/login', { title: '登陆 | 共赢经纪'});
	}
	
});
router.get('/user_info', function(req, res, next) {
	//已经登陆跳转到user_info
	if(req.session.sign){
		res.render('users/user_info', { title: '我的信息 | 海南唯房会'});
	}else{
		//未登陆跳转login
		res.render('users/login', { title: '登陆 | 海南唯房会'});
	}
	
});
router.get('/login', function(req, res, next) {
	//已经登陆跳转到user_info
	if(req.session.sign) {
			res.render('users/gy_index', {title: '我的信息 | 共赢经纪', backproId: 460000});
	}else{
		//未登陆跳转login
		res.render('users/login', { title: '登陆 | 共赢经纪',backproId:460000});
	}
});

router.get('/login/:pagemark(\\d+)', function(req, res, next) {
	//console.log("pagemark:"+pagemark);
	//已经登陆跳转到user_info
	if(req.session.sign) {
		res.render('users/gy_index', {title: '我的信息 | 共赢经纪', backproId: 460000});
	}else{
		//未登陆跳转login
		res.render('users/login', { title: '登陆 | 共赢经纪',backproId:460000,pagemark:req.params.pagemark});
	}
});
router.get('/login2', function(req, res, next) {
	//已经登陆跳转到user_info



	if(req.session.sign){
		res.render('index', { title: '我的信息 | 海南唯房会',backproId:460000});
	}else{
		//未登陆跳转login
		res.render('users/login2', { title: '登陆 | 海南唯房会',backproId:460000});
	}
});

router.get('/register', function(req, res, next) {
	//已经登陆跳转到user_info

		res.render('users/register', { title: '注册'});


});


router.get('/register2', function(req, res, next) {
	//已经登陆跳转到user_info

	res.render('users/register2', { title: '注册'});


});
// 找回密码
router.get('/mm', function(req, res, next) {
	//已经登陆跳转到user_info

	res.render('users/mm', { title: '找回密码'});


});


router.get('/gy_index', function(req, res, next) {
	//已经登陆跳转到user_info

	res.render('gongying/gy_index', { title: '首页',backproId:460000});


});
router.get('/wo', function(req, res, next) {
	//已经登陆跳转到user_info
	if(req.session.sign){
		worker_name=req.session.worker_name;
		worker_id=req.session.worker_id;
		res.render('users/wo', { title: '我的信息 | 共赢经纪',worker_name:worker_name,worker_id:worker_id});
	}else{
		//未登陆跳转login
		res.render('users/wo', { title: '我的帐户'});
	}
});
router.get('/information', function(req, res, next) {
	//已经登陆跳转到user_info
	if(req.session.sign){
		worker_name=req.session.worker_name;
		worker_id=req.session.worker_id;
		res.render('users/information', { title: '我的信息 | 共赢经纪',worker_name:worker_name,worker_id:worker_id});
	}else{
		//未登陆跳转login
		res.render('users/information', { title: '我的资料'});
	}
});

//
router.post('/login', function(req, res, next) {

	var worker_name=req.body.worker_name;
	var user_name=req.body.user_name;
	var worker_id=req.body.worker_id;

	var p_id=req.body.p_id;
	var partners_mark=req.body.partners_mark;
	var remark=req.body.remark;
	var pagemark=req.body.pagemark;

	//var worker_id=req.body.id;
	//var tag=req.body.user_name;

	//调用前端用户登陆接口，成功返回用户信息，登陆失败返回指定标示
	//if(userName==="zrt"&&passWord==="123"){
		req.session.sign=true;
		req.session.userName=user_name;
	    req.session.worker_name=worker_name;
	    req.session.worker_id=worker_id;
	    req.session.p_id=p_id;
	    req.session.partners_mark=partners_mark;
	    req.session.remark=remark;

	    //console.log("pagemark:"+pagemark);

       if(pagemark==1){
		   res.render('gy_customer/gy_addc', { worker_id:worker_id, user_name:user_name, worker_name:worker_name, p_id:p_id, partners_mark:partners_mark,remark:remark});
	   }else if (pagemark==2){
		   res.render('users/wo', {title: '我的信息 | 共赢经纪', worker_name: worker_name, worker_id: worker_id});
	   } else{
		   res.render('gongying/gy_index', { title: '我的信息 | 共赢经纪',remark:remark,worker_name:worker_name,worker_id:worker_id,backproId:460000});
	   }




	//}else{//登陆失败，返回登陆页面
	//	res.render('users/login', { title: '登陆 | 海南唯房会',errorMsg:userName+'闲人免进！'});
	//}

	//登陆成功，讲用户id写入session
	//res.render('users/login', { title: req.body+'登陆 | 海南唯房会'});

});
//唯房会注册用户登录
router.post('/login2', function(req, res, next) {

	var worker_name=req.body.worker_name;
	var user_name=req.body.user_name;
	var worker_id=req.body.worker_id;

	var p_id=req.body.p_id;
	var partners_mark=req.body.partners_mark;
	var remark=req.body.remark;

	//var worker_id=req.body.id;
	//var tag=req.body.user_name;

	//调用前端用户登陆接口，成功返回用户信息，登陆失败返回指定标示
	//if(userName==="zrt"&&passWord==="123"){
	req.session.sign=true;
	req.session.userName=user_name;
	req.session.worker_name=worker_name;
	req.session.worker_id=worker_id;
	req.session.p_id=p_id;
	req.session.partners_mark=partners_mark;
	req.session.remark=remark;

	console.log("log信息");console.log(remark);
	res.render('index', { title: '我的信息 | 海南唯房会',remark:remark,worker_name:worker_name,user_name:user_name,worker_id:worker_id,backproId:460000});
	//}else{//登陆失败，返回登陆页面
	//	res.render('users/login', { title: '登陆 | 海南唯房会',errorMsg:userName+'闲人免进！'});
	//}

	//登陆成功，讲用户id写入session
	//res.render('users/login', { title: req.body+'登陆 | 海南唯房会'});

});

router.get('/gy_road', function(req, res, next) {
	//获取楼盘数据

	res.render('users/gy_road', { title: '唯房会 -一家专门做特价房的网站',});
});
router.get('/gy_road/:id', function(req, res, next) {
	//获取楼盘数据
	//console.log(id);
	res.render('users/gy_road', { title: '唯房会 -一家专门做特价房的网站',id: req.params.id});
});
module.exports = router;
