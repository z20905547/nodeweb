var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:Id(\\d+)/:newsTitle', function(req, res, next) {
	res.render('news/news', { title:req.params.newsTitle,Id: req.params.Id});
});

router.get('/newslist/:curpage(\\d+)/', function (req, res,next) {
	res.render('news/newslist', { title: '博客首页 | 唯房会官方博客,海南唯房会',curpage: req.params.curpage});
});

router.get('/Aboutus', function (req, res,next) {
	res.render('news/Aboutus', { title: '博客首页 | 唯房会官方博客,海南唯房会',curpage: req.params.curpage});
});
module.exports = router;
