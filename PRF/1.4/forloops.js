let pets = ["dog", "cat", "parrot", "hamster"];
for (let i=0; i < pets.length; i++ ){
    console.log("Pet" + (i+1)  +  ": " + pets[i]);
}
for(const pet of pets){
    console.log("I wish I had a " + pet + ".");
}