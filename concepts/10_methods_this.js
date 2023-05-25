// Methods: functions inside object
const person = {
  firstName:'Nana',
  age: 25,
  aboutPerson: function(){
    console.log(`Name of this Person is ${this.firstName} and age is ${this.age}`);
  }
};
person.aboutPerson();

// new Code
function personInfo(){
  console.log(`Name of the Person is ${this.firstName} and Age is ${this.age}`);
}
const person1 = {firstName:'Nana', age:25, about:personInfo};
const person2 = {firstName:'Allah', age:100, about:personInfo};
const person3 = {firstName:'Nani', age:22, about:personInfo};
const person4 = {firstName:'All Might', age:21, about:personInfo};
person1.about();
person2.about();
person3.about();
person4.about();

// Call, Apply and Bind
// Call
function about(){
  console.log(`Name of the Person is ${this.firstName} and Age is ${this.age}, his hobby is ${hobby} and favourite musician is ${favMusician}`);
}
const user1 = { firstName:'Saroj',age:25};
const user2 = { firstName:'Rajan',age:24};
const user3 = { firstName:'Rojan',age:22};
about.call(user1,'football','Eminem');
// bind
const func = about.bind(user2,'Flirting','Salman Khan');
func();
// Apply
about.apply(user3,['singing','Shawn Mendes']);