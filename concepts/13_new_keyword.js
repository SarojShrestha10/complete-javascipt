// New Keyword
// 1. this = {} ---> creates empty object
// 2. returns this
// creates link between __proto__ and prototype

    // example
function createUserForExample(firstName,age){
  this.firstName = firstName;
  this.age = age;
}
createUserForExample.prototype.about = function(){
  return `${this.firstName} is ${this.age} years old`;
}
const userExample1 = new createUserForExample('Nana',25);
console.log(userExample1);

// Create user program now with New Keyword
function CreateUser(firstName,lastName,email,age,address){
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.address = address;
}
createUser.prototype.about = function() { return `${this.firstName} is ${this.age} years old`};
createUser.prototype.is18 = function() { return this.age >= 18};
createUser.prototype.sing = function() { return 'singing'};

const user1 = new CreateUser('Nana','Patekar','nana@gmail.com',25,'Bollywood');
const user2 = new CreateUser('All','Might','all@gmail.com',29,'MHA');
const user3 = new CreateUser('Allah','The Great','allah@gmail.com',100,'Heaven');
console.log(user1.is18(),user1.about(),user1.sing());
console.log(user1.is18(),user2.about());
console.log(user1.is18(),user3.about());

// hasOwnProperty
for(let key in user1){
  if(user1.hasOwnProperty(key)){
    console.log(key);
  }
}