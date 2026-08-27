// Write a script that creates an object to represent a phone.
//Give it two properties: a brand and a battery level (number from 0 to 100).
const phone = {
    brand: "iPhone",
    batteryLevel: 75,
    batteryUp: function (){
        this.batteryLevel+= 10;
        if (this.batteryLevel >= 100) {
            console.log("Battery full!");
        } else {
            console.log("Battery: " , this.batteryLevel);
        }
    }
}
//Add a method that increases the battery level by 10 and logs the new battery level.

// //Log the phone’s brand using dot notation.
console.log(phone.brand);
//Call the method twice using bracket notation.
console.log(phone["brand"]);
//Update the method so that it logs "Battery full!" if the battery level reaches 100 or more, 
// otherwise logs the new battery level.
// Call the updated method until "Battery full!" is displayed.
phone.batteryUp();
phone.batteryUp();
phone.batteryUp();
