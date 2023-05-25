const key = "email";
const person ={
  name: "Nana Patekar",
  age: 26,
  hobbies : ["guitar","football","sleeping"]
};
console.log(person['name']);
console.log(person.age);
// console.log(person.hobbies);
console.log(person.hobbies[0]);
person.gender = "male";
person[key] = "nanapatekar@gmail.com"
console.log(person);

// Optional Chaining
const user ={
  firstName:'Nana',
  // addr:{street:123}
};
console.log(user?.firstName);
console.log(user?.addr?.street);


// for in loop
for(let key in person){
  console.log(`${key} : ${person[key]}`);
}

// for of loop
console.log(typeof(Object.keys(person)));
const var1 = Array.isArray(Object.keys(person));
console.log(var1);
for(let key of Object.keys(person)){
  console.log(key,':',person[key]);
}

// Spread Operator in Object
const obj1 ={
  key1 :'value1',
  key2 : 'value2'
};
const obj2 ={
  key3 :'value3',
  key4 : 'value4'
};
const newObj = {...obj1, ...obj2};
console.log(newObj);

// Object destructuring
const band = {
  bandName : "Coldplay",
  famousSong : "Yellow",
  year:2000,
  'another famous song' : 'fix you'
};
const {bandName:variable1, famousSong, ...restProperty} = band;
console.log(`My favourite band name is ${variable1} and its famous song is ${famousSong}`);
console.log(restProperty);

// Object.assign to clone
const obj = {
  key1: "Value1",
  key2: "Value2"
}
  // const {...objNew} = obj;
const newObject = Object.assign({}, obj);
obj.key3 ="Value3";
console.log(obj);
console.log(newObject);



// Object.create(obj1)
const object1 = {key:'value1',key2: 'value2'};
const object2 = Object.create(object1);
object2.key3 = 'value3';
console.log(object2.key2,object2.key3);