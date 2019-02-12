var express = require('express');
var router = express.Router();

/* GET users listing.460000 海南 */
router.get('/:proId(\\d+)/:city_id(\\d+)', function(req, res, next) {
	res.render('search/search_list', {title: '唯房会 -一家专门做特价房的网站',backproId: req.params.proId,city_id: req.params.city_id});
});

router.get('/:buildings_name', function (req, res, next) {
	res.render('search/search_list', { title: '唯房会 -一家专门做特价房的网站',buildings_name:req.params.buildings_name,backproId: 460000});

});

module.exports = router;
