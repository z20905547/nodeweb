var express = require('express');
var router = express.Router();

router.get('/demand', function (req, res) {
    res.render('demand/demand', { title: '购房需求 | 海南唯房会'});
});

router.post('/demandsub', function (req, res) {
    res.render('demand/demand', { title: '购房需求 | 海南唯房会',customer_name:req.body.customer_name,customer_num: req.body.customer_num,other_Req: req.body.other_Req,city: req.body.city,housetype: req.body.housetype,huxing: req.body.huxing,mianji: req.body.mianji,yusuan: req.body.yusuan,zhuangxiu: req.body.zhuangxiu,fujiaxuqiu: req.body.fujiaxuqiu,ordertype: req.body.ordertype});
});
module.exports = router;
