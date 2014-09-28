var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* request Contorller */
var controller = require('../controllers/test');

/* connect to mysql Database */
var connection = mysql.createConnection({
	//user:
	//password:
});
connection.query('USE isuda');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/*
/* ---------------GET category list--------------- */
//router.get('/getFirstCategory', controller.getFirstCategory);
//router.get('/getSecondCategory/:firstId', controller.getSeoncdCategory);
//router.get('/getSecondCategory', controller.getSeoncdCategory);

/* ---------------GET product Info--------------- */
//router.get('/productInfo', controller.getProductInfo);
/* ---------------Alarm--------------- */
//router.get('/alarms', controller.getAlarms);
//router.del('/alarms', controller.delAlarms);
//router.post('/alarms', controller.postAlarms);
/* ---------------Users -------------- */
//router.get('/users', controller.getUsers);
//router.del('/users', controller.delUsers);
//router.put('/users', controller.putUsers);
//router.post('/users', controller.postUsers);

/*for test*/
router.get('/test', controller.test);
router.get('/testDB', controller.testDB);/* test : nodejs - smart TV */

module.exports = router;
