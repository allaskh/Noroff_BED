//Write a while loop that keeps prompting the user for a positive number, then returns the square of that number in an alert.
let number;
do {
number = Number(prompt ("Please insert a positive number: "));
} while (isNaN(number) || number <=0)
document.write("The square of your number is: " + number ** 2)