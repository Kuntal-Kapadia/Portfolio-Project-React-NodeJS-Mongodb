const express = require('express');
const bodyParser = require('body-parser');
const Favorite = require('../models/favorite');
const authenticate = require('../authenticate');
const cors = require('./cors');

const favoriteRouter = express.Router();
favoriteRouter.use(bodyParser.json());

favoriteRouter
    .route('/')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, authenticate.verifyUser, (req, res, next) => {
        Favorite.find({ user: req.user._id })
            .populate('user')
            .populate('courses')
            .then(favorites => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(favorites);
            })
            .catch(err => next(err));
    })
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorite.findOne({ user: req.user._id })
            .then(favorite => {
                if (favorite) {
                    req.body.forEach(camp => {
                        if (!favorite.courses.includes(camp._id)) {
                            favorite.courses.push(camp._id);
                        }
                    });
                    favorite
                        .save()
                        .then(favorite => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(favorite);
                        })
                        .catch(err => next(err));
                } else {
                    Favorite.create({
                        user: req.user._id,
                        courses: req.body,
                    })
                        .then(favorite => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(favorite);
                        })
                        .catch(err => next(err));
                }
            })
            .catch(err => next(err));
    })
    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
        res.statusCode = 403;
        res.end(`Operation not supported.`);
    })
    .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorite.findOne({ user: req.user._id })
            .then(response => {
                if (response) {
                    response
                        .remove()
                        .then(response => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(response);
                        })
                        .catch(err => next(err));
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(favorite);
                }
            })
            .catch(err => next(err));
    });

favoriteRouter
    .route(':/courseId')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, authenticate.verifyUser, (req, res) => {
        res.statusCode = 403;
        res.end(`Operation not supported.`);
    })
    
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorite.findOne({ user: req.user._id })
            .then(favorite => {
                if (favorite) {
                    if (!favorite.courses.includes(req.params.courseId)) {
                        favorite.courses.push(req.params.courseId);
                        favorite
                            .save()
                            .then(favorite => {
                                res.statusCode = 200;
                                res.setHeader(
                                    'Content-Type',
                                    'application/json'
                                );
                                res.json(favorite);
                            })
                            .catch(err => next(err));
                    } else {
                        res.statusCode = 200;
                        res.setHeader('Content-Type', 'text/plain');
                        res.end('That Course is already a favorite!');
                    }
                } else {
                    Favorite.create({
                        user: req.user._id,
                        courses: [req.params.courseId],
                    })
                        .then(favorite => {
                            res.statusCode = 200;
                            res.setHeader('Content-Type', 'application/json');
                            res.json(favorite);
                        })
                        .catch(err => next(err));
                }
            })
            .catch(err => next(err));
    })
    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
        res.statusCode = 403;
        res.end(`Operation not supported.`);
    })
    .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorite.findOne({ user: req.user._id })
            .then(favorite => {
                if (favorite) {
                    const index = favorite.courses.indexOf(
                        req.params.courseId
                    );
                    if (index >= 0) {
                        favorite.courses.splice(index, 1);
                    }
                    favorite
                        .save()
                        .then(favorite => {
                            Favorite.findById(favorite._id).then(favorite => {
                                res.statusCode = 200;
                                res.setHeader(
                                    'Content-Type',
                                    'application/json'
                                );
                                res.json(favorite);
                            });
                        })
                        .catch(err => next(err));
                } else {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(response);
                }
            })
            .catch(err => next(err));
    });
module.exports = favoriteRouter;