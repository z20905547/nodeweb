var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:buildingsId(\\d+)/:proId(\\d+)', function(req, res, next) {
	res.render('buildings/buildings_detail', { title: '唯房会',buildingsId: req.params.buildingsId,backproId: req.params.proId});
});

module.exports = router;
