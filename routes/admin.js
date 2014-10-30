/**
 * Created by Phangji on 10/22/14.
 */

var express = require('express');
var router = express.Router();

var model = require('../models/model');
var fs = require('fs');
var async = require('async');

router.get('/', function (req, res) {
    res.render('admin/login');
});
router.post('/', function (req, res) {
    var password = req.param('password');
    fs.readFile( __dirname.replace('/routes', '/asset') + '/key/passwd', function (err, data) {
        if(err) throw err;

        if (password == data.toString()) {
//        req.session.auth = true;
            model.productInfo(function (err, result) {
                if (err) console.log(err);
                res.render('admin/article/mngProviderData', { 'title': '홈쇼핑 편성표 관리', 'results': result });
            });
        } else {
            res.redirect('/admin');
        }

    });

});

router.post('/mngProviderData', function (req, res) {
    model.productInfo(function (err, result) {
        if (err) console.log(err);
        res.render('admin/article/mngProviderData', { 'title': '홈쇼핑 편성표 관리', 'results': result });
    });
});

router.get('/checkImg', function (req, res) {
    var id = req.param('id');
    res.render('admin/checkImg', {'address': "/pageShots/" + id + ".jpeg"});
});

router.post('/mngISUDAData', function (req, res) {
    res.render('admin/article/mngISUDAData', { 'title': 'ISUDA 편성표 관리'});
});

router.post('/insertISUDAData', function (req, res) {
    console.log('body', req.body);
    console.log('files', req.files);

    var productName = req.body.productName;
    var productPrice = req.body.productPrice;
    var productPgURL = req.body.productPgURL;
    var manufacturerName = req.body.manufacturerName;
    var productImg = req.files.productImg;
    var productPgImg = req.files.productPgImg;
    var productImgURL = null, productPgImgURL = null;

    if (productImg) {
        async.waterfall([
                function (done) {
                    productImgURL =  Date.now() + '.' + productImg.extension;
                    fs.rename(productImg.path, '../static/pdImg/' + productImgURL, function (err) {
                        if (err) throw err;
                        done(null);

                    });
                },
                function (done) {
                    if(productPgImg){
                        productPgImgURL =  Date.now() + '.' + productPgImg.extension;
                        fs.rename(productPgImg.path, '../static/pdPgShots/' + productPgImgURL, function (err) {
                            if (err) throw err;
                            done(null);
                        });
                    }else
                        done(null);
                }
            ],
            function (err, result) {
//                console.log(productPgImg.path, productImg.path);
                model.insertISUDAData([productName, productPrice, manufacturerName, productPgURL, productPgImgURL, productImgURL ], function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send("데이터베이스 에러");

                    } else {
                        if (result.affectedRows == 1) {   //success
                            res.render('admin/article/mngISUDAData', { 'title': '입력 성공. 계속하세요.'});
                        } else {
                            res.send("데이터베이스 에러");
                        }
                    }
                });


            });

    } else {
        res.send('대표이미지는 반드시 업로드해야합니다.');
    }


});

router.post('/mngProvider', function (req, res) {
    res.render('admin/article/mngProvider', { 'title': 'Provider 관리'});
});

router.post('/mngUsers', function (req, res) {
    res.render('admin/article/mngUsers', { 'title': '회원 관리'});
});

router.post('/exeCrawling', function (req, res) {
    res.render('admin/article/exeCrawling', { 'title': '크롤링'});
});


module.exports = router;

