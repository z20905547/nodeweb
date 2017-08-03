var express = require('express');
var router = express.Router();

router.get('/jinrong', function (req, res) {
    res.render('jinrong/jinrong', { title: '购房需求 | 海南唯房会'});
});


module.exports = router;
