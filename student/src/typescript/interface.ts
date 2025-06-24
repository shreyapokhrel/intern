// Basic interface
 export interface User {
  id: number;
  name: string;
  email: string;
}

// Extending an interface
export interface Admin extends User {
  role: "admin" | "moderator";
  permissions: string[];
}

// Optional properties and readonly
export interface Profile {
  username: string;
  bio?: string; // Optional property
  readonly createdAt: Date; // Readonly property
}

// Interface with a method
export interface Shape {
  color: string;
  area(): number;
}

// Using the interfaces:

export const user1: User = {
  id: 1,
  name: "Shreya Pokhrel",
  email: "shreya@gmail.com",
};

export const admin1: Admin = {
  id: 2,
  name: "Admin User",
  email: "admin@gmail.com",
  role: "admin",
  permissions: ["read", "write", "delete"],
};

export const profile1: Profile = {
  username: "shreya123",
  createdAt: new Date(),
};

// profile1.createdAt = new Date(); 
export const square: Shape = {
  color: "blue",
  area: () => 5 * 5,
};

console.log(user1);
console.log(admin1);
console.log(profile1);
console.log("Square area:", square.area());
