let message = 'please confirm your email email to continue';
// Replace the word 'please' with 'kindly'.
let newMessage = message.replace('please', 'kindly');
console.log(newMessage);
// Notice that the word 'email' appears twice - 
// use replaceAll() to fix that by keeping only one. Hint: You can use ‘email email’ as an argument in replace().
let newMessage2 = newMessage.replace('email email', 'email');
console.log (newMessage2);
// Extract just the word 'continue' using both slice() and substring() (try to match the same result).
console.log(message.slice(-8));
console.log(message.substring(message.length-8));
// Log the cleaned-up message in all capital letters so it stands out in logs.
console.log(newMessage2.toUpperCase());