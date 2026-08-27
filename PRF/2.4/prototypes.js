// Create a constructor function Recipe(name, servings) that assigns both to this.
function Recipe (name, servings){
    this.name = name;
    this.servings = servings;
}
//Create two instances: recipeA and recipeB with different values.
const recipeA = new Recipe ("pancakes", 6);
const recipeB = new Recipe ("porridge", 3);
// Add a shared method describe on Recipe.prototype (use a regular function).
Recipe.prototype.describe = function(){
    return `Name: ${this.name}, servings: ${this.servings}`
}
// Call describe() on both instances and log the results.
console.log(recipeA.describe());
console.log(recipeB.describe());
//Show that describe is shared and inherited: log recipeA.describe === recipeB.describe, 
// and use hasOwnProperty (or Object.hasOwn) to show that name is own but describe is not.
console.log(recipeA.describe === recipeB.describe);
console.log(recipeA.hasOwnProperty("name"));
console.log(recipeA.hasOwnProperty("describe"));