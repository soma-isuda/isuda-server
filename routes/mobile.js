/**
 * Created by Phangji on 10/30/14.
 */
var express = require('express');
var router = express.Router();

module.exports = router;

/*
router.get('/', function(req, res) {
    res.send('<p>mobile page</p>');
});
*/

router.get('/pay', function(req, res) {
    res.render('mobile/pay');
});