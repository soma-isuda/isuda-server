var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* request Contorller */
var controller = require('../controllers/test');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/test', controller.test);

/* test : nodejs - smart TV */
router.get('/testDB',function(req,res){
	/* get all data from 'testTable' table */
	connection.query('SELECT * FROM imageTest',function(error,data){
		res.send(data);
	});
});

//-------------MAIN---------------
router.get('/now', controller.now);


// ---------------GET category list--------------- 
router.get('/getFirstCategory', controller.getFirstCategory);
router.get('/getSecondCategory/:firstId', controller.getSecondCategory);
router.get('/getSecondCategory', controller.getSecondCategory);

// ---------------GET product Info--------------- 
router.get('/productInfo', controller.getProductInfo);
//example : http://172.16.100.171:3000/productInfo?id=2 //selected information
//example : http://172.16.100.171:3000/productInfo //total information

// ---------------Alarm--------------- 
router.get('/alarms', controller.getAlarms);
//router.del('/alarms', controller.delAlarms);
router.post('/alarms', controller.postAlarms);
/*
// ---------------Users -------------- 
router.get('/users', controller.getUsers);
router.del('/users', controller.delUsers);
router.put('/users', controller.putUsers);
router.post('/users', controller.postUsers);
*/

module.exports = router;
