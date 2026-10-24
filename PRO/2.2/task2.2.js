const TextGenerator = ({ textToAdd }) => {
    var _textToAdd = textToAdd;
    return {
        generateText: x => y => x + _textToAdd + y,
        setTextToAdd: newTextToAdd => _textToAdd = newTextToAdd,
    };
};
const tg = TextGenerator({ textToAdd: '......' });
const fun = tg.generateText("First Text");
console.log(fun("Second Text")); // First Text......Second Text

tg.setTextToAdd("^__^");
console.log(fun("Second Text")); // First Text^__^Second Text