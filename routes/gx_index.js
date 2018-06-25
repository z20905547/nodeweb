var express = require('express');
var router = express.Router();

router.get("/gx_index", function(req, res, next) {
  //获取楼盘数据
  res.render('gx_index', { title: '唯房会 -一家专门做特价房的网站',backproId: 450000});
});
router.get("/yn_index", function(req, res, next) {
  //获取楼盘数据
  res.render('yn_index', { title: '唯房会 -一家专门做特价房的网站',backproId: 530000});
});


/* GET home page. */
router.get('/', function(req, res, next) {
	//获取楼盘数据
  res.render('index', { title: '唯房会 -一家专门做特价房的网站',backproId: 460000});
});

router.post('/findListBybname', function (req, res) {
  res.render('index', { title: '唯房会 -一家专门做特价房的网站',buildings_name:req.body.buildings_name,backproId: 460000});

});
router.get('/cityId/:city_id(\\d+)', function (req, res) {
  res.render('index', { title: '唯房会 -一家专门做特价房的网站',city_id:req.params.city_id,backproId: 460000});
});

router.get('/areaId/:area_id(\\d+)', function (req, res) {
  res.render('index', { title: '唯房会 -一家专门做特价房的网站',area_id:req.params.area_id,backproId: 460000});
});
/* 网站地图 */
router.get('/sitemap.html', function (req, res) {
  res.render('sitemap', { title: '唯房会 -一家专门做特价房的网站'});
});
router.get('/sitemap.xml', function (req, res) {
  res.render('sitemapx', { title: '唯房会 -一家专门做特价房的网站'});
});
/* 蜘蛛协议 */
router.get('/robots.txt', function (req, res) {
  res.render('robots', { title: '唯房会 -一家专门做特价房的网站'});
});
/* 腾讯 */
router.get('/MP_verify_73xR4lSkHHYEQoPv.txt', function (req, res) {
  res.render('MP_verify_73xR4lSkHHYEQoPv', { title: '唯房会 -一家专门做特价房的网站'});
});
module.exports = router;
