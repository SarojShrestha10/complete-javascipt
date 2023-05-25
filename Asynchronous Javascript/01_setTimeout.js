// Synchronous vs Asynchronous
// Javascript is synchronous programming language
// It is single threaded

// setTimeout(callback fuction, time(1000 millisec)) : it returns an id(1,2,3,4,5)
console.log('Script Start');
const id = setTimeout(()=>{
    console.log('inside setTimeout');
},1000);
for(let i=0; i<=100; i++){
    console.log('Allah hu akbar');
}
console.log('The id of setTimeout is',id);
console.log('clearing setTimeout');
clearTimeout(id);
console.log('Script End');