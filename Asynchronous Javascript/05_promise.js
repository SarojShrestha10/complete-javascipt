// Promise
const bucket = ['coffee', 'juice', 'rice', 'salt', 'vegetables'];

// Here we produced the promise or created the promise
const myFriedRicePromise = new Promise((resole,reject)=>{
    if(bucket.includes('rice') && bucket.includes('salt') && bucket.includes('vegetables')){
        resole('Fried Rice is Ready');
    }else{
        reject('Not enough ingredients');
    }
});
// console.log(myFriedRicePromise);
// After that now we have to consume it
// consuming is really important
myFriedRicePromise.then((myFriedRice)=>{
        console.log(myFriedRice);
    }).catch((error)=>{
        console.log(error);
});