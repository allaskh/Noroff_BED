// Create a literal object magazine with properties title, issue, and editor, 
// plus a describe method that uses this to return all the properties as a string. Log its output.
const magazine = {
    title: "Pere ja Kodu",
    issue: 7,
    editor: "Naine Suurealgustæhega",
    describe: function (){
        return(`Name: ${this.title}, issue: ${this.issue}, editor: ${this.editor}`);
    }
}
magazine.describe();
// Build a constructor function LibraryItem with properties title, author, and year. 
// Add a shared describe method to its prototype. 
// Create two instances and prove the method is shared by logging a comparison.
function LibraryItem (title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}
LibraryItem.prototype.describe = function(){
    return `Title: ${this.title}, author: ${this.author}, year: ${this.year}`;
}
const item1 = new LibraryItem("Twilight", "Stephenie Meyer", 2010);
const item2 = new LibraryItem("Laura Lood", "Francois Bubelaix", 2001);
console.log(item1.describe ===item2.describe);
//Destructure magazine to extract the title property (rename it to magTitle) 
// and the genre property (give it a default value of "General Tech"). Log both values individually.
const {title : magTitle, genre = "General Tech"} = magazine;
console.log(magTitle);
console.log(genre);
// Define a Book class with properties title, author, and year, and a describe method.
class Book {
    constructor (title, author, year){
        this.title = title;
        this.year = year;
        this.author = author;
    }
    describe(){
        return(`The book ${this.title} by ${this.author} was published in ${this.year}`);
    }
}
// Define an EBook class that extends Book, adds a fileSize property, 
// and overrides the describe method to include the file size.
class EBook extends Book{
    constructor (title, author, year, fileSize){
        super(title, author, year);
        this.fileSize = fileSize;
    }
    describe(){
        return(`The ebook ${this.title} by ${this.author} was published in ${this.year}, it takes up ${this.fileSize}`);
    }
}
//Create one magazine, one LibraryItem, one Book, and one EBook, put them into an array, 
// and demonstrate polymorphism by calling describe() on each item in a loop.
const libraryitem1 = new LibraryItem ("One Title", "One Author", 2007);
const book1 = new Book("Title 2", "Author 2", 2009);
const ebook1 = new EBook ("Title of Ebook", "Author of ebook", 1997, "100 kB");

const allTogether = [magazine, libraryitem1, book1, ebook1];
for (const item of allTogether){
    console.log(item.describe());
}