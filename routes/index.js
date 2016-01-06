(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res, next) {
      //res.render('index', { title: 'AngularJS and Express' });
      res.render('/public/index.html', { title: 'AngularJS and Express' });
    });

    module.exports = router;

})();