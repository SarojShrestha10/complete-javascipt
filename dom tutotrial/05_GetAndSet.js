const link = document.querySelector('a');
console.log(link.getAttribute('href').slice(1));
link.setAttribute('href','https://google.com.np');
console.log(link.getAttribute('href'));

const formInputElement = document.querySelector('.form-todo input');
console.log(formInputElement.getAttribute('type'));