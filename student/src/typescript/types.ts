// Union Types
export type Status = "loading" | "success" | "error";

export function showStatus(status: Status): string {
  if (status === "loading") return "Loading...";
  if (status === "success") return "Success!";
  return "Error!";
}

// Literal Types
export type Direction = "up" | "down" | "left" | "right";

// Intersection Types
/* export type Person = { name: string };
export type Employee = { employeeId: number };
export type Worker = Person & Employee; */

// Tuple Types
export type Point = [number, number];

// Type Aliases for Primitives
export type UserID = number;

// Type with method
export type User = {
  id: number;
  name: string;
  getDetails(): string;
};

// Indexable Type
export type StringArray = {
  [index: number]: string;
};

// Function Type
export type AddFunc = (a: number, b: number) => number;

// Recursive type
export type DataValue =
  | string
  | number
  | boolean
  | null
  | DataObject
  | DataList;

export type DataObject = {
  [key: string]: DataValue;
};

export type DataList = DataValue[];
export interface Person {
  name: string;
}

export interface Employee {
  employeeId: number;
}

export interface Worker extends Person, Employee {}

const worker1: Worker = {
  name: "Alice",
  employeeId: 5555,
};

console.log("Worker1:", worker1);
export const userProfile: DataValue = {
  username: "john_doe",
  age: 30,
  hobbies: ["reading", "gaming", "hiking"],
  active: true,
  address: {
    city: "Springfield",
    zipCode: 12345,
  },
};
 const currentStatus: Status = "success";
console.log("Status:", currentStatus);
console.log("showStatus output:", showStatus(currentStatus));

const direction: Direction = "up";
console.log("Direction:", direction);

const worker: Worker = {
  name: "John",
  employeeId: 12345,
};
console.log("Worker:", worker);

const point: Point = [10, 20];
console.log("Point:", point);

const userId: UserID = 9876;
console.log("UserID:", userId);

const user: User = {
  id: 101,
  name: "Alice",
  getDetails() {
    return `User: ${this.name} (ID: ${this.id})`;
  },
};
console.log("User.getDetails():", user.getDetails());
const myStrings: StringArray = ["apple", "banana", "cherry"];
console.log("StringArray:", myStrings);

const add: AddFunc = (a, b) => a + b;
console.log("AddFunc add(5,3):", add(5, 3));
 
