->This

const student ={
    fullName : "shreya pokhrel",
    marks: 92.5,
    printMarks: function() {
        console.log("marks =",this.marks);//student.marks
    },
};


//prototype
const employee ={
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun ={
    salary : 50000,
};
 karanArjun._proto_=employee;

//class

class ToyotaCar{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
    setBrand(brand){
        this.brandName =brand;
    }
 }

 let fortuner = new ToyotaCar();
 fortuner.setBrand("fortuner");

//constructor

class ToyotaCar{
    constructor(brand,mileage){
        console.log("creating new object");
        this.brand =brand;
        this.milage =mileage;
    }
    start(){
       console.log("start");
    }
    stop(){
        console.log("stop");
    
      }
    
 }

 let fortuner = new ToyotaCar("fortuner",10);//constructor
 console.log(fortuner);
 let lexus = new ToyotaCar ("lexus",12) ;//constructor
 console.log(lexus);

//inheritance

class person {
    constructor(){
        this.species="homo species";
    }
    eat()
    {
        console.log("eat");
    }
    sleep(){
        console.log("sleep");
    }
 }
 class Engineer extends person {
    work(){
        console.log("solve problems, build something");
    }
 }
 let poojaobj = new Engineer();

