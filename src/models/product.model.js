export default class Product{
    constructor(id, name, price, rating, description, quantity, creatorId, userRatingCount){
        this.id = id
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.description = description;
        this.quantity = quantity;
        this.creatorId = creatorId;
        this.userRatingCount = userRatingCount;
    }
    static getAllProducts(filters){
        // if(!(filters.minPrice && filters.maxPrice)){
        //     return products;
        // }
        const filterteredProducts = products.filter((entry)=>{
            return (
                (
                (!filters.minPrice || entry.price > parseInt(filters.minPrice)) && 
                (!filters.maxPrice || entry.price < parseInt(filters.maxPrice))   
                )
            )
        })
        return filterteredProducts;
    }
    static addProduct(id, name, price, description, quantity){
        const newProduct = new Product(id, name, price, 0, description, quantity, 123145, 0);
        products.push(newProduct);
    }
}
let products = [
    new Product("1", 'showpiece', 5, 0, 'beautiful', 10, 123145, 0),
    new Product("2", 'showpiece', 200, 0, 'beautiful', 10, 123145, 0),
    new Product("3",'showpiece', 60, 0, 'beautiful', 10, 123145, 0),
    new Product("4", 'showpiece', 70, 0, 'beautiful', 10, 123145, 0),
]