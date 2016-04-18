var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:Id(\\d+)/:newsTitle', function(req, res, next) {
	res.render('news/news', { title:req.params.newsTitle,Id: req.params.Id});
});

module.exports = router;
