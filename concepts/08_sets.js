// Sets are iterables just like string and array
//No indexed based access
// order is not guaranteed
// Unique items only(no duplicates allowed)
const myArray = ['item1','item2','item3'];
const numbers = new Set([1,2,3]);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(myArray);
console.log(numbers);
if(numbers.has(1)){
  console.log('Present');
}else{
  console.log('Not present');
}

const newArr = [1,2,3,4,5,6,12,2,5,6,7,3,2];
const uniqueNumber = new Set(newArr);
console.log(uniqueNumber);