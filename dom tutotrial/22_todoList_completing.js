const formTodo = document.querySelector('.form-todo');
// console.log(formTodo);
const formInputText = document.querySelector('.form-todo input[type= "text"]');
// console.log(formInputText);
const todoList = document.querySelector('.todo-list');

formTodo.addEventListener('submit',(e)=>{
    e.preventDefault(); // it prevents page to refresh
    const newTodoText = formInputText.value;
    const newLi = document.createElement('li');
    const newLiInnerHTML = `
    <span class="text">${newTodoText}</span>
    <div class="todo-buttons">
    <button class="todo-btn done">Done</button>
    <button class="todo-btn remove">Remove</button>
    </div>`;
    newLi.innerHTML = newLiInnerHTML
    todoList.append(newLi);
    formInputText.value = ''; //to clear the value from the placeholder
});

todoList.addEventListener('click',(e)=>{
    // console.log(e.target.classList);
    if(e.target.classList.contains('done')){
        // console.log('great');
        const liSpanElement = e.target.parentNode.previousElementSibling;
        // console.log(liSpanElement);
        liSpanElement.style.textDecoration = 'line-through';
    }
    if(e.target.classList.contains('remove')){
        // console.log('Are you sure you want to remove this?');
        const targetedLi = e.target.parentNode.parentNode;
        // console.log(targetedLi);
        targetedLi.remove();
    }
});