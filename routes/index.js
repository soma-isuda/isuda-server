var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* request Contorller */
var controller = require('../controllers/test');
var mainPage = require('../controllers/mainPage');
var schedulePage = require('../controllers/schedulePage');

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
router.get('/now', mainPage.now);


// ---------------GET category list--------------- 
router.get('/getFirstCategory', schedulePage.getFirstCategory);
router.get('/getSecondCategory/:firstId', schedulePage.getSecondCategory);
router.get('/getSecondCategory', schedulePage.getSecondCategory);

// ---------------GET product Info--------------- 
router.get('/productInfo', controller.getProductInfo);
//example : http://172.16.100.171:3000/productInfo?id=2 //selected information
//example : http://172.16.100.171:3000/productInfo //total information

// ---------------Alarm--------------- 
router.get('/sAlarms', controller.getSMSAlarms);
router.get('/cAlarms',controller.getCategoryAlarms);
//router.del('/alarms', controller.delAlarms);
router.post('/alarms', controller.postAlarms);
/*
// ---------------Users -------------- 
router.get('/users', controller.getUsers);

router.put('/users', controller.putUsers);
*/
router.post('/user', controller.postUsers);
router.delete('/user', controller.delUsers);

module.exports = router;
