let name = prompt("What's your name?");
alert("Hei " + name + "!");
let answer1 = prompt("What is 3 + 2?");

console.log("You answered: " + answer1);
console.log("The type of your answer is: " + typeof(answer1));
answer1 = Number(answer1);
console.log("Your answer is " + (answer1 === 5)); 

let answer2 = prompt("What is 6 * 4?");

console.log("You answered: " + answer2);
console.log("The type of your answer is: " + typeof(answer2));
answer2 = Number(answer2);
console.log("Your answer is " + (answer2 === 24)); 