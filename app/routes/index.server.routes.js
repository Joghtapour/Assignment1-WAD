let express = require('express');
let router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});


module.exports = router;