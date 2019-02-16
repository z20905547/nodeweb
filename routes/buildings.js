var express = require('express');
var router = express.Router();

/* GET users listing.460000 海南 */
router.get('/:proId(460000)/:buildingsId(\\d+)/:buildingsname', function(req, res, next) {
	res.render('buildings/buildings_detail', { title: '【唯房会】 '+req.params.buildingsname+"最新特价",buildingsId: req.params.buildingsId,backproId: req.params.proId,buildingsname: req.params.buildingsname});
});
/* GET users listing.450000 广西 */
router.get('/:proId(450000)/:buildingsId(\\d+)/:buildingsname', function(req, res, next) {
	res.render('buildings/gx_buildings_detail', { title: '【唯房会】 '+req.params.buildingsname+"最新特价",buildingsId: req.params.buildingsId,backproId: req.params.proId,buildingsname: req.params.buildingsname});
});

/* GET users listing.530000 云南 */
router.get('/:proId(530000)/:buildingsId(\\d+)/:buildingsname', function(req, res, next) {
	res.render('buildings/yn_buildings_detail', { title: '【唯房会】 '+req.params.buildingsname+"最新特价",buildingsId: req.params.buildingsId,backproId: req.params.proId,buildingsname: req.params.buildingsname});
});

module.exports = router;
