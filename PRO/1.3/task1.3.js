const jsonObject = {
    "name": "John",
    "age": 30,
    "car": null
}
console.log(JSON.stringify(jsonObject));
let xmlData = json2xml(jsonObject);
console.log(xmlData);