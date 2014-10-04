/**
 * Created by Phangji on 10/4/14.
 */
var model = require('../models/model');

exports.getFirstCategory = function (req, res) {
    model.getFirstCategory(function (err, result) {
        res.send(result);
    });
};


exports.getSecondCategory = function (req, res) {
    var firstId = req.params.firstId;
    if (firstId) {
        model.getSecondCategory(firstId, function (err, result) {
            res.send(result);
        });
    } else {
        model.getSecondCategoryAll(function (err, result) {
            res.send(result);
        });
    }
};