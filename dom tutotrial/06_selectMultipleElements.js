// get multiple elements using getElementByClassName
const navItems = document.getElementsByClassName('nav-item');
console.log(navItems); //HTML Collections
console.log(navItems[1]);
console.log(navItems[2]);
console.log(navItems[0]);
// it is array like object, we can get the elements using indexes and iterate
console.log(Array.isArray(navItems));

// get multiple elements using querySelectorAll
const navItems2nd = document.querySelectorAll('.nav-item');
console.log(navItems2nd); //NodeList
console.log(navItems2nd[2]);
console.log(navItems2nd[1]);
console.log(navItems2nd[0]);