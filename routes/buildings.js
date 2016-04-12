var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:buildingsId(\\d+)/:proId(\\d+)/:pid(\\d+)', function(req, res, next) {
	res.render('buildings/buildings_detail', { title: '唯房会 -一家做特价房的网站！',buildingsId: req.params.buildingsId,backproId: req.params.proId,pid: req.params.pid});
});

module.exports = router;
