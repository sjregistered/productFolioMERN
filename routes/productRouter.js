const productRouteController = require('../controllers/productController.js');

const router = require('express').Router();

router.post('/addProduct', productRouteController.addProduct);
router.get('/getAllProducts', productRouteController.getAllProduct)
router.get('/getPublishedProducts', productRouteController.publishedProduct)
router.get('/getOne/:id', productRouteController.getOneProduct)
router.put('/updateOne/:id', productRouteController.updateProduct)
router.delete('/deleteById/:id', productRouteController.deleteProduct)
router.get('/getProductReviews/:id', productRouteController.getProductReview)


module.exports = router;