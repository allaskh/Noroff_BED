let input = prompt("Enter a number: ");

let message = isNaN(Number(input))
? "Oops, that doesn't look like a number."
: "Thanks, that's a valid number."
document.write(message);