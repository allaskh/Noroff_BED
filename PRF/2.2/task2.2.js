/* Write a function called formatName that takes two parameters:
name (a string),
formatter (a callback function that formats the string).
It should return the result of calling formatter(name). */
function formatName(name, formatter){
    return formatter(name);
}
//titleCase: capitalizes the first letter, lowers the rest.
const titleCase = name => name[0].toUpperCase() + (name.slice(1)).toLowerCase();
// shout: makes the name uppercase.
const shout = name => name.toUpperCase();
// whisper: makes the name lowercase.
const whisper = name => name.toLowerCase();
//Call formatName with different names and different formatters. Print the results.

console.log(formatName("KATI", titleCase));
console.log(formatName("KATI", whisper));
console.log(formatName("AkSeL", shout));