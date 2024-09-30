import { fibonacciSequenceGenerator } from './fibonacciSequenceGenerator.js';
import { isInFibonacci } from './isInFibonacci.js';
import { displayResultMessage } from './displayResultMessage.js';
import { showElement } from './showElement.js';
import { isEmpty } from './isEmpty.js';

export function fibonacciHandler(){
  const input = document.querySelector("#fibonacciInput").value
  const isFieldEmpty = isEmpty(input)
  const fibonacciOutput = document.querySelector('#fibonacciOutput')

  if (!isFieldEmpty) {
    const fibonacciInput = Number(document.querySelector("#fibonacciInput").value)
    const fibonacciSequence = fibonacciSequenceGenerator(fibonacciInput)
    const result = isInFibonacci(fibonacciSequence, fibonacciInput)
    const message = result ? `O número ${fibonacciInput} faz parte da sequência` : `O número ${fibonacciInput} não faz parte da sequência`
    showElement(fibonacciOutput)
    return displayResultMessage(message, fibonacciOutput)
  }
  
  const message = "Número não informado"
  showElement(fibonacciOutput)
  displayResultMessage(message, fibonacciOutput)
}

const fibonacciButton = document.getElementById('fibonacciButton')
fibonacciButton.addEventListener("click", fibonacciHandler)

