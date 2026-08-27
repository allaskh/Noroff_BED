// Write a function declaration called shoutHello that logs "HELLO!".
shoutHello();

function shoutHello(){
    console.log("HELLO!");
}
// Write a function expression called whisperHello that logs "hello...".
const whisperHello = function(){
    console.log("hello...");
}
whisperHello();
// Create a new variable called saySomething. 
// Assign it either shoutHello or whisperHello, and then call saySomething().
let saySomething = shoutHello;
saySomething();
// Change which function is assigned to saySomething and call it again. 
saySomething = whisperHello;
saySomething();