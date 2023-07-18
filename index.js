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
