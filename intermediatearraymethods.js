//checking to see if things are connected

console.log ("Hello, can you hear me now?");

// practice with map, reduce, and forEach
let names = ["Sam", "Tom", "Eric", "Sally", "Nicholas"];
let lengths = names.map (function(element) {
    return element.length;
})
 console.log (lengths);

 let sum = lengths.reduce (function(accumulator, currentValue) {
    return accumulator + currentValue;
 }, 10)

 console.log (sum);

 names.forEach(function(element) {
     console.log(element);
 })

let evens = names.filter (function(element) {
    return element.length % 2 == 0;
})

console.log (evens);

