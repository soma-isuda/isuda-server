/**
 * Created by Phangji on 9/17/14.
 */

var usersModel = require('../models/users');

exports.getUserList = function(req, res){
  console.log('getUserList ', req.user);
    var userId = req.user.userId;
    var userName = req.user.name;

    res.json({result: 'success', msg: ''});
};