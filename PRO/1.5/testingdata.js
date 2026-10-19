const o1 = new Date();
const o2 = new String();
const o3 = new Number();
const o4 = {};
const testData = (data) => {
        console.log("Number of properties: "+Object.keys(data).length);
        if (Object.keys(data).length === 0 && data.constructor === Object) {
            console.log('Empty Object:');
            return data;
        } else {
            console.log('Not an empty object:');
            return data;
        }
    }
for (data of [o1, o2, o3, o4]){
    testData(data);
}