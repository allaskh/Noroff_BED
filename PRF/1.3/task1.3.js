let input;
do {
input = Number(prompt("Please enter a number that is greater than 1: "));
}
while (isNaN(input)|| input <= 1);
document.writeln("You wrote: " + input);
for (let i = 1; i <= input; i++) {
  if (i%3 ==0 && i%5 ===0 ){  
  document.writeln("FizzBuzz");
  } else if(i%3==0){
    document.writeln("Fizz")
  } else if (i%5==0){
    document.writeln("Buzz")
  } else {
    document.writeln(i);
  }
}