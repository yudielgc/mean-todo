(function () {
    'use strict';

    var express = require('express');
    var router = express.Router();

    //var mongoose = require('mongoose');
    var Todo = require('../models/Todo.js');

    /* GET /todos listing. */
    router.get('/', function(req, res, next) {
        Todo.find(function (err, todos) {
            if (err) return next(err);
            res.json(todos);
        });
    });

    /* GET /todos/id */
    router.get('/:id', function(req, res, next) {
      Todo.findById(req.params.id, function (err, todo) {
        if (err) return next(err);
        res.json(todo);
      });
    });

    /*  POST /todos */
    router.post('/', function (req, res, next) {
        Todo.create(req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    });

    /*  PUT /todos/:id */
    router.put('/:id', function (req, res, next) {
        console.log('req.body', req.body);
        Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            //var kakita = req.body;
            res.json(post);
        });
    });

    /*  DELETE /todos/:id */
    router.delete('/:id', function (req, res, next) {
        Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
            if (err) return next(err);
            res.json(post);
        });
    });

    module.exports = router;

})();