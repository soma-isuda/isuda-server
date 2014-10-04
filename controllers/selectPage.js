/**
 * Created by Phangji on 10/4/14.
 */
var model = require('../models/model');

exports.getProductInfo = function (req, res) {
    var secondId = req.param('secondId');
    var productId = req.param('productId');
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

    else {
        model.productInfo(secondId, function (err, result) {
            if(err) console.log(err);
            res.json(result);
        });
    }
};
