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
//Get product's list from first category 
exports.getCategory = function (req, res) {
    var first = req.param('first');
    var second = req.param('second');

    if ((first != null) && (second == null)) {//If there is a first category
        Query = 'Select * FROM ProductInfo INNER JOIN crawlingProductInfo on ProductInfo.id = crawlingProductInfo.id WHERE firstId=' + first;
        connection.query(Query, function (error, data) {
            res.send(data);
        });
    }
    else if ((first !== null) && (second !== null)) {//if there is a second category
        Query = 'Select * FROM ProductInfo INNER JOIN crawlingProductInfo on ProductInfo.id = crawlingProductInfo.id WHERE firstId=' + first + 'AND secondId=' + second;
        connection.query(Query, function (error, data) {
            res.send(data);
        });
    } else {//error
        console.log('Parameter Error');
    }
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
    var id = req.param('id');
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

/* ---------------Users Servelet--------------- */
exports.getUsers = function (req, res) {

}

exports.delUsers = function (req, res) {

}

exports.putUsers = function (req, res) {

}

exports.postUsers = function (req, res) {

}