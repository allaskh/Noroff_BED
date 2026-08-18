/*let a = 5;
let b = 7;
let c = 9;
let sum = a + b;
let multiply = b * c;
let subtract = c - a;
let divide = c / b;
console.log(sum);
console.log(multiply);
console.log(subtract);
console.log(divide);
document.writeln(20 % 2 === 0);
*/
/*let result = 10 - 2 * (3 + 4);
console.log (result); //8*/
let age = 20;
let hasTicket = true;
let isStudent = false;
console.log("This person is old enough to enter: " + (age >= 18));
console.log("This person can enter: " + (age>= 18 && hasTicket));
console.log("This person can get a discount: " + (isStudent || age< 25)); //If they get discount
console.log("This person is not a student: " + (!isStudent));
console.log("This person can enter: " + (age >= 18 && (isStudent || hasTicket))); //If they can enter//If they can enter