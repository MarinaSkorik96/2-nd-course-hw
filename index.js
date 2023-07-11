// Задание 1
let a;
a = 10;
alert(a);
a = 20;
alert(a);
// Задание 2
let firstIPhone = "2007 год";
alert (firstIPhone);
// Задание 3 
let creator = "Brendan Eich";
alert (creator);
// Задание 4 
let c = 10;
let b = 2;
alert (c+b);
alert (c-b);
alert (c*b);
alert (c/b);
// Задание 5 
let result = 2**5;
alert (result);
// Задание 6 
a = 9;
b = 2;
alert (9%2);
// Задание 7 
let num =1;
num +=5;
num -=3;
num *=7;
num /=3;
num++;
num --;
alert(num);
// Задание 8 
let age = prompt("Сколько вам лет?");
alert(age);
// Задание 9.0
let user = {
  name: "Julianna",
  age: 35,
  isAdmin: true
}
// Задание 9.1 
user ['sity of residence'] = "Madrid";
// Задание 9.2 
user ['age'] = 36;
// Задание 9.3 
delete user ['sity of residence'];
// Задание 9.4
let info = prompt ('Какую информацию хотите узнать о пользователе?');
console.log(user[info]);
alert(user[info]);
// Задание 10
let userName = prompt ('Whats is your name?');
alert (`Hello, ${userName}!`);
//Дальше вопрос по 10-му заданию
let name = prompt ('Whats is your name?');
alert (`Hello, ${name}!`); //почему тут зачеркивает name?