const express = require('express');
const Onlinepagecards = require('../models/onlinepagecards');
const authenticate = require('../authenticate');
const cors = require('./cors');

const onlinepagecardsRouter = express.Router();

onlinepagecardsRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Onlinepagecards.find(req.query)
    .then(onlinepagecards => {
        console.log(res);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(onlinepagecards);
    })
    .catch(err => next(err));
})
.post(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /partners');
})
.put(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partners');
})
.delete(cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
    res.statusCode = 403;
    res.end('DELETE operation not supported on /partners');
});

module.exports = onlinepagecardsRouter;