// Write a script that creates an object to represent a book in a library.
// Give it at least three properties: a title, an author, and the number of pages.
const book = {
    title: "Twilight",
    author: "Stephenie Meyer",
    pages: 365,
}
//Log the title using dot notation.
console.log("Title: ", book.title);
// Log the number of pages using bracket notation.
console.log("Pages: ", book["pages"]);
//Update the title to something else and log it again.
book.title = "Body",
console.log("Title: ", book.title);
//Use a for...in loop to log all the property names and their values.
for (let key in book){
    console.log(key, ":" , book[key]);
}