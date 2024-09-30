import { Product } from "./Product";

export class ShoppingCart{
   private  static _totalValue:number = 0;
   private static _products:Product[]=[]
   private static _totalQuantity:number = 0

    constructor(){

    }

    static calculateTotal(){

        this._totalValue = 0
        this._totalQuantity = 0
        const total = 0
        for(const product of this._products){
            this._totalValue += product.total;
            this._totalQuantity += product.quantity
        }

    }


    static addToCart(product:Product){

        const productInCart = this._products.includes(product);

        if(!productInCart){
            this._products.push(product)
            
        }
        this.calculateTotal()

    }


    static removeProduct(product:Product){
        this._products = this._products.filter((item) => item.id!==product.id )
        this.calculateTotal()

    }



    static get products(){
        return this._products;
    }

    

    static get totalValue(){
        return this._totalValue;
    }


}