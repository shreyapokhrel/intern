var userinfo ={
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
 function makeDeepCopy(obj){
    if(typeof obj !=='object'|| obj == null){
        return obj;
    }
   var copiedval = Array.isArray(obj) ? [] : {};
   var keys = Object.keys(obj);

   for(var i=0; i<keys.length; i++){
    copiedval[keys[i]] = makeDeepCopy(obj[keys[i]]);
 }
 return copiedval;
    }

    var copy = makeDeepCopy(userinfo);

   copy.social.facebook.ac1 = "changed";

   console.log(userinfo.social.facebook.ac1);
   console.log(copy.social.facebook.ac1);
     

  