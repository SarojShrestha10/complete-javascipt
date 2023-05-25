// Function Expression
const singBirthdaySong = function(){
  console.log("Happy Birthday to you...............");
}
singBirthdaySong();

// Arrow function
const isEven = num => num % 2 === 0;
console.log(isEven(234));

const firstChar = anyStr => anyStr[0];
console.log(firstChar('AliG').toLowerCase());

//function inside a function
function app(){
  const myFunc = () => {
    console.log('Hello from the other side');
  }
  const addTwoNumbers = (num1,num2) => num1+num2;
  const mul = (num1,num2) => num1*num2;
  console.log('inside app');
  myFunc();
  console.log('Addition of Two numbers is',addTwoNumbers(15,20));
  console.log('Multiplication of two numbers is',mul(12,2));
}
app();

// lexical Scope
const myVar = "value1";
function myApp(){

  const myFunc= ()=>{

    const myFunc2=()=>{
      
      console.log('Inside myFunc2', myVar);
    }
    myFunc2();

  }

  myFunc();

}
myApp();

// Default Parameters
const addNum = (a,b)=>{
  if(b === undefined){
    b=1;
  }
  return a+b;
}
const ans = addNum(9);
console.log(ans);
const addN = (n1,n2=1) => {
  return n1+n2;
}
const outcome = addN(-10);
console.log(outcome);

//Rest Parameters
const restParaFunc = (a,b, ...c) =>{
  console.log(`a is ${a}`);
  console.log(`b is ${b}`);
  console.log(`c is ${c}`);
}
restParaFunc(2,3,4,5,6,7,8,9,0);

function addAll(...numbers){
  let total = 0;
  for(let number of numbers){
      total += number;
  }
  return total;
}
const answer = addAll(1,2,3,4,5,6,7,8,9,0);
console.log('The Sum of all the given numbers is',answer);

//Parameter Destructuring
const person = {
  firstName : "Nana",
  gender : 'Male'
}
const getDetails = ({firstName : fname}, {gender : sex}) => {
  console.log(fname);
  console.log(sex);
}