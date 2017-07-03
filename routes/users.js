var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	//已经登陆跳转到user_info
	if(req.session.sign){
		res.render('users/user_info', { title: '我的信息 | 海南唯房会'});
	}else{
		//未登陆跳转login
		res.render('users/login', { title: '登陆 | 海南唯房会'});
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
	if(req.session.sign){
		res.render('users/user_info', { title: '我的信息 | 海南唯房会'});
	}else{
		//未登陆跳转login
		res.render('users/login', { title: '登陆 | 海南唯房会'});
	}
});
router.post('/login', function(req, res, next) {
	var userName=req.body.userName;
	var passWord=req.body.passWord;
	//调用前端用户登陆接口，成功返回用户信息，登陆失败返回指定标示
	if(userName==="zrt"&&passWord==="123"){
		req.session.sign=true;
		req.session.userName=userName;
		res.render('users/user_info', { title: '我的信息 | 海南唯房会',userName:userName});
	}else{//登陆失败，返回登陆页面
		res.render('users/login', { title: '登陆 | 海南唯房会',errorMsg:userName+'闲人免进！'});
	}
	
	//登陆成功，讲用户id写入session
	//res.render('users/login', { title: req.body+'登陆 | 海南唯房会'});
});
module.exports = router;
