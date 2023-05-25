const allButtons = document.querySelectorAll('.my-button button');
console.log(allButtons);

// for(let button of allButtons){
//     button.addEventListener('click',function(){
//         console.log(this.textContent);
//     });
// }

// for(let i=0; i< allButtons.length;i++){
//     allButtons[i].addEventListener('click', function(){
//         console.log(this.textContent);
//     });
// }
//  allButtons.forEach(function(button){
//     button.addEventListener('click', function(){
//         console.log(this);
//     })
//  });


// using Arrow function
for(let button of allButtons){
    button.addEventListener('click', (event)=>{
        console.log(event.currentTarget.textContent);
    });
}