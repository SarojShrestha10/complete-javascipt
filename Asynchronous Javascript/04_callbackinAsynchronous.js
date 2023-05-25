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

// callback hell
// setTimeout(()=>{
//     heading1.textContent = 'One';
//     heading1.style.color = 'violet';
//     setTimeout(()=>{
//         heading2.textContent = 'Two';
//         heading2.style.color = 'purple';
//         setTimeout(()=>{
//             heading3.textContent = 'Three';
//             heading3.style.color = 'red';
//             setTimeout(()=>{
//                 heading4.textContent = 'Four';
//                 heading4.style.color = 'pink';
//                 setTimeout(()=>{
//                     heading5.textContent = 'Five';
//                     heading5.style.color = 'green';
//                     setTimeout(()=>{
//                         heading6.textContent = 'Six';
//                         heading6.style.color = 'blue';
//                         setTimeout(()=>{
//                             heading7.textContent = 'Seven';
//                             heading7.style.color = 'brown';
//                         },1000);
//                     },3000);
//                 },2000);
//             },1000);
//         },2000);
//     },2000);
// },1000);

// Pyramid of Doom
function changeText(element,text,color,time,onSuccessCallback,onFailureCallback){
    setTimeout(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        }else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    },time)
}
changeText(heading1,'One','red',3000,()=>{
    changeText(heading2,'Two','green',1000,()=>{
        changeText(heading3,'Three','Blue',2000,()=>{
            changeText(heading4,'Four','yellow',2000,()=>{
                changeText(heading5,'Five','orange',3000,()=>{
                    changeText(heading6,'Six','violet',1000,()=>{
                        changeText(heading7,'Seven','cyan',3000,()=>{
                            changeText(heading8,'Eight','pink',3000,()=>{
                                changeText(heading9,'Nine','Brown',3000,()=>{
                                    changeText(heading10,'Ten','purple',3000,()=>{
                                    },()=>{console.log('Heading10 does not exist')});
                                },()=>{console.log('Heading9 does not exist')});
                            },()=>{console.log('Heading8 does not exist')});
                        },()=>{console.log('Heading7 does not exist')});
                    },()=>{console.log('Heading6 does not exist')});
                },()=>{console.log('Heading5 does not exist')});    
            },()=>{console.log('Heading4 does not exist')});    
        },()=>{console.log('Heading3 does not exist')});
    },()=>{console.log('Heading2 does not exist')});
},()=>{console.log('Heading1 does not exist')});