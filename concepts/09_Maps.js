const person = new Map();
person.set('firstName','Nana');
person.set('lastName','Patekar');
person.set('age',24);
person.set(1,Allah);
console.log(person.get(1));
console.log(person);

for(let key of person.keys){
  console.log(key, typeof key);
}

const person1 = { id : 1, firstName:'Nana'};
const person2 = { id : 2, firstName:'Nani'};
const extraInfo = new Map();
extraInfo.set(person1,{age:19,gender:male});
extraInfo.set(person2,{age:21,gender:female});
console.log(person1.id);
console.log(extraInfo.get(person1).age);
console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);
console.log(extraInfo.get(person2).age);