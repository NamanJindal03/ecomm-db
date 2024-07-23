import express from 'express';
import {getAllProducts, getProduct, addProduct} from '../controllers/product.controller.js'
import { signup, signin, allUsers } from '../controllers/user.controller.js';
const router =  express.Router()

router.route('/product')
    .post(addProduct)
    .get(getAllProducts)

router.route('/product/:productId')
    .get(getProduct)

router.route('/user/signup')
    .post(signup)

router.route('/user/signin')
    .get(signin)

router.route('/user')
    .get(allUsers)

export default router;