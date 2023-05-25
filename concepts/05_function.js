// Function Declaration
function singHappyBirthday(){
  console.log('Happy Birthday to you ..........');
}
singHappyBirthday();
singHappyBirthday();
singHappyBirthday();
function sumThreeNumbers(num1,num2,num3){
  return num1 + num2 +num3;
}
const var1 = sumThreeNumbers(13,23,34);
console.log(var1);

//odd or even function
function isEven(number){
  return number % 2 === 0;
}
console.log(isEven(22));

//return first character of any string
function firstChar(anyStr){
  return anyStr[0];
}
console.log(firstChar('Nana'));

// find the target is present in array or not
const myArray = [1,2,3,4,5,6,7,8,9,12,856,243];
function findTarget(arr,target){
  for(let i =0;i<arr.length;i++){
    if(arr[i]===target){
      return "Target is found and is in index "+i;
    }
  }
  return "Not Found";
}
console.log(findTarget(myArray, 9));


// Call Back Function
function myFunc(callback){
  console.log('Hello World!');
  callback();
}
const myFunc2 = () =>{console.log('Inside MyFunc2')};
myFunc(myFunc2);

// Function returning a function
function returnFunc(){
  const hello = () => {
    return "hello nana";
  }
  return hello;
}
const ans = returnFunc();
console.log(ans());