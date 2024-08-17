
import { Db } from "../db.js";

export default class ProductRepository{
    async addProduct(product){
        const productCollection= Db().collection("product")
        await productCollection.insertOne(product)
        // products.push(newProduct);
    }
    async getAllProducts(filters){
        // if(!(filters.minPrice && filters.maxPrice)){
        //     return products;
        // }
        const productCollection= Db().collection("product")
        const filter = {}
        // if(filters.minPrice){
        //     filter.price = {$gte: parseInt(filters.minPrice)}
        // }
        // if(filters.maxPrice){
        //     filter.price = {$lte: parseInt(filters.maxPrice)}
        // }
        // //eradicate this
        // if(filters.maxPrice && filters.minPrice){
        //     filter.price = {$lte: parseInt(filters.maxPrice), $gte: parseInt(filters.minPrice)}
        // }

        //?
        if(filters.minPrice){
            filter.price = filter.price || {}
            filter.price.$gte = parseInt(filters.minPrice)
        }
        if(filters.maxPrice){
            filter.price = filter.price || {}
            filter.price.$lte = parseInt(filters.maxPrice)
        }
        return await productCollection.find(filter).toArray()
        // const filterteredProducts = products.filter((entry)=>{
        //     return (
        //         (
        //         (!filters.minPrice || entry.price > parseInt(filters.minPrice)) && 
        //         (!filters.maxPrice || entry.price < parseInt(filters.maxPrice))   
        //         )
        //     )
        // })
        // return filterteredProducts;
    }
}