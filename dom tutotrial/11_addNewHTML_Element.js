const todoList = document.querySelector('.todo-list');
// console.log(todoList.innerHTML);
// todoList.innerHTML += '<li>New Todo</li>';
//but never use innerHTML to create new element, use it when you have to change the element
//Use createElement: append,prepend,remove
const newTodoItem = document.createElement('li');
newTodoItem.textContent = 'Learn Javascript';
todoList.append(newTodoItem);
// todoList.after(newTodoItem);

const anotherItem = document.createElement('li');
anotherItem.textContent = 'Learn React';
todoList.prepend(anotherItem);
// todoList.before(anotherItem);

console.log(todoList);
const removeItem = document.querySelector('.todo-list li');
// removeItem.remove();
console.log(removeItem);

