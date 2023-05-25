// simple for loop
// for of loop
// forEach but we cannot use forEach in HTML Collection but in NodeList we can easily use it
// Array like object ---> indexing, length property
// let navItems = document.querySelectorAll('a');
let navItems = document.getElementsByTagName('a');
console.log(navItems);

// for(let i =0; i< navItems.length; i++){
//   const navItem = navItems[i];
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "green";
//   navItem.style.fontWeight = "bold";
// }

// for(let navItem of navItems){
//   navItem.style.backgroundColor = "#fff";
//   navItem.style.color = "gold";
//   navItem.style.fontWeight = "bold";
// }

navItems = Array.from(navItems) //it changes it into an Array
navItems.forEach(navItem => {
  navItem.style.backgroundColor = "#fff";
  navItem.style.color = "gold";
  navItem.style.fontWeight = "bold";
})
console.log(navItems);
