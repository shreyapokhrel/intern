//export

export const add = (a ,b) => {
    return a+b;
};

//import

import { add } from "./export.js";

const x = 5;
const y = 7;

console.log(add(x,y));
