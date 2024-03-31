const reviewRouterController = require('../controllers/reviewController.js');

const reviewRouter = require('express').Router();

reviewRouter.post('/addReviews', reviewRouterController.addReviews);
reviewRouter.get('/getAllReview', reviewRouterController.getAllReview);
reviewRouter.get('/getOneReview/:id', reviewRouterController.getOneReview);
reviewRouter.delete('/deleteOneReview/:id', reviewRouterController.deleteOneReview);
reviewRouter.put('/updateOneReview/:id', reviewRouterController.updateReview);

module.exports = reviewRouter;