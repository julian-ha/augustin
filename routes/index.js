var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{ 
    title: 'Express', 
    description: 'Das ist ein test'
  });
});

router.get('/konzept', (req, res, next) => {
  res.render('konzept', {
    title: "",
    description: ""
  });
});

router.get('/lehrer-werden', (req, res, next) => {
  res.render('lehrerwerden', {
    title: "",
    description: ""
  });
});

router.get('/kontakt', (req, res, next) => {
  res.render('kontakt', {
    title: "",
    description: ""
  });
});

router.get('/impressum', (req, res, next) => {
  res.render('impressum', {
    title: "",
    description: ""
  });
});

router.get('/datenschutzerklaerung', (req, res, next) => {
  res.render('datenschutzerklaerung', {
    title: "",
    description: ""
  });
});
module.exports = router;
