// importar data.json
//importar entities/prduct.ts
//importar entities/product.ts

import { Product } from "./entities/Product";
import data from"../data.json";
import { ShoppingCart } from "./entities/ShoppingCart"

const product1 = new Product("Banana", "Fruta",10,"http://example.com")
const  product2 = new Product("Maçã", "Fruta", 15, "http://example.com")
product1.incrementQuantity()
product2.incrementQuantity();


console.log(ShoppingCart.products)