// //Задание 1
let hello = 1;
while (hello <=2) {
  console.log ('Привет');
  hello++;
}

// //Задание 2
for (let number = 1; number <=5; number++){
  console.log (number);
}

// //Задание 3 (сделала 2 решения)
for (let number = 7; number >=7  && number <=22; number++){
  console.log (number);
}

let o = 0;
while (true){
  o++;
  if (o<7){
    continue;
  }
  if (o>=7 && o<=22){
    console.log (o);
  }
}

//Задание 4
const obj = {
  'Николай' : '200',
  'Василий' : '300',
  'Петр' : '400'
};
for ( let name in obj) {
  console.log(`${name} - зарплата ${obj[name]}`);
}

//Задание 5
let n = 1000;
let num = 0;
while (n>=50) {
  n= n/2;
  num++;
}
console.log (n);
console.log (num);

// Задание 6
for ( let fridey = 7; fridey <=31; fridey ++){
  if (fridey % 7 === 0){
    console.log (`Сегодня пятница ${fridey}-е число. Необходимо подготовить отчет.`)
  }
}
//  Почему тут не работает такой код?:
// for ( let fridey = 7; fridey <=31; fridey +7){
//     console.log (`Сегодня пятница ${fridey}-е число. Необходимо подготовить отчет.`)
// }

