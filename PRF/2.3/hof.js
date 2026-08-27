const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Keep only numbers greater than 5.
const overFive = numbers.filter(number=> number>5);
console.log("Keeping only numbers over 5:", overFive);

// Double each of those numbers.
const doubleNumbers = numbers.map(number=> number*2);
console.log("Each number doubled: ", doubleNumbers);

// Add them all together.
const sum = numbers.reduce((acc, val)=> {
    return acc + val;
}, 0
);
console.log("Sum of all the numbers: ", sum);