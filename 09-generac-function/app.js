"use strict";
const inputName = document.querySelector('#name');
//Typecast  as HTMLInputElement;
const inputAge = document.querySelector('#age');
const inputForm = document.querySelector('form');
const greeting = document.querySelector('.greeting');
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} amd I am ${this.age}.`;
    }
}
inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerHTML = person.greet();
    inputForm.reset();
});
