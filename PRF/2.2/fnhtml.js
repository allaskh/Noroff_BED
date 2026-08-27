//Create two buttons in HTML:
//One with the text Say Hello.
//One with the text Say Goodbye.
/* For the Say Hello button:
Use the onclick attribute in the HTML to call a function named sayHello.
Define sayHello in your JavaScript using a function declaration.
Inside it, log "Hello there!" to the console. */
function sayHello(){
    console.log("Hello there!");
}
/* For the Say Goodbye button:
In your HTML, give it an id of goodbyeBtn, but don’t set onclick.
In JavaScript, use addEventListener to attach a click event handler.
Use a function expression or arrow function to log "Goodbye!" when clicked.
*/
const button = document.getElementById("goodbyeBtn");
button.addEventListener("click", () => {
        console.log("Goodbye!");
    });