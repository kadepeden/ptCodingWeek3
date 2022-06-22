// arrays are 0 base indexed
// declare an array just like a var
// arrays can be helpful for storing multiple answers to the same questions
// an example of this is "customer names"
// square backets [] tell the reader that they are encountering an array
// "push" sends a data point into an array
// console.logging out the name of the array and the position will give you the element in that position

var customerNames = [];
customerNames.push ("Sam Smith");
customerNames.push ("Tommy Guns");

console.log (customerNames[0]);
console.log (customerNames[1]);

for (var i = 0; i < customerNames.length; i++) {
    console.log (customerNames [i]);
}

for (name of customerNames) {
    console.log(name);
}