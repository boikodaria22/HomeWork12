var cards = [
  '4567456745674567',
  '4282428242824282',
  '7224722472247224',
  '8147814781478147'
]

function xBet() {
  this.money = +prompt('Введите сумму ставки:')
  return new Promise((resolve, reject) => {
      let random = function randomValue() {
        return Math.floor(Math.random() * (Math.floor(5) - (Math.ceil(-5)) + 1)) + (Math.ceil(-5));
      }
      if (this.money)
        setTimeout(() => {
          random() > 0 ? resolve({
            value: value = Math.abs(random() * this.money),
            message: `Вы выиграли. Ваш выигрыш составляет ${this.value}`
          }) : reject('Вы проиграли. Ваши деньги сгорели');
        }, 3000)
    }).then((value) => {
      console.log(value.message);
      let sum = value.value;
      (function(sum) {
        this.cardNumber = +prompt('Введите номер карты для вывода выиграша:')
        return new Promise((resolve, reject) => {
          if (this.cardNumber)
            setTimeout(() => {
              (cards.includes(String(this.cardNumber))) ? resolve(`Ваш выиграш в размере ${sum}, был выведен на карту с номером ${this.cardNumber}. Поздравляем!`) : reject('Пользователя с таким номером не сушествует')
            }, 3000)
        }).then((value) => console.log(value)).catch((value) => console.log(value))
      })(sum)
    })
    .catch((value) => console.log(value))
}