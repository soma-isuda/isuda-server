/**
 * Created by Phangji on 10/4/14.
 */

var model = require('../models/model');

exports.now = function (req, res, productEndTime) {
    var providerNum = req.param('providerNum');
    productEndTime ++;
    if(providerNum){
        model.nowOne(Number(providerNum), function (err, result) {
           if(err) console.log(err);
            res.send(result);
        });
    }else{
        model.now(function (err, result) {
            if (err) console.log(err);
            res.send(result);

        });
    }
};

exports.getUsersInterestingProducts = function (req, res) {
    var phoneNumber = req.param('phoneNumber');

    if (phoneNumber) {
        model.selectProductCount([phoneNumber], function (err, result) {
            if (err) console.log(err);
            var cnt = result[0].count;
            if (cnt < 3) {  // 예외 : 갯수가 미달인 경우
//                var resultArr = new Array();
//                for(var i=0; i<cnt; i++){
//                    model.selectOneRandomProduct(function (err, result) {
//                        if (err) console.log(err);
//                        resultArr.push(result);
//                    });
//                }
                model.selectRandomProducts(function (err, result) {
                    if (err) console.log(err);
                    res.send(result);
                });

            } else {
                model.selectProductInfoByInterestingCategory([phoneNumber], function (err, result) {
                    if (err) console.log(err);
                    res.send(result);
                });
            }
        });

    } else {  // 예외 : 클라이언트에서 폰넘버가 없을 때
        model.selectRandomProducts(function (err, result) {
            if (err) console.log(err);
            res.send(result);
        });
    }
};