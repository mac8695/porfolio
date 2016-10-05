var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page */
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Home'});
});

/* GET about page */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About'});
});

/* GET projects page */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects'});
});

/* GET about page */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact me'});
});

module.exports = router;
