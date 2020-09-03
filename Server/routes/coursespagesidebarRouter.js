const express = require('express');
const Coursespagesidebar = require('../models/coursespagesidebar');
const authenticate = require('../authenticate');
const cors = require('./cors');

const coursespagesidebarRouter = express.Router();

coursespagesidebarRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Coursespagesidebar.find(req.query)
    .then(coursespagesidebar => {
        console.log(res);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(coursespagesidebar);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    Coursespagesidebar.create(req.body)
    .then(sidebar => {
        console.log('Sidebar item created Created ', sidebar);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(sidebar);
    })
    .catch(err => next(err));
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin,(req, res, next) => {
    Coursespagesidebar.deleteMany()
    .then(response => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(response);
    })
    .catch(err => next(err));
});

module.exports = coursespagesidebarRouter;