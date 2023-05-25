// function createUser(firstName,lastName,email,age,address){
//   const user ={};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about = function(){
//     return (`${this.firstName} is ${this.age} years old`);
//   }
//   user.is18 = function(){
//     return age >= 18;
//   }
//   return user;
// }
// const user1 = createUser('Nana','Patekar','nana@gmail.com',25,'Heaven');
// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(about, is18);




// The above methods is inefficient as it creates two new methods for every new user created so instead we should write the code as given below

// const userMethods={
//   about : function(){
//     return (`${this.firstName} is ${this.age} years old`);
//   },
//   is18 : function(){
//     return this.age >= 18;
//   }
// };
// function createUser(firstName,lastName,email,age,address){
//   const user ={};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   user.about = userMethods.about;
//   user.is18 = userMethods.is18;
//   return user;
// }
// const user1 = createUser('Nana','Patekar','nana@gmail.com',25,'Bollywood');
// const user2 = createUser('All','Might','all@gmail.com',29,'MHA');
// const user3 = createUser('Allah','The Great','allah@gmail.com',100,'Heaven');
// console.log(user1.is18(),user1.about());
// console.log(user1.is18(),user2.about());
// console.log(user1.is18(),user3.about());




// again making the above code more efficient by using Object.create property. Here __proto__ and [[prototype]] are same but prototype is completely different
// const userMethods={
//   about : function(){
//     return (`${this.firstName} is ${this.age} years old`);
//   },
//   is18 : function(){
//     return this.age >= 18;
//   },
//   sing : function(){
//     return 'Singing';
//   }
// };
// function createUser(firstName,lastName,email,age,address){
//   const user = Object.create(userMethods);
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.email = email;
//   user.age = age;
//   user.address = address;
//   return user;
// }
// const user1 = createUser('Nana','Patekar','nana@gmail.com',25,'Bollywood');
// const user2 = createUser('All','Might','all@gmail.com',29,'MHA');
// const user3 = createUser('Allah','The Great','allah@gmail.com',100,'Heaven');
// console.log(user1.is18(),user1.about(),user1.sing());
// console.log(user1.is18(),user2.about());
// console.log(user1.is18(),user3.about());




// Combined both __proto__ and prototype
// 


// Finally writing the program using New Keyword
// function CreateUser(firstName,lastName,email,age,address){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.age = age;
//   this.address = address;
// }
// CreateUser.prototype.about = function() { return `${this.firstName} is ${this.age} years old`};
// CreateUser.prototype.is18 = function() { return this.age >= 18};
// CreateUser.prototype.sing = function() { return 'singing'};

// const user1 = new CreateUser('Nana','Patekar','nana@gmail.com',25,'Bollywood');
// const user2 = new CreateUser('All','Might','all@gmail.com',29,'MHA');
// const user3 = new CreateUser('Allah','The Great','allah@gmail.com',100,'Heaven');
// console.log(user1.is18(),user1.about(),user1.sing());
// console.log(user1.is18(),user2.about());
// console.log(user1.is18(),user3.about());




// Finally Using the class keyword to make the program even more easier and efficient
class CreateUser{
  constructor(firstName,lastName,email,age,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }
  about(){ return `${this.firstName} is ${this.age} years old`;}
  is18(){ return this.age >= 18;}
  sing(){ return 'singing';}
}

const user1 = new CreateUser('Nana','Patekar','nana@gmail.com',25,'Bollywood');
const user2 = new CreateUser('All','Might','all@gmail.com',29,'MHA');
const user3 = new CreateUser('Allah','The Great','allah@gmail.com',100,'Heaven');
console.log(user1.is18(),user1.about(),user1.sing());
console.log(user1.is18(),user2.about());
console.log(user1.is18(),user3.about());