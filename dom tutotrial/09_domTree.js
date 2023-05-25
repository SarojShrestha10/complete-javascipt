const rootNode = document.getRootNode();
console.log(rootNode);

const htmlElementNode = rootNode.childNodes[0]
console.log(htmlElementNode.childNodes); //NodeList(3) [head, text, body]

const headElementNode = htmlElementNode.childNodes[0];
const textElementNode = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(headElementNode.childNodes);
// console.log(textElementNode.childNodes);
// console.log(bodyElementNode.childNodes);

console.log(bodyElementNode.parentNode);

console.log(headElementNode.nextSibling);
console.log(headElementNode.nextSibling.nextSibling);

console.log(headElementNode.nextElementSibling);


const h1 = document.querySelector('h1');
// console.log(h1);
const body = h1.parentNode.parentNode;
body.style.color = '#efefef';
body.style.backgroundColor = '#333';

const container = document.querySelector('.container');
// console.log(container);
console.log(container.childNodes);
console.log(container.children);
