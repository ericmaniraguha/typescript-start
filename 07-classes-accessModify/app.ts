interface PersonInterface {
  name: string;
  age: number;
}

class Person implements PersonInterface {
  constructor(public name: string, public age: number) {}

  greet() {
    return `Hello, my name is ${this.name} amd I am ${this.age}.`;
  }
}

let john = new Person('John', 35);
console.log(john.greet90);
