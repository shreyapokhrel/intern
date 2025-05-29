let marks = [93,54,64,53,54,];
 console.log(marks);
 console.log(marks.length);//property

 let heroes = ["ironman" , "thor", "hulk"]
 console.log(heroes);

//loops(for)
let heroes = ["ironman" , "thor", "hulk","spiderman","antman"]
  
 for(let idx=0; idx < heroes.length; idx++){
    console.log(heroes[idx]);
 }
//for of
 for (let el of heroes){
    console.log(el);
 }

let cities =["delhi","pune" ,"mumbai"];
  for (let city of cities){
    console.log(city.toUpperCase());
  }
let marks = [55,33,66,55,99,44,33];
   let sum = 0;
//
for(let val of marks){
    sum += val;
}

let avg = sum / marks.length;
console.log('avg marks of the class = ${avg}');
\\
let items = [250, 645, 300, 344, 233];

 let i = 0;
 for (let val of items) {
    console.log('value at index ${i} = ${val}');
    let offer =val/10;
    items[i] = items[i] - offer;
    console.log('value after offer = ${items[i]}');
    i++;
 }
//
let foodItems =["potato", "apple","tomato"];
foodItems.push("chips", "momo");
 console.log(foodItems);
//
 let foodItems =["potato", "apple","tomato"];
 foodItems.pop();
 console.log(foodItems);
//
let foodItems =["potato", "apple","tomato"];
 console.log(foodItems);
 console.log(foodItems.toString());
 console.log(foodItems);
//
let marvelHeroes = ["ironman" , "thor", "spiderman"];
 let dcHeroes = ["superman","batman"];

 let heroes = marvelHeroes.concat(dcheroes);
 console.log(heroes);
//
let foodItems =["potato", "apple","tomato"];
 foodItems.unshift("chips", "momo");
 console.log(foodItems);
//
let foodItems =["potato", "apple","tomato"];
let val =foodItems.shift();
 console.log("deleted",val);
//
let Heroes = ["ironman" , "thor","superman","batman","spiderman"];
  console.log(Heroes);
  console.log(Heroes.slice(1,3));
//
let arr= [1,2,3,4,5,6,7];
arr.spice(2,3,124,102);
add Element
arr.splice(2,101,0);
Delete Element
arr.splice(3,1);
Replace Element
arr.splice(3,1,101);


