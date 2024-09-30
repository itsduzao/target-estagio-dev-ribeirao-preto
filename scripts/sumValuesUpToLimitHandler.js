import { sumValuesUpToLimit } from './sumValuesUpToLimit.js';
import { showElement } from './showElement.js';
import { displayResultMessage } from './displayResultMessage.js';
import { isEmpty } from './isEmpty.js';
import { returnEmptyFields } from './returnEmptyFields.js';
import { createFlexibeMessage } from './CreateFlexibeMessage.js';

export function sumValuesUpToLimitHandler(){
  const indexInput = document.getElementById('indexInput')
  const countInput = document.getElementById('countInput')
  const accumulatorInput = document.getElementById('accumulatorInput')

  const isFieldEmpty = isEmpty(indexInput.value) || isEmpty(countInput.value) || isEmpty(accumulatorInput.value)
  
  const output = document.querySelector('#sumValuesUpToLimitOutput')

  if (!isFieldEmpty) {
    const limit = Number(indexInput.value)
    const count = Number(countInput.value)
    const accumulator = Number(accumulatorInput.value)
    const result = sumValuesUpToLimit({ limit, count, accumulator })
    const message = `O valor da variável SOMA é ${result}.`
    showElement(output)
    return displayResultMessage(message, output)
  }

  const inputFields = [indexInput, accumulatorInput, countInput]
  const emptyFields = returnEmptyFields(inputFields)
  const message = createFlexibeMessage(emptyFields)

  showElement(output)
  displayResultMessage(message, output)
}

const sumValuesUpToLimitButton = document.getElementById('sumValuesUpToLimitButton')
sumValuesUpToLimitButton.addEventListener("click", sumValuesUpToLimitHandler)