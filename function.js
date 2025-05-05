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
