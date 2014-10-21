/**
 * Created by Phangji on 10/4/14.
 */
var model = require('../models/model');

exports.getProductInfo = function (req, res) {
    var secondId = req.param('secondId');
    var productId = req.param('productId');
    var firstId = req.param('firstId');
    console.log(productId);

    if (productId) {
        //productId
        model.productInfoById(productId, function (err, result) {
            if(err) console.log(err);
            res.json(result);
        });

    }
    else if (secondId) {
        //secondId
        model.productInfoBySecondId(secondId, function (err, result) {
            if(err) console.log(err);
            res.json(result);
        });
    }
    else if(firstId){
        model.productInfoByFirstId(firstId, function (err, result) {
            if(err) console.log(err);
            res.json(result);
        });
    }

    else {
        model.productInfo(function (err, result) {
            if(err) console.log(err);
            res.json(result);
        });
    }
};

exports.getRecommendedProducts = function (req, res){
    var id = req.param('id');
    model.getRecommendedProducts([id, id], function (err, result) {
        if(err) console.log(err);
        if(result.length != 0)
            res.json(result);
        else{
            model.selectOneRandomProduct(function (err, result) {
                if(err) console.log(err);
                res.json(result);
            });
        }
    });
};