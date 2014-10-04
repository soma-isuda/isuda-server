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
exports.getSMSAlarms = function (req, res) {
    
    var phoneNumber = req.param('phoneNumber');
    var Query = 'SELECT * from productInfo where id = (SELECT productId from SMSAlarm where userId = (select id from `user` where phoneNumber=' + phoneNumber+ '))';
    connection.query(Query,
        function (error, data) {
            res.send(data);
        });

};

exports.getCategoryAlarms = function (req, res) {
    var phoneNumber = req.param('phoneNumber');
    var Query = 'SELECT * from productInfo where secondId = (SELECT secondId from categoryAlarm where userId = (select id from `user` where phoneNumber=' + phoneNumber + '))';
    connection.query(Query,
        function (error, data) {
            res.send(data);
        });
};

/* ---------------Alarm Servelet ====delete alarm Info--------------- 
exports.delAlarms = function (req, res) {
    var productId = req.param('productId');
    var userId = req.param('userId');
    var Query = 'Delete FROM SMSAlarm where productId = ' + productId + ' AND userId = ' + userId;
    connection.query(Query, function (error, data) {
        res.send(data);
    })
}*/


/* ---------------Alarm Servelet ====post alarm Info--------------- */
exports.postAlarms = function (req, res) {
    var productId = req.param('productId');
    var phoneNumber = req.param('phoneNumber');
    //insert into 넣을테이블명 (select * from table_name);
    var Query = "INSERT SMSAlarm (productId,userId) SELECT '" + productId + "', (SELECT id FROM user WHERE phoneNumber = '" + phoneNumber + "')";
    //var Query = "INSERT SMSAlarm (productId,userId) SELECT '3', (SELECT id FROM user WHERE phoneNumber = '01090897672')";
    //var Query = "INSERT SMSAlarm (productId,userId) SELECT '"+productId+ "', (userId) FROM user WHERE phoneNumber = '"+phoneNumber+"'";
    connection.query(Query,
        function (error, data) {
            res.send(data);
        });
};
// ---------------User Servelet ====post user Info--------------- 
exports.postUsers = function (req, res) {
    var phoneNumber = req.param('phoneNumber');
    //전화번호는 디비에서 중복될 수 없다.
    var Query = "INSERT INTO user ( phoneNumber,characterNum,setAlarm ) SELECT '" + phoneNumber + "' ,'0','1' FROM dual WHERE NOT EXISTS (SELECT *  FROM user WHERE  phoneNumber =  '" + phoneNumber + "')";
    connection.query(Query,
           function (error, data) {
               res.send(data);
           });
}
//전화번호를 통해 사용자 정보를 삭제한다.
exports.delUsers = function (req, res) {
    var phoneNumber = req.param('phoneNumber');
    var Query = "DELETE FROM user WHERE phoneNumber = '" + phoneNumber + "'";
    connection.query(Query,
        function (error, data) {
            res.send(data);
        })
}




exports.now = function (req, res) {
    var Query = 'select * from productInfo where (      (timediff(now(), productStartTime), providerId)  '
        + ' in   (     SELECT min(timediff(  now(), productStartTime ) ), providerId  from productInfo '
        + '   where timediff(now(), productStartTime) > 0 or timediff(now(), productStartTime) = 0   '
        +'   group by providerId      ) ) order by providerId ';

    connection.query(Query,
        function (error, data) {
            res.send(data);
        });
};
