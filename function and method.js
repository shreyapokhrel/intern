//sum function
function sum(a,b) {
    return a+b;
}
//arrow function
const arrowSum= (a, b) => {
    console.log(a+b);
};
//multiplication function
function mul(a,b) {
    return a*b;
}
//arrow function
const arrowMul= (a,b)=>{
    console.log(a*b);
};
//
function countVowels(str)  {
    let count = 0;
    for (const char of str) {
        if(char =="a" || char =="e" || char =="i" || char=="0" || char=="u"){
count++;
        }
    }
console.log(count);
}
console.log(count);
}
 
let arr =[1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log(val);
});
//call back function
let arr = ["pune","delhi","mumbai"];

arr.forEach((val)=> {
    console.log(val.toUpperCase());
});
//example
let nums = [1,2,3,4,5,6];

nums.forEach((num) => {
    console.log(num*num);
});
//map method
let nums = [37,28,58];

let newArr = nums.map((val)=> {
    return val * val;
});
console.log(newArr);
let calcsquare =(num)=>{
    console.log(num*num);

};
//filter method
let arr = [1,2,3,4,5,6,7,];

let evenArr = arr.filter((val)=> {
    return val %2  !== 0;
});
console.log(evenArr);
// reduced method
let arr = [1,2,3,4];

const output =arr.reduce((res,curr)=> {
    return res + curr;
});
console.log(output);


