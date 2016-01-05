var express = require('express');
var router = express.Router();

//var mongoose = require('mongoose');
var Todo = require('../models/Todo.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
    //res.send('todos: respond with a resource');
    Todo.find(function (err, todos) {
        if (err) return next(err);
        res.json(todos);
    });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/*  POST /todos */
router.post('/', function (req, res, next) {
    Todo.create(req.body, function (err, post) {
        if (err) return next(err);
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
