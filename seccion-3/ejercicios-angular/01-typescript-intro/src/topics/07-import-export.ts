import { Product } from "./06-functions-destructuring";
import { taxCalculation } from "./06-functions-destructuring";
import { TaxCalculationOptions } from "./06-functions-destructuring";

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100
    },
    {
        description:  'iPad',
        price: 150
    }
];



// Solucion 1
const [total, tax] = taxCalculation({  tax: 0.15, products: shoppingCart });

//Solucion 2
//const options:TaxCalculationOptions = {
//    tax: 0.15,
//    products: shoppingCart
//};
//const [total, tax] = taxCalculation(options);


console.log(`1 Total: ${ total}\nTax: ${tax}`);

export {}