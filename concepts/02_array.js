let numbers =[1,2,3,4,5,6];
let mixed = [12,2,34,'nana','', 'patekar', null, undefined,true];
console.log(numbers,mixed);
let oby ={};
console.log(Array.isArray(mixed),Array.isArray(oby));

// Push, pop and shift, unshift methods
let fruits = ['mangoes', 'cherry', 'grapes'];
console.log(fruits);
fruits.push('banana');
console.log(fruits);
let poppedFruits = fruits.pop();
console.log(fruits);
console.log('The removed element from the Array is',poppedFruits);

let newArray = ['Messi', 'Ronaldo', 'Ibrahimovic'];
console.log(newArray);
newArray.unshift('Lewondoski');
console.log(newArray);
let removed = newArray.shift();
console.log("The first element removed is",removed);

// concatenate or clone array
let array1 = ['item1', 'item2'];
let array2 = array1.slice(0).concat(['item3', 'item4']);
let array3 = [].concat(array1,['item3','item4','item5','item6']);

// spread operator
let array4 = [...array1, 'item3'];
array1.push('item3');
console.log(array1 === array2);
console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

// Array Destructuring
const arr = ['item1', 'item2','item3','item4'];
const [myVar1,myVar2, ...myNewArray] = arr;
console.log("Value of myVar1:",myVar1);
console.log("Value of myVar2:",myVar2);
console.log(myNewArray);


