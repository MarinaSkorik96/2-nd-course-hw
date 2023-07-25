// // Задание 1 
let text = 'js'
// text = prompt (`Введите текст`);
const upperCsase = (a) => {
  upper = a.toUpperCase();
  console.log(upper);
}
upperCsase(text);

// // Задание 2 
// //Первый вариант
const searchStart = (arr, st) => {
  const p = arr.filter (item => item.toLowerCase().startsWith(st.toLowerCase()));
  const o = p.map ((item) => {
  return item.toLowerCase();
  });
  console.log (o);
}
 searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'); 
 searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); 
 searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); 

// // Вариант с заглавными
// // const searchStart = (arr, st) => {
// //  const p = arr.filter (item => item.toLowerCase().startsWith(st.toLowerCase()));
// //  console.log (p);
// // }
// // searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
// // searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); 
// // searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'); 

 
// // // Задание 3
let n = 32.58884;
  console.log(Math.floor(n));
  console.log(Math.ceil(n));
  console.log(Math.round(n));

// //Второе решение
let l = 32.58884;
let rounding = (n) => {
  console.log (`Если число ${l} округлить в меньшую сторону, будет ${Math.floor(n)}, в большую - ${Math.ceil(n)}, до ближайшего - ${Math.round(n)}.`);
}
rounding(l);

// // Задание 4 
console.log(Math.max(52, 53, 49, 77, 21, 32), Math.min(52, 53, 49, 77, 21, 32));

// // // Задание 5 
const h = (max) => {
  return Math.round (Math.random() * max);
}
console.log(h(10));

// // Задание 6
const u = (max) => {
let arr = new Array();
while (arr.length < Math.floor(max/2)){
  arr.push(Math.round (Math.random()* (max - 1)) + 1);
}
console.log(arr)
}
u(8);

// // Задание 7 
function getRandomInt(minValue, maxValue) {
  return Math.round (Math.random() * (maxValue- minValue)) + minValue;
}

console.log(getRandomInt(19, 43));

// // Задание 8 
let currentDate1 = new Date();
console.log(currentDate1);


// // Второй вариант
// // let currentDate = new Date();

// // let day = currentDate.getDate();
// // if (day < 10) { 
// // 	day= "0" + day; 
// // }

// // let month = currentDate.getMonth();
// // if (month < 10) { 
// // 	month = "0" + month; 
// // }

// // let date = `${day}.${month}.${currentDate.getFullYear()}`;
// // console.log(date);

// // Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate()+73);
console.log(currentDate);

// // Почему то не работающий вариант
// // let futureDate = (x) => {
// //   x = prompt('Введите число');
// //   let currentDate = new Date();
// //   console.log(currentDate);
// //   currentDate.setDate(currentDate.getDate()+x);
// //   alert (`Через ${x} дней будет ${currentDate}`)
// // }
// // futureDate();

// // Задание 10 
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const ten = (currentDate) => {
let date = currentDate.getDate();
  if (date < 10) { 
    	date= "0" + date; 
    };

let month = months[currentDate.getMonth()-1];

let day = days[currentDate.getDay()];

let hours = currentDate.getHours();
if (hours < 10) { 
  hours= "0" +  hours; 
};

let min = currentDate.getMinutes();
if (min < 10) { 
  min= "0" + min; 
};

let sec = currentDate.getSeconds();
if (sec < 10) { 
  sec= "0" + sec; 
};

console.log (`Дата: ${date}.${month}.${currentDate.getFullYear()} - это ${day}.`);
console.log (`Время: ${hours}:${min}:${sec}`);
  };

ten(new Date (prompt (`Ведите год`), prompt (`Ведите номер месяца`), prompt (`Ведите день месяца`), prompt (`Ведите час`), prompt (`Ведите минуты`), prompt (`Ведите секунды`), 0));
ten(currentDate = new Date);

