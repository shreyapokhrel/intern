
// Object Interface
export interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email?: string; 
}

const user1: Person = {
  firstName: "Shreya",
  lastName: "Pokhrel",
  age: 21,
};
console.log("User1:", user1);
// Function Interface
export interface AddFunc {
  (a: number, b: number): number;
}

const add: AddFunc = (x, y) => x + y;
console.log("Add function:", add(5, 3)); 

// Indexable Interface
interface StringArray {
  [index: number]: string;
}

const names: StringArray = ["Alice", "Bob", "Charlie"];
console.log("Indexable:", names[1]); 

// Class Interface
export interface Animal {
  name: string;
  makeSound(): void;
}

class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    console.log("Woof!");
  }
}

const dog = new Dog("Buddy");
dog.makeSound(); 

// Extending Interface
export interface Shape {
  color: string;
}

interface Circle extends Shape {
  radius: number;
}

const circle: Circle = {
  color: "blue",
  radius: 10,
};

console.log("Circle:", circle);

//  Interface with method
export interface User {
  id: number;
  name: string;
  getDetails(): string;
}

const user2: User = {
  id: 101,
  name: "Alex",
  getDetails() {
    return `User: ${this.name} (ID: ${this.id})`;
  },
};

console.log(user2.getDetails());
