// // Задание 1 
// function findSmallest(a, b) {
//   if (a<=b) {
//     return(a);
//   }
//   else {
//     return (b);
//   }
// }

// // или

// let findSmallest = (a,b) => {
//   if (a<=b) {
//     return(a);
//   }
//   else {
//     return (b);
//   }
// }

// console.log (findSmallest(31,8));
// console.log (findSmallest(8,4));
// console.log (findSmallest(6,6));

// // Задание 2
// let evenNotEven = (f) => {
// if (f % 2 === 0) {
//   return ("Число четное");
// } else {
//   return("Число нечетное")
// }
// }
// console.log (evenNotEven(prompt ("Введите число")));

// // Задание 3.1 
// let squaring = (s) => s*s;
// console.log (squaring(prompt ("Введите число")));

// // или
// let squaring = (s) => s**2;
// console.log (squaring(prompt ("Введите число")));

// // Задание 3.2
// let squaring = (s = prompt ("Введите число")) => {
//   return s*s;
// }
// console.log(squaring());

// // Задание 4 
// let ageVerification = (age = prompt ("Сколько вам лет?")) => {
//   if (age < 0) {
//     alert ('Вы ввели не правильное число');
//   } else if (age>=0 && age <=12) {
//     alert ('Привет, друг!');
//   }  else {
//     alert('Добро пожаловать!');
//   }
//   }
//   ageVerification();

// // еще один вариант 
// let ageVerification = (age = prompt ("Сколько вам лет?")) => {
//   if (age < 0) {
//     alert ('Вы ввели не правильное число');
//   } else if (age>=0 && age <=12) {
//     alert ('Привет, друг!');
//   }  else if (age>=13) {
//     alert('Добро пожаловать!');
//   }
//   }
//   ageVerification();

// // Задание 5 
// let mult = (c = prompt ("Введите первое число"), g = prompt ("Введите второе число")) => {
//   if (isNaN (c) || isNaN(g)){
//     return alert('Одно или оба значения не являются числом');
//   } else {
//     return  alert (c*g);
// }
// }
// mult();

// // Задание 6 
// let squaring2 = ( userNumber = prompt ("Введите число")) => {
//   if (isNaN (userNumber)){
//     return alert('Переданный параметр не является числом');
//   } else {
//     return  alert (`Ваше число в кубе равняется ${userNumber**2}`);
// }
// }
// squaring2();

// // Задание 7 

// const circle1 = {
//   radius: 12,
//   getArea () {
//     return Math.PI * this.radius**2;
//   },
//   getPerimetr () {
//     return 2 * Math.PI * this.radius;
//   },
// };
// const circle2 = {
//   radius: 21,
//   getArea () {
//     return Math.PI * this.radius**2;
//   },
//   getPerimetr () {
//     return 2 * Math.PI * this.radius;
//   },
// };

// console.log (circle1.getArea());
// console.log (circle1.getPerimetr());
// console.log (circle2.getArea());
// console.log (circle2.getPerimetr());

// // Второе решение 
// function getArea() {
//   return Math.PI * this.radius**2;
// };

// function  getPerimetr () {
//   return 2 * Math.PI * this.radius;
// };

// const circle1 = {
//   radius: 2,
//   getArea: getArea,
//   getPerimetr: getPerimetr,
// };

// const circle2 = {
//   radius: 4,
//   getArea: getArea,
//   getPerimetr: getPerimetr,
// };

// console.log (circle1.getArea());
// console.log (circle1.getPerimetr());
// console.log (circle2.getArea());
// console.log (circle2.getPerimetr());

// // Задание 8 
// let seasons = (userNumber = prompt ("Введите номер месяца")) => {
//   if (isNaN (userNumber)){
//     return alert('Вы ввыли не номер месяца');
//   } else if (userNumber == 12 || userNumber == 1 || userNumber == 2) {
//     return  alert (`Зима`);
//   } else if (userNumber >=3 && userNumber<=5) {
//     return  alert (`Весна`);
//   } else if (userNumber >=6 && userNumber<=8) {
//     return  alert (`Лето`);
//   } else if (userNumber >=9 && userNumber<=11) {
//     return  alert (`Осень`);
//   } else {
//     return  alert (`На Земле такого месяца нет`);
//   }
// }
// seasons();




