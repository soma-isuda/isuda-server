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

/* ---------------Category Servelet ==== GET category list--------------- */
exports.getFirstCategory = function (req, res) {

    connection.query('SELECT * FROM firstCategory', function (error, data) {
        res.send(data);
    });
};


exports.getSecondCategory = function (req, res) {
    var firstId = req.params.firstId;
    if (firstId) {
        connection.query('SELECT * FROM secondCategory where firstId = (?)', [firstId],
        function (error, data) {
            res.send(data);
        });
    }
    else {
        connection.query('SELECT * FROM secondCategory', function (error, data) {
            res.send(data);
        });
    }
};
/* ---------------productInfo Servelet ==== GET productInfo--------------- */
exports.getProductInfo = function (req, res) {
    var secondId = req.param('secondId');
    var productId = req.param('productId');
    console.log(productId);
    if (productId) {//id�� ��� ��ǰ������ �����´�.
        var Query = 'SELECT * FROM productInfo WHERE id = ' +productId;
        connection.query(Query, function (error, data) {
            res.send(data);
        })
    }
    else if (secondId) {
        //secondId(�ߺз�)�� ��� ��ǰ������ �����´�.
        var Query = 'SELECT * FROM productInfo WHERE secondId = ' + secondId;
        connection.query(Query, function (error, data) {
            res.send(data);
        })
    }
    
    else {
        var Query = 'SELECT * FROM productInfo';
        connection.query(Query, function (error, data) {
            res.send(data);
        })
    }
};

/* ---------------Alarm Servelet ==== GET alarm Info--------------- */
exports.getAlarms = function (req, res) {
    //userid
    var userId = req.param('userId');
    if (userId) {
        var Query = 'SELECT * FROM SMSAlarm INNER JOIN productInfo on SMSAlarm.productId =  productInfo.id WHERE userId = ' + userId;
        connection.query(Query, function (error, data) {
            res.send(data);
        })
    }
    else {
        var Query = 'SELECT * FROM SMSAlarm INNER JOIN productInfo on SMSAlarm.productId = productInfo.id';
        connection.query(Query, function (error, data) {
            res.send(data);
        })
    }
};

/* ---------------Alarm Servelet ====delete alarm Info--------------- 
exports.delAlarms = function (req, res) {
    var productId = req.param('productId');
    var userId = req.param('userId');
    var Query = 'Delete FROM SMSAlarm where productId = ' + productId + ' AND userId = ' + userId;
    connection.query(Query, function (error, data) {
        res.send(data);
    })
}
*/


/* ---------------Alarm Servelet ====post alarm Info--------------- */
exports.postAlarms = function (req, res) {
    var productId = req.param('productId');
    var userId = req.param('userId');
    var Query = 'INSERT INTO SMSAlarm (productId, userId) VALUES (' + productId + ',' + userId + ')';

};

exports.now = function (req, res) {
    var Query = 'selct * from productInfo where (      (timediff(now(), productStartTime), providerId)  '
        + ' in   (     SELECT min(timediff(  now(), productStartTime ) ), providerId  from productInfo '
        + '   where timediff(now(), productStartTime) > 0 or timediff(now(), productStartTime) = 0   '
        +'   group by providerId      ) )';

    connection.query(Query,
        function (error, data) {
            res.send(data);
        });
};
