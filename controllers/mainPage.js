/**
 * Created by Phangji on 10/4/14.
 */

var model = require('../models/model');

exports.now = function (req, res) {
    model.now(function (err, result) {
        if(err) console.log(err);
        res.send(result);
    });
};

exports.getUsersInterestingProducts = function (req, res) {
    var phoneNumber = req.param('phoneNumber');

    //관심 카테고리에 해당하는 상품들를 얻어온다.

    model.selectProductInfoByInterestingCategory([phoneNumber], function (err, result) {
        if(err) console.log(err);
        res.send(result);
    });
};