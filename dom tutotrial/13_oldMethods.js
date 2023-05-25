const ul = document.querySelector('.todo-list');
const li = document.createElement('li');
const referenceNode = document.querySelector('.firstTodo');
li.textContent = 'New Item';
// ul.appendChild(li);
// ul.insertBefore(li,referenceNode);
ul.replaceChild(li,referenceNode);
// ul.removeChild(referenceNode);