const express = require('express');
const Coursespage = require('../models/coursespage');
const authenticate = require('../authenticate');
const cors = require('./cors');

const coursespageRouter = express.Router();

coursespageRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Coursespage.findOne(req.query)
    .then(coursespage => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(coursespage);
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

module.exports = coursespageRouter;