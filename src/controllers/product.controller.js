import Product from "../models/product.model.js";
import { v4 as uuidv4 } from 'uuid';
function getAllProducts(req, res){
    const filters = req.query;
    let allProducts = []
    try{
        allProducts = Product.getAllProducts(filters);
    }
    catch(error){
        return res.status(500).json({status: false, error, message: 'something went wrong'})
    }
    return res.status(200).json({status: true, product: allProducts});
}

function getProduct(){

}

function addProduct(req, res){
    const {name, price, description, quantity} = req.body;
    if(!name || !price || !description || !quantity){
        let missingFields = [];
        if(!name) missingFields.push('name');
        if(!price) missingFields.push('price');
        if(!description) missingFields.push('description');
        if(!quantity) missingFields.push('quantity');
        return res.status(400).json({status: false, error: 'failure in adding the product', message:  `${missingFields.toString(',')} product fields needs to be sent`})
    }
    const id = uuidv4();
    try{
        Product.addProduct(id, name, parseFloat(price), description, parseInt(quantity));
    }
    catch(error){
        return res.status(500).json({status: false, error, message: 'something went wrong'})
    }
    return res.status(200).json({status: true, message: 'Product added succesfully'});

}

export {getAllProducts, getProduct, addProduct}