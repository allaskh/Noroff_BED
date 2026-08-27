let coldDrinks = ["Coke", "Fanta"]
let hotDrinks = ["Tea", "Coffee"];
let allDrinks = [...coldDrinks, ...hotDrinks];
console.log(allDrinks);
//Task 2
let favourites = (allDrinks.slice(1,3))
console.log(favourites);
console.log(allDrinks);

//Task 3
let snacks = ["Chips", "Popcorn", "Nuts" ];
snacks.splice(2, 0, "Fruit");
console.log(snacks);

//Task 4
let desserts = ["Cake", "Pie", "Ice Cream", "Brownie"];
console.log(desserts.splice(1,2));
console.log(desserts);

//Task 5
let mains = ["Burger", "Pizza", "Pasta"];
mains.splice(1,1, "Salad", "Soup");
console.log(mains);