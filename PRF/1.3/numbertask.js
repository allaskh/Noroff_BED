 let input = prompt("Give me a number: ");
let number = Number(input);

if(number && number!= 0){
    document.write("Double of your number is: " + (number * 2))
} else if (number === 0){
    document.write("Double of your number is 0.")
}
else{
    document.write("You didn't give a valid number.")
}
  /*  
   let input = prompt("Enter a number: ");
   let num = Number(input);

   if (num){
    console.log("Double:", num * 2);
   } else {
        console.log("Valid nr please.")
    }
        */