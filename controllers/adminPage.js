/**
 * Created by Phangji on 10/22/14.
 */
var model = require('../models/model');

exports.getProductInfo = function (req, res) {
    model.productInfo(function (err, result) {
        if(err) console.log(err);
        console.log(result);
        res.render('adminPage', result);
    });
};