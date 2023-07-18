// // // Задание 1
// // let password = 'самый сложный пароль';
// // let enteredPassword = prompt ('Введите пароль');
// // if (password === enteredPassword) {
// //   alert ("Пароль введен верно");
// // } else {
// //   alert ("Пароль введен не правильно");
// // }


// // // Задание 2 
// // let c = 12;
// // if (c>0 && c<10) {
// //   console.log ('Верно');
// // } else {
// //   console.log ('Неверно')
// // };
// // c = 0;
// // if (c>0 && c<10) {
// //   console.log ('Верно');
// // } else {
// //   console.log ('Неверно')
// // };
// // c = 10;
// // if (c>0 && c<10) {
// //   console.log ('Верно');
// // } else {
// //   console.log ('Неверно')
// // };
// // c = -3;
// // if (c>0 && c<10) {
// //   console.log ('Верно');
// // } else {
// //   console.log ('Неверно')
// // };
// // c = 2;
// // if (c>0 && c<10) {
// //   console.log ('Верно');
// // } else {
// //   console.log ('Неверно')
// // };


// // // Задание 3
// // let d = 120;
// // let e = -5;
// // if (d>100 || e>100) {
// //   console.log ('Верно');
// // } else {
// //   console.log ('Неверно')
// // };


// // // Задание 4
// // let a = '2';
// // let b = '3';
// // a = Number(a);
// // b = Number(b);
// // alert(a + b);


// // // Задание 5 
// // let monthNumber = prompt ("Введите номер месяца");
// // switch (monthNumber) {
// //   case "1":
// //     alert("Зима");
// //     break;
// //   case "2":
// //     alert("Зима");
// //     break;
// //   case "12":
// //     alert("Зима");
// //     break;  
// //   case "3":
// //     alert("Весна");
// //     break;
// //   case "4":
// //     alert("Весна");
// //     break;
// //   case "5":
// //     alert("Весна");
// //     break;
// //   case "6":
// //     alert("Лето");
// //     break;
// //   case "7":
// //     alert("Лето");
// //     break;
// //   case "8":
// //     alert("Лето");
// //     break;
// //   case "9":
// //     alert("Осень");
// //     break;
// //   case "10":
// //     alert("Осень");
// //     break;
// //   case "11":
// //     alert("Осень");
// //     break;
// //   default: 
// //   alert("Такого месяца не существует");
// //     break;
// // }


// // Задание 7 
// // let f = prompt ('Введите любое число');
// // console.log (isNaN(f));
// if (f%2 ===0) {
//   console.log ("Число четное");
// } else {
//   console.log ("Число нечетное")
// }


// //Задание 8 
// let clientOS = prompt ("Пожалуйста введите число 0 если у вас iOS или 1 если у вас Android");
// if (clientOS === "0") {
// alert ("Установите версию приложения для iOS по ссылке");
// } else {
//   alert ("Установите версию приложения для Android по ссылке");
// }

// let clientOS = prompt ("Пожалуйста введите число 0 если у вас iOS или 1 если у вас Android");
// clientOS === "0" ? alert ("Установите версию приложения для iOS по ссылке") : alert ("Установите версию приложения для Android по ссылке");


// //Я совсем не поняла зачем нам в задании условие с 0 и 1, сделала еще как вариант такое решение, как я понимаю в confirm если выбирать ОК то это true (а значит 1), а если отмена то folse (значит 0)
// let clientOS = confirm('У вас телефон на ANDROID?')
// if (clientOS) {
//   alert('Установите версию приложения для Android по ссылке')
// } else {
//   alert('Установите версию приложения для iOS по ссылке')
// }


// // Задание 9
// let clientOS = prompt ("Пожалуйста введите число 0 если у вас iOS или 1 если у вас Android");
// let clientDeviceYear =  prompt("В каком году произведен ваш телефон?")
// if (clientOS === "0" && clientDeviceYear>= "2015") {
// alert ("Установите версию приложения для iOS по ссылке");
// } else if (clientOS === "0" && clientDeviceYear < "2015") {
//   alert ("Установите облегченную версию приложения для iOS по ссылке");
// } else if (clientOS === "1" && clientDeviceYear>= "2015") {
//   alert ("Установите версию приложения для Android по ссылке");
// } else {
//   alert ("Установите облегченную версию приложения для Android по ссылке");
// }



