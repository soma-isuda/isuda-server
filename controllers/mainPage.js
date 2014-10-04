/**
 * Created by Phangji on 10/4/14.
 */

var model = require('../models/model');

exports.now = function (req, res) {
    model.now(function (err, result) {
        res.send(result);
    });
};