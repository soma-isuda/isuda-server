/*
	ISUDA smart homeshopping project
	created by ISUDA, on 09/23/14
*/

/* connect to mysql Database */
var mysql = require('mysql');
var connection = mysql.createConnection({
    user: 'root',
    password: 'wldus1004'
});
connection.query('USE isuda');

exports.test = function (req, res) {
    console.log('test ');
    res.json({'message' : "server ready"});
};




