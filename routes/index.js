var express = require('express');
var router = express.Router();
var mysql = require('mysql');

/* request Contorller */
var testController = require('../controllers/test');

/* connect to mysql Database */
var connection = mysql.createConnection({
	user:'root',
	password:'wldus1004'
});
connection.query('USE isuda');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/test', testController.test);

/* test : nodejs - smart TV */
router.get('/testDB',function(req,res){
	/* get all data from 'testTable' table */
	connection.query('SELECT * FROM imageTest',function(error,data){
		res.send(data);
	});
});

router.get('/getFristCategory', function(req, res){
	
	connection.query('SELECT * FROM firstCategory', function(error, data){
	res.send(data);
	});
});

router.get('/getSecondCategory/:first', function(req, res){
	var firstidx = req.params.first;
	connection.query('SELECT * FROM secondCategory where firstId = (?)',[firstidx],
	function(error, data){
		res.send(data);
	});
});

router.get('/getSecondCategory', function(req, res){
	connection.query('SELECT * FROM secondCategory', function(error, data){
		res.send(data);
	});
});

router.post('/testDB',function(req,res){
	var number = req.param('number');
	connection.query('INSERT INTO testTable (number) VALUES(?)',[
		number],
		function(error,data){
			res.send(data);
		}
	);	
});

module.exports = router;
