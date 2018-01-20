var express = require('express');
var router = express.Router();


router.post('/findListBybname', function (req, res) {
  res.render('bieshu/bs_index', { title: '唯房会 -一家专门做特价房的网站',buildings_name:req.body.buildings_name,backproId: 460000});

});
router.get('/cityId/:city_id(\\d+)', function (req, res) {
  res.render('bieshu/bs_index', { title: '唯房会 -一家专门做特价房的网站',city_id:req.params.city_id,backproId: 460000});
});

router.get('/areaId/:area_id(\\d+)', function (req, res) {
  res.render('bieshu/bs_index', { title: '唯房会 -一家专门做特价房的网站',area_id:req.params.area_id,backproId: 460000});
});



router.get('/bs_index', function(req, res, next) {
  //获取楼盘数据
  res.render('bieshu/bs_index', { title: '唯房会 -一家专门做特价房的网站',backproId: 460000});
});

module.exports = router;
