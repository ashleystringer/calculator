var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.render('driver.html'); 
});

module.exports = router;