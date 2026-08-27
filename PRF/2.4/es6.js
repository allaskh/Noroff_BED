//Create a class Animal with a constructor that sets a name property 
// and a method speak() that returns "<name> makes a noise".
class Animal {
    constructor (name){
        this.name = name;
    }
    speak(){
        return `${this.name} makes a noise`
    }
}
//Create a class Dog that extends Animal. 
// In its constructor, call super(name) and also set a breed property.
class Dog extends Animal{
    constructor (name, breed){
        super(name);
        this.breed = breed;
    }
    fetch () {
        return `${this.name} is fetching the ball`
    }
    speak (){
        return `${this.name} barks`
    }
}
//Add a new method to Dog called fetch() that returns "<name> is fetching the ball".

//Override the speak() method in Dog so it returns "<name> barks".

//Create an instance of Dog and call its speak() and fetch() methods, logging the results.
const myDog = new Dog("Betti", "Flat-coated retriever");
console.log(myDog.fetch());
console.log(myDog.speak());