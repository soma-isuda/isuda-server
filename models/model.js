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
        var Query = 'SELECT * FROM secondCategory';
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
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query =
            'delete from categoryAlarm where userId = (select id from `user` where phoneNumber = ?) ;'
            + 'delete from SMSAlarm where userId = (select id from `user` where phoneNumber = ?) ; '
            + 'DELETE FROM user WHERE phoneNumber = (?)';
        conn.query(Query, [data, data, data], function(err, result) {
            console.log('deleteUser result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.insertCategoryAlarm = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        console.log('data', data);
        var Query = 'insert into categoryAlarm (userId, secondId) values ( (select id from `user` where phoneNumber = ? ), (select id from secondCategory where name = ? ))';
        conn.query(Query, data, function(err, result) {
            console.log('insertCategoryAlarm result');
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
        var Query = 'SELECT * FROM productInfo WHERE secondId = ?';
        conn.query(Query, [data], function(err, result) {
            console.log('productInfoBySecondId result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.productInfo = function (callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = 'SELECT * FROM productInfo';
        conn.query(Query, function(err, result) {
            console.log('productInfo result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};


exports.getSMSAlarms = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = 'SELECT * from productInfo where id = (SELECT productId from SMSAlarm where userId = (select id from `user` where phoneNumber=? ))';
        conn.query(Query, data, function(err, result) {
            console.log('getSMSAlarms result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.getCategoryAlarms = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = 'SELECT * from productInfo where secondId in (SELECT secondId from categoryAlarm where userId = (select id from `user` where phoneNumber= ? ))';
        conn.query(Query, data, function(err, result) {
            console.log('getCategoryAlarms result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.getAlarmedCategory = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = 'SELECT id, firstId from secondCategory where id in (select secondId from categoryAlarm where userId = (select id from `user` where phoneNumber= ? ))';
        conn.query(Query, data, function(err, result) {
            console.log('getCategoryAlarms result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.postAlarms = function(data, callback) {
    //var Query = "INSERT SMSAlarm (productId,userId) SELECT '3', (SELECT id FROM user WHERE phoneNumber = '01090897672')";
    //var Query = "INSERT SMSAlarm (productId,userId) SELECT '"+productId+ "', (userId) FROM user WHERE phoneNumber = '"+phoneNumber+"'";

    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = "INSERT SMSAlarm (productId,userId) SELECT ? , (SELECT id FROM user WHERE phoneNumber = ? )";
        conn.query(Query, data, function(err, result) {
            console.log('postAlarms result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.postUsers = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query = "INSERT INTO user ( phoneNumber,characterNum,setAlarm ) SELECT '?' ,'0','1' FROM dual WHERE NOT EXISTS (SELECT *  FROM user WHERE  phoneNumber =  '?' )";
        conn.query(Query, data, function(err, result) {
            console.log('postUsers result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

