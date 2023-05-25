function myFunc(){
  console.log('Hello');
}
myFunc.prototype.abc = 'abc';
myFunc.prototype.xyz = 'xyz';
myFunc.prototype.sing = function(){
  return 'Singing';
};
console.log(myFunc.prototype.abc);
console.log(myFunc.prototype.xyz);
console.log(myFunc.prototype.sing());

// 
function createUser(firstName,lastName,email,age,address){
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
createUser.prototype.about = function() { return `${this.firstName} is ${this.age} years old`};
createUser.prototype.is18 = function() { return this.age >= 18};
createUser.prototype.sing = function() { return 'singing'};

const user1 = createUser('Nana','Patekar','nana@gmail.com',25,'Bollywood');
const user2 = createUser('All','Might','all@gmail.com',29,'MHA');
const user3 = createUser('Allah','The Great','allah@gmail.com',100,'Heaven');
console.log(user1.is18(),user1.about(),user1.sing());
console.log(user1.is18(),user2.about());
console.log(user1.is18(),user3.about());