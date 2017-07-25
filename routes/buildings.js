var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:buildingsId(\\d+)/:proId(\\d+)/:pid(\\d+)/:buildingsname', function(req, res, next) {
	res.render('buildings/buildings_detail', { title: '【唯房会】 '+req.params.buildingsname+"最新特价",buildingsId: req.params.buildingsId,backproId: req.params.proId,pid: req.params.pid,buildingsname: req.params.buildingsname});
});

module.exports = router;
