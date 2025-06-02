const numbers = [1,2,3];
const duplicated = numbers.flatMap((num) => [num, num]);
console.log(duplicated); 