var generic_pool = require('generic-pool'),
    mysql = require('mysql');

var db = {};

db.pool = generic_pool.Pool({
    name : 'mysql',
    create : function(callback) {
        var config = {
            host: '172.16.100.171',
            port: '3306',
            user: 'isuda',
            password: 'wldus1004',
            database: ''
        };

        var client = mysql.createConnection(config);
        client.connect(function (err) {
            if (err) console.error('err', err);
            callback(err, client);
        });
    },
    destroy : function(client){
        client.end();
    },
    max : 10,
    min : 2,
    idleTimeoutMills : 30000,   //5분동안 접속을 유지??
    log : false
});

db.process = process.on('exit', function(){
   pool.drain(function(){
     pool.destroyAllNow();
   });
});

module.exports = db;