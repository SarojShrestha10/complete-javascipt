// setInterval
// console.log('Script Start');
// setInterval(()=>{
//     console.log(Math.random());
// }, 2000);
// console.log('Script End');


const body = document.body;
const button = document.querySelector('button');

const intervalID = setInterval(()=>{
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const randomColor = `rgb(${red},${green},${blue})`;
    // console.log(randomColor);
    body.style.backgroundColor = randomColor;
},1000);
button.addEventListener('click',()=>{
    clearInterval(intervalID);
    button.textContent = body.style.backgroundColor;
});