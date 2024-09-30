import { sumValuesUpToLimit } from './sumValuesUpToLimit.js';
import { showElement } from './showElement.js';
import { displayResultMessage } from './displayResultMessage.js';
import { isEmpty } from './isEmpty.js';

export function sumValuesUpToLimitHandler(){
  const indexInput = document.getElementById('indexInput').value
  const countInput = document.getElementById('countInput').value
  const accmulatorInput = document.getElementById('accumulatorInput').value

  const output = document.querySelector('#sumValuesUpToLimitOutput')

  const isFieldEmpty = isEmpty({indexInput, countInput, accmulatorInput})
  console.log(isFieldEmpty)

  if (!isFieldEmpty) {
    const limit = Number(indexInput)
    const count = Number(countInput)
    const accumulator = Number(accmulatorInput)
    const result = sumValuesUpToLimit({limit, count, accumulator})
    const message = `O valor da variável SOMA é ${result}.`
    showElement(output)
    return displayResultMessage(message, output)
  }

  const message = `Número não informado`
  showElement(output)
  displayResultMessage(message, output)
}

const sumValuesUpToLimitButton = document.getElementById('sumValuesUpToLimitButton')
sumValuesUpToLimitButton.addEventListener("click", sumValuesUpToLimitHandler)