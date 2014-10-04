/**
 * Created by Phangji on 9/17/14.
 */

var model = require('../models/model');

//전화번호를 통해 사용자 정보를 삭제한다.
exports.deleteUser = function (req, res) {
    var phoneNumber = req.param('phoneNumber');
    model.deleteUser(phoneNumber, function (err, result) {
        res.json({
           result : "success"
        });
    });
};

exports.insertCategoryAlarm = function (req, res) {
    var values = {};
    values.phoneNumber = req.param('phoneNumber');
    values.secondName = req.param('secondName');
    model.insertCategoryAlarm(values, function (err, result) {

        if(err){
            console.log(err);
        }else{
            res.json({
                result : "success"
            });
        }
    });
};
