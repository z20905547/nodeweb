var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//获取楼盘数据
	
  res.render('index', { title: '唯房会' });
});
router.get('/buildings/*', function(req, res, next) {
	//获取楼盘数据
	
  res.render('buildings', { title: '唯房会' });
});
module.exports = router;
