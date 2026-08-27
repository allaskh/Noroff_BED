//Create an album object using literal syntax with title and artist properties.
const album = {
    title: "Cool album",
    artist: "Cool artist"
}
//Create a constructor function Album(title, artist) that assigns both to this, 
function Album (title, artist){
    this.title = title;
    this.artist = artist;
}
// then create an instance called myAlbum using new.
const myAlbum = new Album ("Kati album", "Kati");

//Add a method summary to myAlbum that returns a string using this.title and this.artist, 
// and log its result.
myAlbum.summary = function () {
    return `Title: ${this.title}, artist: ${this.artist}`;
}

console.log(myAlbum.summary());

//Add a new property (e.g., year) to myAlbum after creation and log it.
myAlbum.year = 2026;
console.log(myAlbum.year);
//Add a property to the constructor function itself (Album.defaultFormat = "digital") 
// and show that myAlbum.defaultFormat is undefined.
Album.defaultFormat = "digital";
console.log(Album.defaultformat);