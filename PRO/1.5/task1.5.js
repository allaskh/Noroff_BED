const person = {
    firstName: "John",
    lastName: "Doe"
};
alert("The last name is: "+ person.lastName);

const people = {
    firstPerson: {
        firstName: "Kelly",
        lastName: "Kapoor"
    },
    secondPerson: {
        firstName: "Michael",
        lastName: "Scott"
    }
}
const person2 = {
    name: "John",
    surname: "Doe",
    age: 50
}
alert("The person's name is: "+ person2.name+", their suname is: "+person2.surname+" and their age is: "+person2.age+".");

class books {
    constructor (
        title,
        releaseYear,
        author
    ){
        this.title = title;
        this.releaseYear = releaseYear;
        this.author = author;
    }
    cast(){
        return alert("Avada Kedavra!")
    }
};
function books2(
    title,
        releaseYear,
        author
){
        this.title = title;
        this.releaseYear = releaseYear;
        this.author = author;
        this.cast2=function(){
            return alert("Avada Kedavra!");
        }
};
const obj = {
    title: "Harry Potter",
    releaseYear: 1997,
    author: "J.K. Rowling"
};
const serialized = JSON.stringify(obj, null, 5);
console.log (serialized);
const deserialized = JSON.parse(serialized);
console.log(deserialized);


