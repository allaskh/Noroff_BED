const priceArray = [800, 200, 100, 300, 700];
// You need to sum all the prices and return the total price of all products.
//Log the total price to the console.
const value = priceArray.reduce((acc, val)=>{
    return acc + val;
},0);
console.log(value);