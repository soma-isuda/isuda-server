/**
 * Created by Phangji on 9/17/14.
 */

var async = require('async'),
    db = require('../config/database');

exports.now = function (callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = 'select * from productInfo where productStartTime >= curdate() and productStartTime < DATE_ADD(now(),INTERVAL 4 HOUR) and  '
        + '(      (timediff(now(), productStartTime), providerId) '
        +   ' in   (     SELECT min(timediff(  now(), productStartTime ) ), providerId  from productInfo '
        + ' where timediff(now(), productStartTime) > 0 or timediff(now(), productStartTime) = 0 '
        + ' group by providerId      ) ) order by providerId' ;

        conn.query(Query, function (err, result) {
            console.log('now result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.nowOne = function (index, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = 'select * from productInfo where productStartTime >= curdate() and productStartTime < curdate()+1 and  '
            + '(      (timediff(now(), productStartTime), providerId)  '
            + ' in   (     SELECT min(timediff(  now(), productStartTime ) ), providerId  from productInfo '
            + '   where timediff(now(), productStartTime) > 0 or timediff(now(), productStartTime) = 0   '
            + '   group by providerId      ) ) order by providerId ';

        conn.query(Query, function (err, result) {
            console.log('now result');
            callback(err, result[index]);
        });
        db.pool.release(conn);
    });
};

exports.getFirstCategory = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = 'SELECT * FROM firstCategory';
        conn.query(Query, data, function (err, result) {
            console.log('getFirstCategory result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.getProviders = function (callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = 'SELECT * FROM provider';
        conn.query(Query, function (err, result) {
            console.log('getProviders');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.getSecondCategoryAll = function (callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = 'SELECT * FROM secondCategory where id > 0';
        conn.query(Query, function (err, result) {
            console.log('getSecondCategoryAll result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.getSecondCategory = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = 'SELECT * FROM secondCategory where firstId = ?';
        conn.query(Query, [data], function (err, result) {
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

    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);

        async.waterfall([
                function (done) {
                    conn.query('DELETE from categoryAlarm where `userId` = (select id from `user` where `phoneNumber` = ?)', data, function (err, result) {
                        console.log('DELETE categoryAlarm')
                        done(null);
                    });
                },

                function (done) {
                    conn.query('DELETE from SMSAlarm where `userId` = (select id from `user` where `phoneNumber` = ? ) ', data, function (err, result) {
                        console.log('DELETE SMSAlarm');
                        done(null);
                    });
                },

                function (done) {
                    conn.query('DELETE FROM user WHERE `phoneNumber` = ? ', data, function (err, result) {
                        console.log('DELETE user');
                        done(null, result);
                    });
                }
            ],
            function (err, result) {
                callback(err, result);
            });
        db.pool.release(conn);
    });


};

exports.insertCategoryAlarm = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        console.log('data', data);
        var Query = 'insert into categoryAlarm (userId, secondId) values ( (select id from `user` where phoneNumber = ? ), (select id from secondCategory where name = ? and firstId = ? ))';
        conn.query(Query, data, function (err, result) {
            console.log('insertCategoryAlarm result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.insertISUDAData = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = 'insert into productISUDA (productName, productPrice, manufacturerName, productPgURL, productPgImgURL, productImgURL, playURL, productLongImgURL) values (?, ?, ?, ?, ?, ?, ?, ?)';
        conn.query(Query, data, function (err, result) {
            console.log('insertISUDAData result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.deleteSMSAlarms = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        console.log('data', data);
        var Query = 'delete from SMSAlarm where productId = ? and userId = (select id from `user` where phoneNumber = ? )';
        conn.query(Query, data, function (err, result) {
            console.log('deleteSMSAlarms result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};


exports.productInfoById = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = 'SELECT * FROM productInfo WHERE id = ?';
        conn.query(Query, [data], function (err, result) {
            console.log('productInfoById result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.productInfoBySecondId = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = 'SELECT * FROM productInfo WHERE secondId = ? and productStartTime > now() ';
        conn.query(Query, [data], function (err, result) {
            console.log('productInfoBySecondId result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.productInfoByFirstId = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = 'SELECT * FROM productInfo WHERE firstId=? and productStartTime > now()';
        conn.query(Query, [data], function (err, result) {
            console.log('productInfoByFirstId result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};


exports.productInfo = function (callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = 'SELECT * FROM productInfo where productStartTime > now() order by productStartTime ';
        conn.query(Query, function (err, result) {
            console.log('productInfo result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};


exports.selectSMSAlarms = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        console.log(data);
        var Query = 'SELECT * from productInfo where id in (SELECT productId from SMSAlarm where userId = (select id from `user` where phoneNumber=? ))';
        conn.query(Query, data, function (err, result) {
            console.log('selectSMSAlarms result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.selectCategoryAlarms = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = 'SELECT * from productInfo where secondId in (SELECT secondId from categoryAlarm where userId = (select id from `user` where phoneNumber= ? ))';
        conn.query(Query, data, function (err, result) {
            console.log('selectCategoryAlarms result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.selectAlarmedCategory = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = 'SELECT s.id secondId, f.id firstId, s.name secondName, f.name firstName  from secondCategory s, firstCategory f where s.firstId = f.id and  s.id in (select secondId from categoryAlarm where userId = (select id from `user` where phoneNumber= ? ))';
        conn.query(Query, data, function (err, result) {
            console.log('selectAlarmedCategory result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.insertProductAlarms = function (data, callback) {
    //var Query = "INSERT SMSAlarm (productId,userId) SELECT '3', (SELECT id FROM user WHERE phoneNumber = '01090897672')";
    //var Query = "INSERT SMSAlarm (productId,userId) SELECT '"+productId+ "', (userId) FROM user WHERE phoneNumber = '"+phoneNumber+"'";

    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = "INSERT SMSAlarm (productId,userId) SELECT ? , (SELECT id FROM user WHERE phoneNumber = ? )";
        conn.query(Query, data, function (err, result) {
            console.log('insertProductAlarms result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.insertUsers = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
        var Query = "INSERT INTO user ( phoneNumber,characterNum,setAlarm ) SELECT ? ,'0','1' FROM dual WHERE NOT EXISTS (SELECT *  FROM user WHERE  phoneNumber =  ? )";
        conn.query(Query, data, function (err, result) {
            console.log('insertUsers result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.deleteCategoryAlarms = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.error('err', err);
//        console.log('data', data);
        var Query = 'delete from categoryAlarm where secondId = ? and userId = (select id from `user` where phoneNumber = ? )';
        conn.query(Query, data, function (err, result) {
            console.log('deleteCategoryAlarms result');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.selectProductInfoByInterestingCategory = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.err('err', err);
        var Query = 'select * from productInfo where secondId in (select secondId from categoryAlarm where userId = (select id from `user` where phoneNumber = ?)) and productStartTime > now()  order by rand()  limit 3';
        conn.query(Query, data, function (err, result) {
            console.log('selectProductInfoByInterestingCategory');
            console.log(data);
            callback(err, result);
        }); //예외 : 관심 카테고리 상품의 갯수가 3개보다 적을 때

        db.pool.release(conn);
    });
};

exports.getRecommendedProducts = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.err('err', err);
        var Query = 'select * from productInfo where productEndTime > now() and secondId = (select secondId from productInfo where id = ?) and id != ? order by rand() limit 1';
        conn.query(Query, data, function (err, result) {
            console.log('getRecommendedProducts');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.selectRandomProducts = function (callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.err('err', err);
        var Query = 'select * from productInfo where productStartTime > now() order by rand() limit 3';
        conn.query(Query, function (err, result) {
            console.log('selectRandomProducts');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.selectOneRandomProduct = function (callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.err('err', err);
        var Query = 'select * from productInfo where productStartTime > now() order by rand() limit 1';
        conn.query(Query, function (err, result) {
            console.log('selectOneRandomProduct');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};


exports.selectProductCount = function (data, callback) {
    db.pool.acquire(function (err, conn) {
        if (err) console.err('err', err);
        var Query = 'select count(id) count from productInfo where secondId in (select secondId from categoryAlarm where userId = (select id from `user` where phoneNumber = ?)) and productStartTime > now()';
        conn.query(Query, data, function (err, result) {
            console.log('selectProductCount');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};

exports.selectProductISUDA = function (callback) {
    db.pool.acquire(function (err, conn) {
       if(err) console.err('err', err);
        var Query = 'select * from productISUDA';
        conn.query(Query, function (err, result) {
            console.log('selectProductISUDA');
            callback(err, result);
        });
        db.pool.release(conn);
    });
};
