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
        var Query = 'SELECT * FROM secondCategory where firstId = (?)';
        conn.query(Query, [data], function(err, result) {
            console.log('getSecondCategoryAll result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.deleteUser = function (data, callback) {
    db.pool.acquire(function(err, conn) {
        if(err) console.error('err', err);
        var Query =
            'delete from categoryAlarm where userId = (select id from `user` where phoneNumber = (?)) ;'
            + 'delete from SMSAlarm where userId = (select id from `user` where phoneNumber = (?)) ; '
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
        var Query = 'insert into categoryAlarm values( (select id from `user` where phoneNumber =  (?) ), (?) )';

        conn.query(Query, data, function(err, result) {
            console.log('deleteUser result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};