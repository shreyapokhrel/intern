//spread
const oldArray = [1,2,3,4,5];
const newArray = ["A","B", ...oldArray,6,7,8,9,10];
console.log(newArray); 

//rest

 /* const sum =(a,b,c,d) => a+b+c+d;
console.log(sum(1,2,3,4,5,6,7));
 */
const sum =(...numbers) => {
    let total = 0;
    numbers.forEach((n) => { 
        total +=n;
 });
 console.log(total);
}
sum(1,2,3,4,5,6,7,8,9,10);
