var express = require('express');
var router = express.Router();

/* request Contorller */
var testController = require('../controllers/test');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/test', testController.test);

module.exports = router;
