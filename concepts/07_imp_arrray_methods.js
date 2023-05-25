// For each
 const numbers = [2,3,4,8,5];
 const myFunction = (number, index) => {
  console.log(`In ${index} index the number is ${number}`);
 }
 numbers.forEach(myFunction);

 const num = [2,3,4,8,5];
 numbers.forEach((number,index)=>{
     console.log(`${number}*2 = `, number*2);
 });

//  Map methods the most important method in Array to learn
const aankha = [4,3,1,6,8,9];
const squareNumber = aankha.map(number => number * number);
console.log(squareNumber);

const users = [
  {userId: 1,userName:'Nana',gender:'male'},
  {userId: 2,userName:'AliG',gender:'male'},
  {userId: 3,userName:'Messi',gender:'male'},
  {userId: 4,userName:'Allah',gender:'male'}
];
const userNames = users.map(user => user.userName);
console.log(userNames);

// Filter Methods
const myArr = [12,2,3,5,66,7,8,90];
const isEven = number => number%2 === 0;
console.log(isEven);

// Reduce Method : it always takes Accumulator and currentValue and initial value also if required as a parameter
const arr =[1,2,3,4,5,10];
const sum = arr.reduce((accumulator,currentValue) => accumulator +currentValue);
console.log(sum);

const addToCart = [
  {itemId : 1, itemName : 'mobile', price : 12000},
  {itemId : 2, itemName : 'laptop', price : 33000},
  {itemId : 3, itemName : 'tv', price : 20000},
];
const totalAmount = addToCart.reduce((totalPrice, currentItem) => totalPrice + currentItem.price,0);
console.log(totalAmount);

//Sort Method
const number = [8,9,12,45,1000,200];
number.sort((a,b) => a-b);
console.log(number);
// a-b --> positive(greater than 0) --> b,a
// a-b --> negative(less than 0) --> a,b 

const usersInfo = [
  {userID :1, userName : 'Nana Patekar', salary: 12000},
  {userID :2, userName : 'AliG Indahouse', salary: 15000},
  {userID :3, userName : 'Allah', salary: 120000000},
  {userID :4, userName : 'Messi', salary: 1690000},
  {userID :5, userName : 'Eminem', salary: 230000},
  {userID :6, userName : 'Raksutra', salary: 4000},
];
const showSalarySort = usersInfo.slice().sort((a,b) => {
  a.salary-b.salary;
});
console.log(showSalarySort);
const salaryHighToLow = usersInfo.slice(0).sort((a,b) => b.salary-a.salary);
console.log(salaryHighToLow);

// Find method
const animals =['Lion', 'Cat', 'Dog', 'Rabbit', 'Rat'];
const answer = animals.find((string) => string.length === 3);
console.log(answer);

// Every Method
const array = [2,4,6,8,10];
const res = array.every(number => number %2 === 0);
console.log(res);

const addtoCart = [
  {itemId : 1, itemName : 'mobile', price : 12000},
  {itemId : 2, itemName : 'laptop', price : 29000},
  {itemId : 3, itemName : 'tv', price : 20000},
];
const checkPrice = addtoCart.every(cartItem => cartItem.price < 30000);
console.log(checkPrice);

// some method
const arrayNumber = [1,2,3,5,7,9];
const doesItContainEven = arrayNumber.some(num => num%2 === 0);
console.log(doesItContainEven);

// Fill Method
// Value, Start, End
const myArray = [1,2,3,4,5,6];
myArray.fill(0,2,5);
console.log(myArray);

// Splice method: To insert or delete item(between, start or end) from the array
// start, delete, insert
const myArrayItem = ['item1','item2','item3'];
const newArray = myArrayItem.splice(1,2,'insertedItem1','insertedItem2');
console.log(newArray);
console.log(myArrayItem);