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
export interface Person {
  name: string;
}

export interface Employee {
  employeeId: number;
}

export interface Worker extends Person, Employee {}

export const worker1: Worker = {
  name: "Alice",
  employeeId: 5555,
};

export const worker: Worker = {
  name: "John",
  employeeId: 12345,
};

// Tuple Types
export type Point = [number, number];
export const point: Point = [10, 20];

// Type Aliases for Primitives
export type UserID = number;
export const userId: UserID = 9876;

// Type with method
export type User = {
  id: number;
  name: string;
  getDetails(): string;
};

export const user: User = {
  id: 101,
  name: "Alice",
  getDetails() {
    return `User: ${this.name} (ID: ${this.id})`;
  },
};

// Indexable Type
export type StringArray = {
  [index: number]: string;
};

export const myStrings: StringArray = ["apple", "banana", "cherry"];

// Function Type
export type AddFunc = (a: number, b: number) => number;
export const add: AddFunc = (a, b) => a + b;

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


export const currentStatus: Status = "success";
export const direction: Direction = "up";
