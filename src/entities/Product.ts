import{v4 as uuidv4} from "uuid";
import { ShoppingCart } from "./ShoppingCart";

export class Product {
    private _idProduct: string = uuidv4();
    private _name: string;
    private _price: number;
    private _category: string;
    private  _imageUrl: string;
    private _quantity: number = 0;
    private _total: number = 0;


    constructor(

        name: string,
        category:string,
    
        price: number,
        imageUrl:string
    ) {
       
        this._name = name
        this._category = category;
        this._price = price
        this._imageUrl = imageUrl;
        



    }

    calculateTotal(){
        this._total = this._price * this._quantity;

    }

    incrementQuantity(){
        this._quantity ++
        this.calculateTotal();
        ShoppingCart.addToCart(this)
    }

    decrementQuantity(){
        this._quantity--
        this.calculateTotal();
    }

    get total(){
        return this._total;
    }

    get price(){


     return this._price
    }

    





}