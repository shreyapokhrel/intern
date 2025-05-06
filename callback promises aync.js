-> async

console.log("one");
console.log("three");
setTimeout(() => {
    console.log("hello");
}, 4000); //timeout;

 console.log("three");
 console.log("four");


//callback

function sum (a,b) {
    console.log(a+b);
}

function calculator(a,b,sumCallback) {
    sumCallback(a,b);
}

calculator(1,2,(a,b) => {
    console.log(a+b);
});
