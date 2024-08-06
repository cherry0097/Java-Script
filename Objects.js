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



