import { containsLetter } from './containsLetter.js';
import { showElement } from './showElement.js';
import { displayResultMessage } from './displayResultMessage.js';
import { isEmpty } from './isEmpty.js';

export function containsLetterHandler(){
  const input = document.querySelector("#containsLetterInput").value
  const isFieldEmpty = isEmpty(input)
  const output = document.querySelector('#containsLetterOutput')

  if (!isFieldEmpty) {
    const result = containsLetter(input)
    const message = result > 0 ? `${input} contém ${result} letras A.` 
    : `${input} não contém nenhuma letra A.`
    showElement(output)
    return displayResultMessage(message, output)
  }
  const message = "Palavra não informada"
  showElement(output)
  displayResultMessage(message, output)
}

const containsLetterButton = document.getElementById('containsLetterButton')
containsLetterButton.addEventListener("click", containsLetterHandler)