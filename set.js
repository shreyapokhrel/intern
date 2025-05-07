const mySet = new Set();
console.log('The set looks like:', mySet);

mySet.add('this');
mySet.add('My name');
mySet.add('that');
mySet.add('34');
mySet.add('true');
mySet.add('false');
console.log('The set looks like this now:',mySet);

let mySet2 = new Set([1, 43, 'this',false,{a:1,b:3}]);
console.log('New set:',mySet2);

console.log(mySet.size)
