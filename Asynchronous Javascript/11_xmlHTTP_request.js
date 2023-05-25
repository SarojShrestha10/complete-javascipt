const url = 'https://jsonplaceholder.typicode.com/posts';
const xhr = new XMLHttpRequest();

// console.log(xhr.readyState);
xhr.open('GET',url);
// console.log(xhr.readyState);

// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         //console.log(typeof xhr.response);//the file is JSON but we are getting it as a string
//         const data = xhr.response;
//         const convertedData = JSON.parse(data);
//         console.log(typeof convertedData);//type is showing object
//     }
// }
xhr.onload = function(){
    const data = xhr.response;
    const convertedData = JSON.parse(data);
    console.log(convertedData);
}

xhr.send();