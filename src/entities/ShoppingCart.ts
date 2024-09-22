import { Product } from "./Product";

class ShoppingCart{
    totalValue:number = 0;
    items:Product[]=[]

    constructor(){

    }


    addToCart(product:Product){
        this.items.push(product)
        this.totalValue+=product.price
    }




}