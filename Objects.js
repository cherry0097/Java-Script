const person1 = {
    firstName: {
        name1: "Ratul",
        name2: "Pal"
    },
    lastName: "Pal",
    id: 5566,
    fullName: function() {
      return this.firstName.name2 + " " + this.lastName;
    }
  };

console.log(person1.fullName());

// Create an Object
const person = {
    name: "Ratul",
    age: 26,
    city: "Bengaluru"
  };
  
// Create an Array
const myArray = Object.values(person);
console.log(myArray);

// Create a text
let text = "";
for (let [key, value] of Object.entries(person)) {
  text += key + ": " + value + ", ";
}
console.log(text);

function bikeDetails(name, cc, price, cylinder) {
    this.Name = name;
    this.CC = cc;
    this.Price = price;
    this.Cylinder = cylinder;
  }
const RE = new bikeDetails("Royal Enfild", 350, 50, "Single");

let RE_Arr = Object.entries(RE)
console.log(RE_Arr);

/* What is "this"?
In an object method, this refers to the object.
Alone and in a function this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
*/


