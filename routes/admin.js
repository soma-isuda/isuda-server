/**
 * Created by Phangji on 10/22/14.
 */

var express = require('express');
var router = express.Router();
var model = require('../models/model');
var adminPage =require('../controllers/adminPage');

router.post('/', function(req, res) {
    var password = req.param('password');
    console.log(password);
    if(password == 'w'){
//        adminPage.getProductInfo(req, res);
        model.productInfo(function (err, result) {
            if(err) console.log(err);
//            console.log({ 'title' : 'haha', 'result' : result });
            res.render('adminPage', { 'title' : 'haha', 'results' : result });
        });
    }else{
        res.redirect('/');
    }
});

router.get('/checkImg', function(req, res) {
    console.log('checkImg');
    var id = req.param('id');
    res.render('adminImage', {'address' : "/pageShots/" + id + ".jpeg"})
});

module.exports = router;

