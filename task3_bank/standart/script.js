class BankAccount {
  #balance
  constructor(balance) {
    this.#balance = BankAccount.checkNum(balance)
  }
  getBalance() {
    return this.#balance
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
}

const account1 = new BankAccount(1000)

console.log(account1.getBalance()) // 1000

account1.deposit(500)

console.log(account1.getBalance()) // 1500

account1.withdraw(200)

console.log(account1.getBalance()) // 1300
