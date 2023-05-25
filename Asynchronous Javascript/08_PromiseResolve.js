// Promise.resolve()
// Promise chaining


const myPromise = Promise.resolve(10);
myPromise.then((value)=>{
    console.log(value);
});



// then() ===> then method always returns promise[helps in promise chaining]
// Promise Chaining
function myPromiseFunc(){
    return new Promise((resolve, reject)=>{
        resolve('Hookah');
    });
}
myPromiseFunc().then(value=>{
    console.log(value);
    value += 'bar ';
    return value;//this here will return the whole promise
    // internally it is working like this ==> return Promise.resolve(value)
    // If we don't return anything, by default it will return undefined value
}).then(anotherValue=>{
    console.log(anotherValue);
    anotherValue += 'Akshay Kumar';
    return anotherValue;
}).then(thirdValue=>{
    console.log(thirdValue);
});
