// Create two variables: one with a name, and one with a price (as a string, like '9.5').
let item = "Pack of peas";
let price = "10.5";
// Use a template literal to create a sentence like: The item costs $9.5.
let sentence = `${item} costs NOK ${price}.`
console.log(sentence);
// Pad the price so it’s always at least 6 characters long (e.g., ' 9.5')
let paddedPrice = price.padStart(6);
console.log(paddedPrice);
//Log a string that includes both the name and the padded price, separated by a tab.
console.log(`${item}\t${paddedPrice}`);
//Add a line break and log a message like Thank you!, starting on the next line.
console.log(`\nThank you!`);