import { sumValuesUpToLimit } from './sumValuesUpToLimit.js';
import { showElement } from './showElement.js';
import { displayResultMessage } from './displayResultMessage.js';

export function sumValuesUpToLimitHandler(){
  const limit = Number(document.getElementById('indexInput').value)
  const count = Number(document.getElementById('countInput').value)
  const accumulator = Number(document.getElementById('accumulatorInput').value)
  const result = sumValuesUpToLimit({limit, count, accumulator})
  const message = `o valor da variável SOMA é ${result}.`
  const output = document.querySelector('#sumValuesUpToLimitOutput')
  showElement(output)
  displayResultMessage(message, output)

}

const sumValuesUpToLimitButton = document.getElementById('sumValuesUpToLimitButton')
sumValuesUpToLimitButton.addEventListener("click", sumValuesUpToLimitHandler)