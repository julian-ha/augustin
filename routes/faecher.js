var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/mathematik', function(req, res, next) {
  res.render('faecher/mathematik', {
    title: "",
    description: ""
  });
});

router.get('/physik', function(req, res, next) {
  res.render('faecher/physik', {
    title: "",
    description: ""
  });
});


router.get('/englisch', function(req, res, next) {
  res.render('faecher/englisch', {
    title: "",
    description: ""
  });
});


router.get('/deutsch', function(req, res, next) {
  res.render('faecher/deutsch', {
    title: "",
    description: ""
  });
});


router.get('/franzoesisch', function(req, res, next) {
  res.render('faecher/franzoesisch', {
    title: "",
    description: ""
  });
});

router.get('/spanisch', function(req, res, next) {
  res.render('faecher/spanisch', {
    title: "",
    description: ""
  });
});

router.get('/mathematik-im-studium', function(req, res, next) {
  res.render('faecher/mathematikstudium', {
    title: "",
    description: ""
  });
});



module.exports = router;
