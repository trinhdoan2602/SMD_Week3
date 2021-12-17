var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HomePage' });
});

/* GET dashboard page. */
router.get('/dashboard', function(req, res, next) {
  res.render('pages/dashboard/index', { pageTitle: 'Dashboard Page' });
});

/* GET items page. */
router.get('/items', function(req, res, next) {
  res.render('items', { title: 'Items Page' });
});

module.exports = router;
