export default class Product{
    constructor(name, price, rating, description, quantity, creatorId, userRatingCount){
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.description = description;
        this.quantity = quantity;
        this.creatorId = creatorId;
        this.userRatingCount = userRatingCount;
    }
    static getAllProducts(){
        return products;
    }
}
let products = [
    new Product('showpiece', '100', 0, 'beautiful', 10, 123145, 0),
    new Product('showpiece', '100', 0, 'beautiful', 10, 123145, 0),
    new Product('showpiece', '100', 0, 'beautiful', 10, 123145, 0),
    new Product('showpiece', '100', 0, 'beautiful', 10, 123145, 0),
]