const productNames = ["Banana", "apple", "Cherry", "apricot"];
const productPrices = [9.99, 1.5, 4.25, 12.0];

// 1. Alphabetical (A–Z)

productNames.sort((a, b) =>a.localeCompare(b));
console.log("A-Z", productNames);

// 2. Reverse alphabetical (Z–A)
productNames.sort((a, b) =>b.localeCompare(a));
console.log("Z-A", productNames);
 

// 3. Prices: Low → High
productPrices.sort((a, b)=> a-b);
console.log("Prices, sorted low to high: ", productPrices);
 

// 4. Prices: High → Low
productPrices.sort((a, b)=> b-a);
console.log("Prices, sorted high to low: ", productPrices);

// 5. Bonus: Alphabetical, ignoring case
productNames.sort((a,b)=>
    a.localeCompare(b, undefined, { sensitivity: "base"})
);
console.log("A-Z (ignore case):", productNames);