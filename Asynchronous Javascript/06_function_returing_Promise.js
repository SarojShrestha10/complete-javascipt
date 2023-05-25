// Function returning promise
function ricePromise(){
    const bucket = ['coffee', 'juice', 'rice', 'salt', 'vegetables'];
    return new Promise((resole,reject)=>{
        if(bucket.includes('rice') && bucket.includes('salt') && bucket.includes('vegetables')){
            resole('Fried Rice is Ready');
        }else{
            reject('Not enough ingredients');
        }
    });
}
ricePromise().then((rice)=>{
    console.log(rice);
}).catch((error)=>{
    console.log(error);
});