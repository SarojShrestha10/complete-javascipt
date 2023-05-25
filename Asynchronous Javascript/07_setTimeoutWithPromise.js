// setTimeout && Promise
function myPromise(){
    return new Promise((resolve,reject) => {
        const value = false;
        setTimeout(()=>{
            if(value){
                resolve();
            }else{
                reject();
            }
        },3000);
    });
}
myPromise().then(()=>{
        console.log('Promise Resolved')
    }).catch(()=>{
        console.log('Promise Rejected');
    });