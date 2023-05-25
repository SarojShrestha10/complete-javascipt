const sectionTodo = document.querySelector('.section-todo');
console.log(sectionTodo.classList);
// sectionTodo.classList.add('bg-dark');
// sectionTodo.classList.remove('container');
const doesExist = sectionTodo.classList.contains('container');
console.log(doesExist);
// sectionTodo.classList.toggle('bg-dark'); //add the class if not present
// sectionTodo.classList.toggle('bg-dark'); //removes the class if present

const header = document.querySelector('header');
header.classList.add('bg-dark');
console.log(header.classList);