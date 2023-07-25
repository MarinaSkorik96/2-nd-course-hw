let seasons = (userNumber = prompt ("Введите номер месяца")) => {
  if (isNaN (userNumber)){
    return alert('Вы ввыли не номер месяца');
  } else if (userNumber == 12 || userNumber == 1 || userNumber == 2) {
    return  alert (`Зима`);
  } else if (userNumber >=3 && userNumber<=5) {
    return  alert (`Весна`);
  } else if (userNumber >=6 && userNumber<=8) {
    return  alert (`Лето`);
  } else if (userNumber >=9 && userNumber<=11) {
    return  alert (`Осень`);
  } else {
    return  alert (`На Земле такого месяца нет`);
  }
}

const game2 = () => {
  const arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
  newArr = arr.map(el => 
  ' ' + el);
  newArr.sort(() => Math.random() - 0.5);
  alert(`Запомните слова: ${newArr}`);
  const firstUserAnswer = ' ' + prompt (`Какое было первое слово?`);
  const secondUserAnswer =  ' ' + prompt (`Какое было последнее слово?`);
  if (firstUserAnswer.toLowerCase() === newArr[0].toLowerCase() && secondUserAnswer.toLowerCase() === newArr[6].toLowerCase()) {
    alert (`Поздравляю, у тебя прекрасная память!`)
  } else if (firstUserAnswer.toLowerCase() === newArr[0].toLowerCase() || secondUserAnswer.toLowerCase() === newArr[6].toLowerCase()){
    alert (`Вы были близки к победе!`)
  } else {
    alert (`Не верно, попробуй еще раз!`)
  }};
 