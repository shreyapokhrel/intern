export interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email?: string;
}

export const user1: Person = {
  firstName: "Shreya",
  lastName: "Pokhrel",
  age: 21,
};

// Function Interface
export interface AddFunc {
  (a: number, b: number): number;
}

export const add: AddFunc = (x, y) => x + y;

// Indexable Interface
export interface StringArray {
  [index: number]: string;
}

export const names: StringArray = ["Alice", "Bob", "Charlie"];

// Class Interface
export interface Animal {
  name: string;
  makeSound(): string; // changed from void to string
}

export class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    return "Woof!";
  }
}

// Extending Interface
export interface Shape {
  color: string;
}

export interface Circle extends Shape {
  radius: number;
}

export const circle: Circle = {
  color: "blue",
  radius: 10,
};

// Interface with method
export interface User {
  id: number;
  name: string;
  getDetails(): string;
}

export const user2: User = {
  id: 101,
  name: "Alex",
  getDetails() {
    return `User: ${this.name} (ID: ${this.id})`;
  },
};
