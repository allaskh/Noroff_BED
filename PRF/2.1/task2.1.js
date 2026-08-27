let rawName = '  Luna LoveGOOD ';
let rawMessage = 'hello! i need HELP. i repeat, I need HELP!! please respond. ';
//Cleans up the name: trims it and formats it with proper casing (first and last name capitalised).
let trimmedName = rawName.trim();
let nameParts = trimmedName.split(' ');// creates an array
let firstName = nameParts[0];
let lastName = nameParts[1];

let formattedLastName = lastName[0].toUpperCase()+lastName.slice(1).toLowerCase();

console.log(formattedLastName);
let formattedName = `${firstName} ${formattedLastName}`;
console.log(formattedName);
//Replaces all versions of 'HELP' in the message (case-insensitive) with 'assistance'.
let message = rawMessage.trim();
message = message.replaceAll('HELP', 'assistance');
//Capitalises the first letter of the message
message = message[0].toUpperCase()+message.slice(1).toLowerCase();
console.log("Cleaned name:" + formattedName);
console.log("Cleaned message:" + message);
//Checks if the message contains 'please' and ends with a period.
console.log("The message containe please and ends with a period." + message.includes('please')&&message.endsWith('.'));
//Finds and logs the last word in the message
let words = message.split(' ');
let lastWord = words[words.length-1].replace(/[^a-zA-Z]/g, '');
console.log(lastWord);