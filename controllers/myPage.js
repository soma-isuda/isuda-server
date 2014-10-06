/**
 * Created by Phangji on 9/17/14.
 */

var model = require('../models/model');

function sendResponse(err, result, res){
    if(err) {
        console.log(err);
        res.json({result:"error"});
    } else {
        if(result.affectedRows == 1){
            res.json({result:"success"});
        }else{res.json({result:"error"});}
    }
}

//전화번호를 통해 사용자 정보를 삭제한다.
exports.deleteUser = function (req, res) {
    var phoneNumber = req.param('phoneNumber');

    model.deleteUser([phoneNumber], function (err, result) {
        sendResponse(err, result, res);
    });
};

exports.insertCategoryAlarm = function (req, res) {
    var phoneNumber = req.param('phoneNumber');
    var secondName = req.param('secondName');
    var firstId = req.param('firstId');

    model.insertCategoryAlarm([phoneNumber, secondName, firstId], function (err, result) {
        sendResponse(err, result, res);
    });
};

exports.deleteSMSAlarms = function (req, res) {
    var phoneNumber = req.param('phoneNumber');
    var productId = req.param('productId');

    model.deleteSMSAlarms([productId, phoneNumber], function (err, result) {
        sendResponse(err, result, res);
    });
};

exports.selectSMSAlarms = function (req, res) {
    var phoneNumber = req.param('phoneNumber');
    model.selectSMSAlarms([phoneNumber], function (err, result) {
        if(err) console.log(err);
        else res.json(result);
    });
};

exports.selectCategoryAlarms = function (req, res) {
    var phoneNumber = req.param('phoneNumber');
    model.selectCategoryAlarms([phoneNumber], function (err, result) {
        res.json(result);
    });

};

exports.postAlarms = function (req, res) {
    var productId = req.param('productId');
    var phoneNumber = req.param('phoneNumber');

    model.insertProductAlarms([productId, phoneNumber], function (err, result) {
        sendResponse(err, result, res);
    });
};

exports.insertUsers = function (req, res) {
    var phoneNumber = req.param('phoneNumber');

    model.insertUsers([phoneNumber, phoneNumber], function (err, result) {
        sendResponse(err, result, res);
    });
};

exports.getAlarmedCategory = function (req, res) {
    var phoneNumber = req.param('phoneNumber');

    model.selectAlarmedCategory([phoneNumber], function (err, result) {
        res.json(result);
    });
};

exports.deleteCategoryAlarms = function (req, res) {
    var secondId = req.param('secondId');
    var phoneNumber = req.param('phoneNumber');
    model.deleteCategoryAlarms([secondId, phoneNumber], function (err, result) {
        sendResponse(err, result, res);
    });
};