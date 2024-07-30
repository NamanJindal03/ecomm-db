import express from 'express';
import {getAllProducts, getProduct, addProduct, rateProduct} from '../controllers/product.controller.js'
import { signup, signin, allUsers } from '../controllers/user.controller.js';
import { placeOrder } from '../controllers/order.controller.js';
import { auth, customerCheck } from '../middlewares/auth.js';
const router =  express.Router()

router.route('/product')
    .post(addProduct)
    .get(auth, getAllProducts)

router.route('/product/:productId')
    .get(getProduct)

router.route('/product/:productId/rate')
    .post(auth, rateProduct)

router.route('/user/signup')
    .post(signup)

router.route('/user/signin')
    .get(signin)

router.route('/user')
    .get(allUsers)

router.route('/order/:productId')
    .post(customerCheck, placeOrder)



export default router;