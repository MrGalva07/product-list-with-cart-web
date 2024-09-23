import { Product } from "./Product";

export class ShoppingCart{
   private _totalValue:number = 0;
   private _products:Product[]=[]

    constructor(){

    }


    addToCart(product:Product){
        const productInCart = this._products.includes(product);

        if(!productInCart){
            this._products.push(product)
        }
       
        this._totalValue+=product.price
    }



    get products(){
        return this._products;
    }

    get totalValue(){
        return this._totalValue;
    }


}