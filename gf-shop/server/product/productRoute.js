var productRouter = require('express').Router();
var productController = require('./productController');



productRouter.route('/prod')
.get(productController.retrieve)
.post(productController.createOne)
productRouter.route('/user/login').post(productController.login)
productRouter.route('/user/signup').post(productController.signup)
productRouter.route('/:User').get(productController.retrieveOneUser)
productRouter.route('/:id')
.get(productController.retrieveOne)
.put(productController.updateOne)
.delete(productController.deleteOne)

module.exports = productRouter;