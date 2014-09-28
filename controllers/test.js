/*
	ISUDA smart homeshopping project
	created by ISUDA, on 09/23/14
*/

/* connect to mysql Database */
var mysql = require('mysql');
var connection = mysql.createConnection({
	user:'root',
	password:'wldus1004'
});
connection.query('USE isuda');


exports.test = function(req, res){
    console.log('test ');

    res.json({'message' : "server ready"});
}

exports.testDB = function(req,res){
	/* get all data from 'testTable' table */
	connection.query('SELECT * FROM testTable',function(error,data){
		res.send(data);
	});
}

/* ---------------Category Servelet ==== GET category list--------------- */
exports.getFirstCategory = function (req, res) {

    connection.query('SELECT * FROM firstCategory', function (error, data) {
        res.send(data);
    });
}
 
exports.getSecondCategory = function (req, res) {
    var firstId = req.params.firstId;
    connection.query('SELECT * FROM secondCategory where firstId = (?)', [firstId],
    function (error, data) {
        res.send(data);
    });
}
 
exports.getSecondCategory = function (req, res) {
    connection.query('SELECT * FROM secondCategory', function (error, data) {
        res.send(data);
    });
}


/* ---------------productInfo Servelet ==== GET productInfo--------------- */
exports.getProductInfo = function (req, res) {
    var id = req.param('id');
    var Query = 'Select * FROM crawlingProductInfo WHERE id = ' + id;
    connection.query(Query, function (error, data) {
        res.send(data);
    })
}

/* ---------------Alarm Servelet ==== GET alarm Info--------------- */
exports.getAlarms = function (req, res) {
    //userid
    var userId = req.param('userId');
    var Query = 'Select * FROM SMSAlarm INNER JOIN crawlingProductInfo on SMSAlarm.productId =  crawlingProductInfo.id WHERE userId = ' + id;
    connection.query(Query, function (error, data) {
        res.send(data);
    })
}
/* ---------------Alarm Servelet ====delete alarm Info--------------- */
exports.delAlarms = function (req, res) {
    var productId = req.param('productId');
    var userId = req.param('userId');
    var Query = 'Delete FROM SMSAlarm where productId = ' + productId + ' AND userId = '+userId;
    connection.query(Query, function (error, data) {
        res.send(data);
    })
}

/* ---------------Alarm Servelet ====post alarm Info--------------- */
exports.postAlarms = function (req, res) {
    var productId = req.param('productId');
    var userId = req.param('userId');
    var Query = 'INSERT INTO SMSAlarm (productId, userId) VALUES (' +productId+','+userId+')';

}

/* ---------------Users Servelet--------------- */
exports.getUsers = function (req, res) {

}

exports.delUsers = function (req, res) {
    //delete user information by id
    var id = req.param('id');
    var query = 'DELETE FROM user WHERE id = '+id;

    connection.query(query,function(error,data){
        response.send(data);
    });
}

exports.putUsers = function (req, res) {

}

exports.postUsers = function (req, res) {
    //get phone number & character number by parameter
    var phoneNumber = req.param('phoneNumber');
    var characterNum = req.param('characterNum');
   
    connection.query('INSERT INTO user (phoneNumber,characterNum,setAlarm) VALUES(?,?,?)', [
        phoneNumber, characterNum, 1//setAlarm's default = 1
    ], function (error, data) {
        response.send(data);
    });
}
