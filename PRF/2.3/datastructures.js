// Create a Set called attendees and add "Alex", "Mina", "Jo", "Mina", "Kai".
// Print the set to confirm duplicates are removed.
// Check if "Jo" is attending.
const attendees = new Set (["Alex", "Mina", "Jo", "Mina", "Kai"]);
console.log(attendees);
console.log(attendees.has("Jo"));
/* Create a Map called seating that pairs each attendee’s name with their table number:
"Alex" → 1.
"Mina" → 2.
"Jo" → 1.
"Kai" → 3. */
const tableNumbers = new Map ([["Alex", 1], ["Mina", 2], ["Jo", 1], ["Kai", 3]]);
console.log(tableNumbers);
// The organiser changes Jo’s table to 4. Update the Map.
tableNumbers.set("Jo", 4);
console.log(tableNumbers);
//Loop through the Map and print each person’s name and their table.
for (const [name, table] of tableNumbers){
    console.log(`${name}: table ${table}`);
}