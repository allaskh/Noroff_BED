// Create a trip object with properties: destination, days, and country.
const trip = {
    destination: "Gran Canaria",
    days: 7,
    country: "Spain",
}
//Use destructuring to extract destination and days into variables, then log them.
const { destination , days } = trip;
console.log(destination);
console.log(days);
//Destructure country but rename it to tripCountry, then log it.
const {country : tripCountry} = trip;
console.log(tripCountry);
//Destructure a cost property with a default value of "Unknown" and log it.
const { cost = "Unknown "} = trip;
console.log(cost);
//Write a function printTrip that takes a destructured object parameter with destination and days, 
// and logs "Trip to <destination> for <days> days" when called with the trip object.
const printTrip = function ({destination, days}){
    console.log(`Trip to ${destination} for ${days} days`);
}
printTrip(trip);
// Bonus: Give destination and days default values in the printTrip function. 
// Then pass different objects to see how it reacts: { destination: "Oslo" } or { days: 10 }
const printTrip2 = function ({destination = "Oslo", days = 10}){
    console.log(`Trip to ${destination} for ${days} days`);
}
printTrip2({destination : "Vienna"});
printTrip2({days : 7});