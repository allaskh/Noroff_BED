console.log("Start");

setTimeout(function () {
    console.log("First timeout");
}, 800);
//runs after 800ms
const id = setInterval(function () {
    console.log("Tick");
}, 500);
//runs every 500 ms
setTimeout(function () {
    console.log("Stop");
    clearInterval(id);
}, 1600);
//stops tick after 1600 ms
console.log("End");
/*
predict the order and timing of each message in the console. Start, End, tick, first to, tick, tick, stop
Which lines run right away? start, end
How many Tick messages appear before Stop runs? 3
Why does First timeout appear where it does? because 800>500
*/