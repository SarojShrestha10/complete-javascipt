import {firstName as fname} from './utils/fname.js';
import {age} from './utils/age.js';
import {Person} from './utils/person.js'

console.log(fname, age);
const p1 = new Person('John', 'Cena', 55);
p1.info();
console.log(p1);