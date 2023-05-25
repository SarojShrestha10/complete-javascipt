console.log('Hello World!');
const body = document.body;
const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

//Event Capturing
child.addEventListener('click', ()=>{
    console.log('Capturing!!! on Child');
}, true);
parent.addEventListener('click', ()=>{
    console.log('Capturing!!! on Parent');
}, true);
grandparent.addEventListener('click', ()=>{
    console.log('Capturing!!! on Grandparent');
}, true);
body.addEventListener('click', ()=>{
    console.log('Capturing!!! on Body');
}, true);

// Event Bubbling
child.addEventListener('click', ()=>{
    console.log('Bubbling on Child');
});
parent.addEventListener('click', ()=>{
    console.log('Bubbling on Parent');
});
grandparent.addEventListener('click', ()=>{
    console.log('Bubbling on Grandparent');
});
body.addEventListener('click', ()=>{
    console.log('Bubbling on Body');
});

// Event Delegation
grandparent.addEventListener('click', (e)=>{
    console.log(e.target);
});