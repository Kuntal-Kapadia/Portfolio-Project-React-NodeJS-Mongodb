const express = require('express');
const Coursespagesearchresults = require('../models/coursespagesearchresults');
const authenticate = require('../authenticate');
const cors = require('./cors');

const coursespagesearchresultsRouter = express.Router();

coursespagesearchresultsRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Coursespagesearchresults.find(req.query)
    .then(coursespagesearchresults => {
        console.log(res);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(coursespagesearchresults);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported');
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported');
});

module.exports = coursespagesearchresultsRouter;