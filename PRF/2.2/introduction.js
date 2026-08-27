/* Create a function called getValidNumber.
Move all the input logic into the function.
Make the function return the valid number.
Call the function and log the result to the console.
*/

function getValidNumber (){
    let input = prompt("Enter a number:");
    let number = Number(input);

    while (isNaN(number)) {
   input = prompt("That’s not a number. Try again:");
   number = Number(input);
    }
return number;
}

const userNumber = getValidNumber();
document.write("You entered: ", userNumber);