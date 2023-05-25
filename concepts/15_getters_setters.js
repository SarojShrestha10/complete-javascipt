class Person{
  constructor(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  get fullName(){ //using getters
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName){ //setters
    const [firstName,lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
const person1 = new Person('Nana','Patekar',25);
person1.fullName = 'All Might';
console.log(person1);