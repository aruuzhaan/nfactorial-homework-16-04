// //Task #1///////////////
const age = prompt('How old are you?');
// const policy = confirm('Родители разрешили?');
let checkage = (age > 18) ? true: confirm('Родители разрешили?');
console.log(checkage);

//Task #2///////////////////
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive number`);
} else {
  alert( pow(x, n) );
}

//Task 3///////////////////////

const ask = (question, yes, no) => (confirm(question)) ? yes() : no();

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);

//Task #4 //////////////
let arr = [5, 2, 1, -10, 8];
arr.sort((a,b)=>b-a);
alert(arr); 

// /Task #5 /////////
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [ vasya, petya, masha ];

let names = [vasya.name, petya.name, masha.name];

alert( names ); // Вася, Петя, Маша


//Task 6 /////
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(i => ({fullName: `${i.name} ${i.surname}`, id: i.id }));

console.log(usersMapped); 

console.log(usersMapped[0].fullName); 
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/
// alert(usersMapped);
alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин

////Task 7////
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28