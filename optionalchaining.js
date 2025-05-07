let student={
    personalData:{
        name:'anil',
        age:23,
        city:'Nodia'
    },
    collegeData:{
        id:10,
        branch:"CS"
    }
}
//console.log(student?.collegeData?.id);

let other ={
   /*  name:()=>{
        return"Anil kumar"
    } */
   //friends:[.{name:'sam'},{name:'peter'}]
}
//console.log(other.name?.());

console.log(other?.friends?.[0]?.name);


