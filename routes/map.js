var express = require('express');
var router = express.Router();

router.get('/map', function (req, res) {
    res.render('map/map', { title: '地图找房 | 海南唯房会'});
});

module.exports = router;
