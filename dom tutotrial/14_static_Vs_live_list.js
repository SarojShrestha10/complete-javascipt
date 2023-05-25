// Static list(querySelector) and Live List(getElementsByTagName)

const ul =document.querySelector('.todo-list');
const listItems = ul.getElementsByTagName('li');
// console.log(listItems);
const sixthItem = document.createElement('li');
sixthItem.textContent = 'item 6';
ul.append(sixthItem);
console.log(listItems);