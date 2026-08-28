// Task 1:Create a function sayHello that takes a name and returns "Hello, {name}!".
function sayHello (name){
    return(`Hello, ${name}!`);
}
console.log(sayHello("Kati"));
// Task 2: 1. Write a function multiply that has two parameters 
// with default values (e.g. 1), and returns their product.
function multiply (a = 2, b =3 ){
    return(a * b);
}
console.log(multiply());
console.log(multiply(7, 9));
const multiply2 = (c = 4, d= 5)=>{return c *d}
console.log(multiply2());
console.log(multiply2(7,9));
//Task 3: 2. Given numbers = [1, 2, 3, 4, 5], use .map() 
// to create a new array where each number is doubled.
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(number=> number*2);
console.log(doubleNumbers);
//Task 4: 1. Given an array of strings, filter out any that have fewer than 5 characters.
const names = ["Joe", "Elizabeth", "Kati", "Columbus Chrisostomus", "Villem Alder", "Bepi"];
const longNames = names.filter(name => name.length >= 5);
console.log(longNames);
//Task 5: 2. Create a Map of 3 products with their prices. 
// Retrieve the price for one of them and log it.
// Convert a Map into an array of [key, value] pairs.
const shop = new Map ();
shop.set("bananas", 50);
shop.set("apples", 40);
shop.set("chocolate", 90);
console.log(shop);
console.log(shop.get("chocolate"));
const shopArray = [...shop.entries()];
console.log(shopArray);
console.log(shopArray[1]);