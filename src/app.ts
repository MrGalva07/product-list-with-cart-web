// importar data.json
//importar entities/prduct.ts
//importar entities/product.ts

import { Product } from "./entities/Product";
import data from"../data.json";
import { ShoppingCart } from "./entities/ShoppingCart"


for (const product of data) {
        new Product(
            product.name,
            product.category,
            product.price,
            product.image.desktop
).toHTML()
}