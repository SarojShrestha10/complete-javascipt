// Understanding Callback function

// In synchronous js
// function myFunc(callback){
//     console.log('Doing task 1');
//     callback();
// }
// myFunc(()=>{
//     console.log('Doing task 2 after completing 1');
// })

// 2nd Example
function getNumberAndAdd(number1,number2,callback){
    if(typeof number1 === 'number' && typeof number2 === 'number'){
        callback(number1,number2);
    }else{
        console.log('Wrong Data');
    }
}
// function twoNumber(num1,num2){
//     console.log(num1+num2);
// }
// getNumberAndAdd('4',5,twoNumber);
// getNumberAndAdd(4,5,twoNumber);
getNumberAndAdd(4,5,(n1,n2)=>{
    console.log(n1+n2);
});


