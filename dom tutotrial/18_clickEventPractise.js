// const btnOne = document.querySelector('#one');
// const body = document.querySelector('body');
// // console.log(body);
// btnOne.addEventListener('click', ()=>{
//     btnOne.style.backgroundColor= 'silver';
//     body.style.backgroundColor = 'yellow';
// });
const allButtons = document.querySelectorAll('.my-button button');
// console.log(allButtons);
allButtons.forEach(button => {
    button.addEventListener('click', (e)=>{
        // console.log(e.target);
        e.target.style.color = '#333';
        e.target.style.backgroundColor= 'yellow';
    });
});