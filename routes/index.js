var express = require('express');
var router = express.Router();
router.get("/:cityId(\\d+)", function(req, res, next) {
	//获取楼盘数据
  res.render('index', { title: '唯房会',backcityId: req.params.cityId});
});
/* GET home page. */
router.get('/', function(req, res, next) {
	//获取楼盘数据
	
  res.render('index', { title: '唯房会',backcityId: 460100});
});

router.get("/buildings/:buildingsId(\\d+)", function(req, res, next) {
	//获取楼盘数据
	
  res.render('buildings', { title: '唯房会' });
});
module.exports = router;
