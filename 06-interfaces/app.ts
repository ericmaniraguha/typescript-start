interface PersonInterface {
  name: string;
  age: number;
}

// let mike: PersonInterface = {
//   name: 'Mike',
//   age: 30,
// };

//=============interface in class
class Person implements PersonInterface {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  //method to this class should
  greet() {
    return `Hello, my name is ${this.name} amd I am ${this.age}.`;
  }
}

let john = new Person('John', 35);
console.log(john.greet());
