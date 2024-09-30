import { fibonacciSequenceGenerator } from './fibonacciSequenceGenerator.js';
import { isInFibonacci } from './isInFibonacci.js';
import { displayResultMessage } from './displayResultMessage.js';
import { showElement } from './showElement.js';

const fibonacciButton = document.getElementById('fibonacciButton')
fibonacciButton.addEventListener("click", fibonacciHandler)

export function fibonacciHandler(){
  const fibonacciInput = Number(document.querySelector("#fibonacciInput").value)
  const fibonacciSequence = fibonacciSequenceGenerator(fibonacciInput)
  const result = isInFibonacci(fibonacciSequence, fibonacciInput)
  const message = result ? `O número ${fibonacciInput} faz parte da sequência` : `O número ${fibonacciInput} não faz parte da sequência`
  const fibonacciOutput = document.querySelector('#fibonacciOutput')
  showElement(fibonacciOutput)
  displayResultMessage(message, fibonacciOutput)
}

