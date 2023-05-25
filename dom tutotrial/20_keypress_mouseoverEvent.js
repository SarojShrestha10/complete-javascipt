const body = document.body;
body.addEventListener('keypress', (e)=>{
    console.log(e.key);
});

const mainButton = document.querySelector('.btn-headline');
// console.log(mainButton);
mainButton.addEventListener('mouseover',()=>{
    console.log('Mouse Over event Occurred');
});
mainButton.addEventListener('mouseleave',()=>{
    console.log('Mouse leave event Occurred');
});