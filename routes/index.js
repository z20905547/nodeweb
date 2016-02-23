var express = require('express');
var router = express.Router();
router.get("/:proId(\\d+)", function(req, res, next) {
	//获取楼盘数据
  res.render('index', { title: '唯房会',backproId: req.params.proId});
});
/* GET home page. */
router.get('/', function(req, res, next) {
	//获取楼盘数据
	
  res.render('index', { title: '唯房会',backproId: 460000});
});
module.exports = router;
