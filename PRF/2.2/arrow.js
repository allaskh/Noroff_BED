/* Write a function called performOnEach that:
Takes two parameters:
An array of numbers.
A function to apply to each number.
Loops over the array.
Applies the function to each value.
Returns a new array with the results. */

function performOnEach (numbers, operation){
    const result = [];

    for(let i=0; i<numbers.length; i++){
        result.push(operation(numbers[i]));
    }
    return result;
}
const double = num => num * 2;
const half = num => num / 2;
const square = num => num ** 2;
const tenTimes = num => num * 10;

let numbers = [5, 7, 9];

console.log(performOnEach(numbers, double));
console.log(performOnEach(numbers, half));
console.log(performOnEach(numbers, square));
console.log(performOnEach(numbers, tenTimes));