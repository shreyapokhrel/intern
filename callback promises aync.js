-> asynchronous

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

//callback hell

function getData(dataId , getNextdata){
   setTimeout(()=> {
        console.log("data", dataId);
        if (getNextData){
            getNextData();
        }
    }, 2000);
 }
getData(1,() => {
    getData(2);
});

//promises
/resolve 
let promise = new Promise ((resolve,reject) => {
    console.log("I am a promise");
    resolve("success");
});

/reject

let promise = new Promise ((resolve,reject) => {
    console.log("I am a promise");
    reject("some error");
});
//

function getData(dataId, getNextData) {
    return new Promise ((resolve,reject) => {
    setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
        if (getNextData) {
            getNextData();
        }
    }, 5000);
});
}
