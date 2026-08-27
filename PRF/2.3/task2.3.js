// Create an array of numbers from 1 to 20.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//Use .filter() to keep only the even numbers.
const evenNumbers = numbers.filter(number => number%2 === 0);
console.log(evenNumbers);
// Sort those numbers from largest to smallest.
evenNumbers.sort((a,b) => b-a);
console.log(evenNumbers);
// Use .map() to turn each number into a string like "Number: X".
const stringsOfEvenNumbers = evenNumbers.map(number => `Number: ${number}`);

// Log the final array after a 1-second delay using setTimeout().
setTimeout(function () {
    console.log(stringsOfEvenNumbers);
}, 1000);