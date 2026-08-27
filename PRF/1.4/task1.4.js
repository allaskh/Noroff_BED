// Initial setup
let pens = [
    ["🐶", "🐶", "🐶"], // Pen 0
    ["🐱", "🐱"],       // Pen 1
    ["🐰"]              // Pen 2
];
/* Task 1
Loop through each pen, and print out a message showing:
the pen number.
how many animals are in the pen.
what animals are in it ( e.g. "Pen 0 has 3 animals: 🐶 🐶 🐶".*/
for (let pen = 0; pen < pens.length; pen++) {
    console.log("Pen " + pen + " has " + pens[pen].length + " animals: " + pens[pen] + " .")
}
// Task 2: A new dog arrives – add it to Pen 0.
pens[0].push("🐶");
console.log(pens[0]);
//Task 3: One of the cats in Pen 1 gets picked up – remove the last animal from Pen 1.
pens[1].pop();
console.log(pens[1]);
/* Task 4
Pen 1 is being expanded to also house the rabbit(s) from Pen 2.
Combine the animals from Pen 2 into Pen 1 using either .concat() or the spread operator.
After this, Pen 2 should be emptied.
*/
pens[1]=[...pens[1], ...pens[2]];
pens[2]=[];
console.log(pens[1]);
console.log(pens[2]);
//Task 5 Loop through the updated pens again and print out the same kind of message as before. 
for (let pen = 0; pen < pens.length; pen++) {
    console.log("Pen " + pen + " has " + pens[pen].length + " animals: " + pens[pen] + " .")
}