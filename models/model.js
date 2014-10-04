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