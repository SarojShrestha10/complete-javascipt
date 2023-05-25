// Changing the text using textContent and innerText.


const changingHeading = document.getElementById('main-heading');
console.log(changingHeading.textContent);
// changingHeading.textContent = 'This is how you change the text using DOM';
changingHeading.innerText = 'This is how you change the text using DOM';
console.log(changingHeading.textContent);
