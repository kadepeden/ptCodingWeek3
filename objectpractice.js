//start with the connection
console.log ("Is this thing on?");

//object literals = properties = methods; they are interchangable
//an object is simply a normal variable with many defined properties, or methods
//syntax for an object is 1) declaring the variable 2) setting it equal to the name of the variable 3) curly braces that contain all the methods 4) each method on its own line 5) method gets ":" and a comma after the value before moving the the new line

var dvdPlayer = {
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: "black",
    dvdName: "Mulan",
    printDVDName: function() {
        console.log (this.dvdName);
    }
}

console.log (dvdPlayer.depth);

dvdPlayer.printDVDName ();