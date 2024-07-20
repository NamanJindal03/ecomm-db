import Product from "../models/product.model"
function getAllProducts(req, res){
    const allProducts = Product.getAllProducts();
    return res.status(200).json(allProducts);
}

function getProduct(){

}

function addProduct(){

}

export {getAllProducts, getProduct, addProduct}