/**
 * Created by Phangji on 9/17/14.
 */

var async   = require('async'),
    db      = require('../config/database');

exports.now = function (callback){
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = 'select * from productInfo where (      (timediff(now(), productStartTime), providerId)  '
            + ' in   (     SELECT min(timediff(  now(), productStartTime ) ), providerId  from productInfo '
            + '   where timediff(now(), productStartTime) > 0 or timediff(now(), productStartTime) = 0   '
            +'   group by providerId      ) ) order by providerId ';

        conn.query(Query, function(err, result) {
            console.log('now result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.getFirstCategory = function(data, callback){
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = 'SELECT * FROM firstCategory';
        conn.query(Query, data, function(err, result) {
            console.log('getFirstCategory result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.getSecondCategoryAll = function (callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = 'SELECT * FROM secondCategory where id > 0';
        conn.query(Query, function(err, result) {
            console.log('getSecondCategoryAll result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.getSecondCategory = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = 'SELECT * FROM secondCategory where firstId = ?';
        conn.query(Query, [data], function(err, result) {
            console.log('getSecondCategory result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.deleteUser = function (data, callback) {
//    db.pool.acquire(function(err, conn) {
//        if(err) console.error('err', err);
//        var Query = 'DELETE from categoryAlarm where `userId` = (select id from `user` where `phoneNumber` = ?) ; '
//        + ' DELETE from SMSAlarm where `userId` = (select id from `user` where `phoneNumber` = ? ) ; '
//        + ' DELETE FROM user WHERE `phoneNumber` = ? ';
//        conn.query(Query, [data, data, data], function(err, result) {
//            console.log('deleteUser result');
//            callback(err, result);
//        });
//        db.pool.release(conn);
//    });

    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);

            async.waterfall([
                    function(done) {
                        conn.query('DELETE from categoryAlarm where `userId` = (select id from `user` where `phoneNumber` = ?)' , data, function(err, result) {
                            console.log('DELETE categoryAlarm')
                            done(null);
                        });
                    },

                    function(done) {
                        conn.query('DELETE from SMSAlarm where `userId` = (select id from `user` where `phoneNumber` = ? ) ', data, function(err, result) {
                            console.log('DELETE SMSAlarm');
                            done(null);
                        });
                    },

                    function(done) {
                        conn.query('DELETE FROM user WHERE `phoneNumber` = ? ', data, function(err, result) {
                            console.log('DELETE user');
                            done(null, result);
                        });
                    }
                ],
                function(err, result) {
                    callback(err, result);
                });
             db.pool.release(conn);
        });


};

exports.insertCategoryAlarm = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        console.log('data', data);
        var Query = 'insert into categoryAlarm (userId, secondId) values ( (select id from `user` where phoneNumber = ? ), (select id from secondCategory where name = ? and firstId = ? ))';
        conn.query(Query, data, function(err, result) {
            console.log('insertCategoryAlarm result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.deleteSMSAlarms = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        console.log('data', data);
        var Query = 'delete from SMSAlarm where productId = ? and userId = (select id from `user` where phoneNumber = ? )';
        conn.query(Query, data, function(err, result) {
            console.log('deleteSMSAlarms result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};


exports.productInfoById = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = 'SELECT * FROM productInfo WHERE id = ?';
        conn.query(Query, [data], function(err, result) {
            console.log('productInfoById result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.productInfoBySecondId = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = 'SELECT * FROM productInfo WHERE secondId = ? and productStartTime > now() ';
        conn.query(Query, [data], function(err, result) {
            console.log('productInfoBySecondId result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.productInfoByFirstId = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = 'SELECT * FROM productInfo WHERE firstId=? and productStartTime > now()';
        conn.query(Query, [data], function(err, result) {
            console.log('productInfoByFirstId result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};


exports.productInfo = function (callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = 'SELECT * FROM productInfo where productStartTime > now() ';
        conn.query(Query, function(err, result) {
            console.log('productInfo result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};


exports.selectSMSAlarms = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        console.log(data);
        var Query = 'SELECT * from productInfo where id in (SELECT productId from SMSAlarm where userId = (select id from `user` where phoneNumber=? ))';
        conn.query(Query, data, function(err, result) {
            console.log('selectSMSAlarms result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.selectCategoryAlarms = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = 'SELECT * from productInfo where secondId in (SELECT secondId from categoryAlarm where userId = (select id from `user` where phoneNumber= ? ))';
        conn.query(Query, data, function(err, result) {
            console.log('selectCategoryAlarms result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.selectAlarmedCategory = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = 'SELECT s.id secondId, f.id firstId, s.name secondName, f.name firstName  from secondCategory s, firstCategory f where s.firstId = f.id and  s.id in (select secondId from categoryAlarm where userId = (select id from `user` where phoneNumber= ? ))';
        conn.query(Query, data, function(err, result) {
            console.log('selectAlarmedCategory result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.insertProductAlarms = function(data, callback) {
    //var Query = "INSERT SMSAlarm (productId,userId) SELECT '3', (SELECT id FROM user WHERE phoneNumber = '01090897672')";
    //var Query = "INSERT SMSAlarm (productId,userId) SELECT '"+productId+ "', (userId) FROM user WHERE phoneNumber = '"+phoneNumber+"'";

    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = "INSERT SMSAlarm (productId,userId) SELECT ? , (SELECT id FROM user WHERE phoneNumber = ? )";
        conn.query(Query, data, function(err, result) {
            console.log('insertProductAlarms result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.insertUsers = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = "INSERT INTO user ( phoneNumber,characterNum,setAlarm ) SELECT ? ,'0','1' FROM dual WHERE NOT EXISTS (SELECT *  FROM user WHERE  phoneNumber =  ? )";
        conn.query(Query, data, function(err, result) {
            console.log('insertUsers result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.deleteCategoryAlarms = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        console.log('data', data);
        var Query = 'delete from categoryAlarm where secondId = ? and userId = (select id from `user` where phoneNumber = ? )';
        conn.query(Query, data, function(err, result) {
            console.log('deleteCategoryAlarms result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};
