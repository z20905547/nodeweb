var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:buildingsId(\\d+)/:proId(\\d+)/:pid(\\d+)/:buildingsname', function(req, res, next) {
	res.render('buildings/buildings_detail', { title:req.params.buildingsname+ ',海南海口'+req.params.buildingsname+"楼盘价格,售楼处,售楼处电话,售楼处电话：0898-32875940,户型,评价,特价,官方网址-唯房会",buildingsId: req.params.buildingsId,backproId: req.params.proId,pid: req.params.pid,buildingsname: req.params.buildingsname,});
});

module.exports = router;
