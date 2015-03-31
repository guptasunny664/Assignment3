var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET about me page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me' });
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects' });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Me' });
});

/* GET terms and conditions page. */
router.get('/terms', function(req, res, next) {
  res.render('index', { title: 'Terms and Conditions' });
});

/* GET privacy policy page. */
router.get('/privacy', function(req, res, next) {
  res.render('index', { title: 'Privacy Policy' });
});


module.exports = router;
