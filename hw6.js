//Задача 1 

const one = [1, 5, 4, 10, 0, 3];
for (let x = 0; x < one.length; x++) {
	if (one[x] != 10){
    console.log(one[x]);
  } else if (one[x] == 10) {
    console.log(one[x]);
    break;
  }
}

// //Второе решение
for (let item of one) {
  if (item != 10) {
    console.log (item);
  } else {
    console.log(item);
    break;
  }
}

// //Задача 2 
for (let x = 0; x < one.length; x++) {
	if (one[x] === 4){
    console.log(x);
  }
}

// //Второе решение
console.log(one.indexOf(4));

//Задача 3
const three = [1, 3, 5, 10, 20];
console.log(three.join(" "));
//или
console.log(...three);

//Задание 4
const n = [];
for (let item = 0; item < 3; item++) {
  n[item] = [];
  for (let item2 = 0; item2 < 3; item2++) {
    n[item][item2] = 1;
  };
};
console.log(n);

// //Задание 5
const five = [1, 1, 1];
five.push(2, 2, 2);
console.log(five);

// //Задание 6
const six = [9, 8, 7, 'a', 6, 5];
six.sort();
six.pop();
six.reverse();
console.log(six);

//Задание 7
const seven = [9, 8, 7, 6, 5];
let userAnswer = Number (prompt('Введите любое число (подсказака оно меньше 10)'));
if (seven.includes(userAnswer)) {
  alert ('Угадал');
} else {
  alert ('Не угадал');
};

//Задание 8
let line = 'abcdef';
let eight = line.split('');
eight.reverse();
let newLine = eight.join('');
console.log(newLine);

//Задание 9

const nine = [
  [1, 2, 3],
  [4, 5, 6]
];
const flat = nine.flat ();
console.log(flat)

// Этот вариант не правильный, я оставила его для себя
// const nine = [
//   [1, 2, 3],
//   [4, 5, 6]
// ]
// let line = nine.join(',');
// console.log(line);
// let newNine = line.split(`,`);
// console.log(newNine);
// let nine2 = line.split('');


//Задание 10

const ten = [2, 5, 6, 7, 10, 3, 1, 9, 4, 8];
let sum = ten[0];
for (let i=1; i<ten.length && i!=ten.length+1 ; i++) {
sum = sum + ten[i];
console.log(sum);
}

//Задание 11
const eleven = [2, 4, 6, 8, 3];
const eleven2 = eleven.map (el => el**2);
console.log(eleven2);

// //Задание 12
const tvelve = ['Задание', 'двенадцать', 'урок', 'шесть'];

let getLengthWords = (r) => {
const newArr = r.map((item) => {
  return item.length;
});
console.log(newArr);
}
getLengthWords(tvelve);

//Задание 13

function filterPositive(array) {
  const newArray = array.filter (el => el <0);
  console.log(newArray);
}

filterPositive([-1, 0, 5, -10, 56]);
filterPositive([-25, 25, 0, -1000, -2]); 

