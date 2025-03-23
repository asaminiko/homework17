class BankAccount {
  #balance
  constructor(balance, firstName, lastName) {
    this.#balance = BankAccount.checkNum(balance)
    this.firstName = BankAccount.checkName(firstName)
    this.lastName = BankAccount.checkName(lastName)
  }
  getInfo() {
    // отримання інформації про користувача
    return `${this.firstName} ${this.lastName}, баланс: ${this.#balance}`
  }
  getBalance() {
    return Number(this.#balance)
  }
  deposit(ante) {
    BankAccount.checkNum(ante)
    console.log(`+ ${ante}`)
    return (this.#balance += ante)
  }
  withdraw(ante) {
    BankAccount.checkNum(ante)
    if (this.#balance - ante < 0) {
      throw new Error('Помилка. Недостатньо коштів')
    }
    console.log(`- ${ante}`)
    return (this.#balance -= ante)
  }
  static checkNum(number) {
    // перевірка на число
    if (typeof number !== 'number' || Number.isNaN(number)) {
      throw new TypeError('Це не число')
    } else if (number < 0) {
      throw new Error("Помилка. Число від'ємне")
    }
    return number
  }
  static checkName(str) {
    //перевірка для імені та прізвища
    if (typeof str === 'string' && /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]+$/.test(str)) {
      return str
    }
    throw new TypeError('Некоректно введені дані')
  }
}

const account1 = new BankAccount(900, 'Вероніка', 'Чебакова')

console.log(account1.getBalance()) // 1000

account1.deposit(500)

console.log(account1.getBalance()) // 1500

account1.withdraw(200)

console.log(account1.getBalance()) // 1300
console.log(account1.getInfo())
