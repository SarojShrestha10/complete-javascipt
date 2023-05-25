// innerHTML
const headline = document.querySelector('.headline');
// console.log(headline);
console.log(headline.innerHTML);
headline.innerHTML = "<h1> Whole inner Element Changed.</h1>"
headline.innerHTML += "<button class = \"btn\">Read More ...</button>"
console.log(headline.innerHTML);
