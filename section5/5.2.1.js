// create an object literal
const animal = {
  name: "bunbun",
  age: 4,
  greet() {
    return `${this.name} is a good boy`;
  }
}
// include a method that uses "this"

// create a function in the global scope that prints "this"
function logGreet {
console.log(animal.greet());
}
