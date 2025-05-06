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
