let temperature = 12;
let isRaining = true;
let hasJacket = false;

if (temperature < 5) {
    document.writeln("It's freezing!")
} else if (temperature < 15) {
    if (hasJacket){
    document.writeln("You'll be fine with your jacket.")
    } else {
    document.writeln("Better grab a jacket!")
    }
}

if (isRaining && !hasJacket){
    document.writeln("And don't forget an umbrella!")
} else if (!isRaining && temperature >= 15){
    document.writeln("Looks like a nice day")
}