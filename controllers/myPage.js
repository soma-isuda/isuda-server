/**
 * Created by Phangji on 9/17/14.
 */

var model = require('../models/model');


//전화번호를 통해 사용자 정보를 삭제한다.
exports.deleteUser = function (req, res) {
    var phoneNumber = req.param('phoneNumber');
    model.deleteUser(phoneNumber, function (err, result) {
        if(err){
            console.log(err);
        }else{
            res.json({
                result : "success"
            });
        }
    });
};

exports.insertCategoryAlarm = function (req, res) {
    var phoneNumber = req.param('phoneNumber');
    var secondName = req.param('secondName');
    var firstId = req.param('firstId');

    model.insertCategoryAlarm([phoneNumber, secondName, firstId], function (err, result) {
        if(err){
            console.log(err);
        }else{
            res.json({
                result : "success"
            });
        }
    });
};

exports.deleteSMSAlarms = function (req, res) {
    var phoneNumber = req.param('phoneNumber');
    var productId = req.param('productId');

    model.deleteSMSAlarms([productId, phoneNumber], function (err, result) {
       if(err) console.log(err);
       else res.json({result:"success"});
    });
};

exports.getSMSAlarms = function (req, res) {
    var phoneNumber = req.param('phoneNumber');
    model.getSMSAlarms([phoneNumber], function (err, result) {
        if(err) console.log(err);
        else res.json(result);
    });
};

exports.getCategoryAlarms = function (req, res) {
    var phoneNumber = req.param('phoneNumber');
    model.getCategoryAlarms([phoneNumber], function (err, result) {
        res.json(result);
    });

};

exports.postAlarms = function (req, res) {
    var productId = req.param('productId');
    var phoneNumber = req.param('phoneNumber');

    model.postAlarms([productId, phoneNumber], function (err, result) {
        res.json(result);
    });
};

exports.postUsers = function (req, res) {
    var phoneNumber = req.param('phoneNumber');

    model.postUsers([phoneNumber, phoneNumber], function (err, result) {
        res.json(result);
    });
};

exports.getAlarmedCategory = function (req, res) {
    var phoneNumber = req.param('phoneNumber');

    model.getAlarmedCategory([phoneNumber], function (err, result) {
        res.json(result);
    });
};

exports.deleteCategoryAlarms = function (req, res) {
    var secondId = req.param('secondId');
    var phoneNumber = req.param('phoneNumber');
    model.deleteCategoryAlarms([secondId, phoneNumber], function (err, result) {
        if(err) console.log(err);
        else res.json({result:"success"});
    });
};