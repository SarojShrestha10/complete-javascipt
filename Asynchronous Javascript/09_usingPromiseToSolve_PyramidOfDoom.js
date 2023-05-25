const heading1 = document.querySelector('.heading1');
const heading2 = document.querySelector('.heading2');
const heading3 = document.querySelector('.heading3');
const heading4 = document.querySelector('.heading4');
const heading5 = document.querySelector('.heading5');
const heading6 = document.querySelector('.heading6');
const heading7 = document.querySelector('.heading7');
const heading8 = document.querySelector('.heading8');
const heading9 = document.querySelector('.heading9');
const heading10 = document.querySelector('.heading10');

function changeText(element,text,color,time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject('Element not Found');
            }
        },time);
    });
}
changeText(heading1,'One','red',2000)
    .then(()=> changeText(heading2,'Two','purple',1000))
    .then(()=> changeText(heading3,'Three','green',1000))
    .then(()=> changeText(heading4,'Four','violet',1000))
    .then(()=> changeText(heading5,'Five','blue',1000))
    .then(()=> changeText(heading6,'Six','Yellow',1000))
    .then(()=> changeText(heading7,'Seven','Pink',1000))
    .then(()=> changeText(heading8,'Eight','brown',1000))
    .then(()=> changeText(heading9,'Nine','orange',1000))
    .then(()=> changeText(heading10,'Ten','maroon',1000))
    .catch(error=> alert(error));