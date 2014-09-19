/**
 * Created by Phangji on 9/17/14.
 */
var express = require('express');
var router = express.Router();

/* GET alarm listing. */
router.get('/alarms', function(req, res) {
    res.json({'result' : 'alarms'});

});

module.exports = router;