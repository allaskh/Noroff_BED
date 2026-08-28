//Store contacts as objects (name, phone, email) in an array.
function Contact(name, phone, email){
    this.name = name;
    this.phone = phone;
    this.email = email;
}
const contact1 = new Contact ("Kati", "53311145", "kati@gmail.com");
const contact2 = new Contact ("Aksel", "56295166", "aksel@gmail.com");
const contacts = [contact1, contact2];
//Add a function to add new contacts.
function addContact(name, phone, email){
    const newContact = new Contact(name, phone, email);
    contacts.push(newContact);
}
addContact ("Villem", "56345688", "villem@gmail.com");
addContact ("Ellen", "53890133", "ellen@gmail.com");
console.log(contacts);
console.log(contacts[3]);
// Add a function to search contacts by name using .filter().
function searchContact (givenName){
    const results = contacts.filter(contact => contact.name === givenName);
        if(results.length > 0){
         console.log("This person is in the contacts.")
        } else {
        console.log("This person is not in the contacts.")
    }
}
searchContact("Villem");
searchContact("Elizabeth");
//Use .map() to return just the names of all contacts.
const contactNames = contacts.map(contact => contact.name);
console.log(contactNames);
//Store the contacts in a Map keyed by name for quick lookup//.
const contactsMap = new Map(
    contacts.map(contact => [
        contact.name,
        {
            phone: contact.phone,
            email: contact.email
        }
    ])
);
console.log(contactsMap);
console.log(contactsMap.get("Aksel"));