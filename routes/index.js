var express = require('express');
var router = express.Router();
var exports = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


exports.contact = function(req, res){
  res.render('contact', { title: 'Mahesh Chavan - Contact', page: 'contact' })
};

module.exports = router;
