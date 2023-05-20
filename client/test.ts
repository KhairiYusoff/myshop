// Define a class called 'Person'
class Person {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}.`);
  }
}

// Create an instance of the 'Person' class
const person = new Person("John");

// Call the 'greet' method
person.greet();
