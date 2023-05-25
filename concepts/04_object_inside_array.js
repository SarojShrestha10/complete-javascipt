const users = [
  {userId:1, userName:'Nana Patekar', gender:'male'},
  {userId:2, userName:'AliG indahouse', gender:'male'},
  {userId:3, userName:'Tapsee Pannu', gender:'female'},
  {userId:4, userName:'Ananya Pandey', gender:'female'}
]
for(let user of users){
  console.log(user);
}

// Nested Destructuring
const [user1, {userName:naam, userId: idOfUser}, {gender} ] = users;
console.log(user1);
console.log(naam,'and his id is',idOfUser);
console.log(gender);