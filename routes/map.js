var express = require('express');
var router = express.Router();

router.get('/map', function (req, res) {
    res.render('map/map', { title: '地图找房 | 海南唯房会'});
});

router.get('/findListByselect', function (req, res) {
    res.render('map/map', { title: '地图找房 | 海南唯房会',city_id:req.body.city_id,active_price:req.body.active_price,acreage:req.body.acreage,shi:req.body.shi,backproId: 460000});

});
module.exports = router;
