/* var obj ={
   name: "shreya",
   age: 22
}
var obj2= obj;

//console.log(obj);
//console.log(obj2);


obj2.name = "savya";
console.log(obj);
console.log(obj2);

//real copy

var obj ={
   name: "shreya",
   age: 22
}
var obj2= {...obj};

obj2.name = "savya";
console.log(obj);
console.log(obj2);
 */
//shallow copy

var obj ={
   name :"shreya",
   age : 22,
   social:{
      facebook:{
         ac1: "abc@gmail.com",
         ac2: "abc@gmail.com",
      },
      twitter:{
         free:{
            ac1: "abc@gmail.com"
         },
         paid:{
            ac1: "abc@gmail.com"
         }

         }
      }
   }
   var obj2 ={...obj};

   //console.log(obj);
   //console.log(obj2);

   obj2.social.facebook.ac1 = "changed";
    console.log(obj.social.facebook.ac1);
    console.log(obj2.social.facebook.ac1);
