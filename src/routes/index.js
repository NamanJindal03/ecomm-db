import express from 'express';
import {getAllProducts, getProduct, addProduct} from '../controllers/product.controller.js'
const router =  express.Router()

router.route('/product')
    .post(addProduct)
    .get(getAllProducts)

router.route('/product/:productId')
    .get(getProduct)

export default router;