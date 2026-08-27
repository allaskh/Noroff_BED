// Define a function called greetUser that takes one parameter: name.
//It should log a message like:
//Hello, name!
function greetUser(name){
console.log(`Hello, ${name}!`);
}
// Define a second function called greetManyUsers that takes a rest parameter: ...names.
// Inside greetManyUsers, loop through each name using a for...of loop.
// For each name in the list, call your greetUser function. This shows how one function can call another function as part of its logic.
function greetManyUsers(...names){
    for(let i=0; i< names.length; i++) {
    greetUser(names[i]);
    }
}
greetManyUsers("Villem", "Aksel", "Ellen");
