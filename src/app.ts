// importar data.json
//importar entities/prduct.ts
//importar entities/product.ts

import { Product } from "./entities/Product";
import data from"../data.json";
import { ShoppingCart } from "./entities/ShoppingCart"

const product1 = new Product('Banana', "Fruta",10,"http://example.com")
const product2 = new Product('Pera', "Fruta",5,"http://example.com")

const cart = new ShoppingCart()

cart.addToCart(product1)
cart.addToCart(product2)
console.log(cart)
console.log(cart.products.length)
console.log(cart.totalValue)