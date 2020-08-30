const express = require('express');
const Homepagecarousel = require('../models/homepagecarousel');
const authenticate = require('../authenticate');
const cors = require('./cors');

const homepagecarouselRouter = express.Router();

homepagecarouselRouter.route('/')
.options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
.get(cors.cors, (req, res, next) => {
    Homepagecarousel.find(req.query)
    .then(homepagecarousel => {
        console.log(res);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log(res.json(homepagecarousel));
        res.json(homepagecarousel);
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



module.exports = homepagecarouselRouter;