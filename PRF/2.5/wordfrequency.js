// Ask the user for a sentence (via prompt()).
let sentence = prompt ("Give me a sentence:");
// Convert it to lowercase and split into words.
sentence = sentence.toLowerCase();
console.log(sentence);
const words = sentence.split(' ');
console.log(words);
// Use a Map to store each word as a key and its frequency as the value.

// Display the result in the console.

const frequency = new Map();
words.forEach(word => {
    frequency.set(word, (frequency.get(word) || 0 )+1);
}
);
console.log(frequency);