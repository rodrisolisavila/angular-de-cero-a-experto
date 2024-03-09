interface Product {
    description: string;
    price: number;
 }
 
 const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
 }
 
 const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
 }
 
 
 interface TaxCalculationOptions {
    tax: number;
    products: Product[];
 }
 
 function taxCalculation( options: TaxCalculationOptions ): number[] {
    let total = 0;
    options.products.forEach( product => {
       const { price } = product;
       total += price;
    });
    return [total, total * options.tax];
 }
 
 const shoppingCart = [phone, tablet];
 const tax = 0.15;
 

 
 const result = taxCalculation({
    products: shoppingCart,
    tax: tax,
 });
 
 //console.log('Total', result[0]);
 //console.log('Tax', result[1]);

 const [productTotal, productTax ] = result;
 console.log(`Total: ${ productTotal }\nTax: ${ productTax }`);


///// Solucion Curso
// const [total, taxTotal] = taxCalculation({
//    products: shoppingCart,
//    tax: tax,
//});
// console.log(`Total: ${ total }\nTax: ${ taxTotal }`);

//function taxCalculation2( options: TaxCalculationOptions ): number[] {
//    let total = 0;
//    options.products.forEach( ({ price }) => {
//       total += price;
//    });
//    return [total, total * options.tax];
//}

//function taxCalculation3( options: TaxCalculationOptions ): number[] {
//    let total = 0;
//    const { tax, products } = options;
//    products.forEach( ({ price }) => {
//       total += price;
//    });
//    return [total, total * tax];
//}

export {}