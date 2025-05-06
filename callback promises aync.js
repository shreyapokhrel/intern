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

//then and catch
const getPromise = () =>{ 
    return new Promise ((resolve,reject) => {
    console.log("I am a promise");
   // resolve("success");
    reject("error");
}); 
 }

let promise = getPromise();
promise.then(() => {
      console.log("promise fulfilled");
});
promise.catch(() =>{
    console.log("rejected");
});

//promise chaining
function asyncFunc1(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log("data1");
            resolve("success");
        }, 4000);
    });
}
function asyncFunc2(){
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            console.log("data2");
            resolve("success");
        }, 4000);
    });
}
console.log("fetching data1..");
let p1 = asyncFunc1();
p1.then((res) => {
    console.log("fetching data2..");
let p2 = asyncFunc2();
p2.then((res) => {});
});

//async
async function hello(){
    console.log("hello");
 }
 function getData(dataId) {
    return new Promise ((resolve,reject) => {
    setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
    }, 2000);
});
 }
//await

function hello() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("weather data");
            resolve(200);
        },2000);
    });
}
async function getWeatherData(){
    await hello();
    await hello();
}

    function getData(dataId) {
    return new Promise ((resolve,reject) => {
    setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
    }, 2000);
});
}
///

function getData(dataId) {
    return new Promise ((resolve,reject) => {
    setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
    }, 2000);
});
}
//async-await

async function getAllData(){
    console.log("geeting data1...");
    await getData(1);
    console.log("geeting data2...");
    await getData(2);
    console.log("geeting data3...");
    await getData(3);
    
}
