import { Product } from "./Product";

export class ShoppingCart{
   private  static _totalValue:number = 0;
   private static _products:Product[]=[]

    constructor(){

    }

    static calculateTotal(){
        const total = 0
        for(const product of this._products){
            this._totalValue += product.total;
        }
    }


    static addToCart(product:Product){

        const productInCart = this._products.includes(product);

        if(!productInCart){
            this._products.push(product)
            
        }
        this.calculateTotal()

    }



    static get products(){
        return this._products;
    }

    static get totalValue(){
        return this._totalValue;
    }


}