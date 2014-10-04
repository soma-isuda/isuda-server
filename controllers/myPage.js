/**
 * Created by Phangji on 9/17/14.
 */

var model = require('../models/model');

//전화번호를 통해 사용자 정보를 삭제한다.
exports.delUsers = function (req, res) {
    var phoneNumber = req.param('phoneNumber');
    var Query = "DELETE FROM user WHERE phoneNumber = '" + phoneNumber + "'";
    model.deleteUser(phoneNumber, function (err, result) {
        res.json({
           result : "success"
        });
    });
};
