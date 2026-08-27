let log = 'ERROR: Connection lost at 14:23';
//Check if the log contains the word 'ERROR'.
console.log(log.includes("ERROR"));
// Check if the log starts with 'ERROR'
console.log(log.startsWith("ERROR"));
// Check if the log ends with the time '14:23'.
console.log(log.endsWith("14:23"));
// Use .indexOf() to find the position of the word 'lost'.
console.log(log.indexOf("lost"));
// Use a regex to confirm the log contains a time in the format dd:dd (digits, colon, digits).
console.log(/\d{2}:\d{2}/.test(log));
//Extract the time from the log using .match().
let exactTime = log.match(/\d{2}:\d{2}/g);
console.log(exactTime);