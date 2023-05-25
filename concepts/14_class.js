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

// More program
class Animals{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  eat(){ return  `${this.name} is eating`;}
  isSuperCute(){ return  age <= 1;}
  isCute(){ return  true;}
}
 const animal1 = new Animals('Jojo', 13);
 console.log(animal1,animal1.eat(),animal1.isCute());

//  inheritance
 class Dog extends Animals{}
 const jojo = new Dog('Jojo',12);
 console.log(jojo.eat());

//  Super Keyword
class Cat extends Animals{
  constructor(name,age,speed){
    super(name,age);
    this.speed = speed;
  }
  run(){ return `${this.name} can run ${this.speed} kmph`; }
  eat(){ return `Modified eat : ${this.name} is eating`; }
}
const baby = new Cat('Baby',2,34);
console.log(baby);
console.log(baby.run());
console.log(baby.eat());