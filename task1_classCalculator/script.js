class Calculator {
  add(firstNumber, secondNumber) {
    Calculator.check(firstNumber, secondNumber)
    return firstNumber + secondNumber
  }
  subtract(firstNumber, secondNumber) {
    Calculator.check(firstNumber, secondNumber)
    return firstNumber - secondNumber
  }
  multiply(firstNumber, secondNumber) {
    Calculator.check(firstNumber, secondNumber)
    return firstNumber * secondNumber
  }
  divide(firstNumber, secondNumber) {
    Calculator.check(firstNumber, secondNumber)
    if (secondNumber === 0) {
      throw new Error('ділення на нуль')
    }
    return firstNumber / secondNumber
  }
  static check(firstNumber, secondNumber) {
    if (
      Number.isNaN(Number(firstNumber)) ||
      Number.isNaN(Number(secondNumber))
    ) {
      throw new TypeError('Це не число')
    }
  }
}
const calc = new Calculator()

try {
  console.log(`Результат додавання: ${calc.add(6, 5)}`)
  console.log(`Результат віднімання: ${calc.subtract(5, 5)}`)
  console.log(`Результат множення: ${calc.multiply(5, 5)}`)
  console.log(`Результат ділення: ${calc.divide(5, 5)}`)
} catch (error) {
  console.error(error)
}
