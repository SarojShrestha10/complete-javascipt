const URL = 'https://jsonplaceholder.typicode.com/posts';
const xhr = new XMLHttpRequest();
xhr.open('GET', URL);
xhr.onload = ()=>{
    if(xhr.status >=200 && xhr.status <300 ){
        const convertedData = JSON.parse(xhr.response);
        console.log(convertedData);
        
        const id = convertedData[3].id;
        const xhr2 = new XMLHttpRequest;    
        const URL2 = `${URL}/${id}`;
        console.log(URL2);
        xhr2.open('GET',URL2);
        xhr2.onload = ()=>{
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();
    }else{
        console.log('something went wrong');
    }
}
xhr.onerror = ()=>{//for any network error internet disconnected 
    console.log('Network Error');
}
xhr.send();