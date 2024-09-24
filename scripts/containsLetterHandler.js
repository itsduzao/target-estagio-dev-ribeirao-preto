import { containsLetter } from './containsLetter.js';
import { showElement } from './showElement.js';
import { displayResultMessage } from './displayResultMessage.js';

const containsLetterButton = document.getElementById('containsLetterButton')
containsLetterButton.addEventListener("click", containsLetterHandler)

export function containsLetterHandler(){
  const input = document.querySelector("#containsLetterInput").value
  const result = containsLetter(input)
  const message = result > 0 ? `A palavra ${input} contém ${result} letras A.` 
  : `A palavra ${input} não contém nenhuma letra A.`
  const output = document.querySelector('#containsLetterOutput')
  showElement(output)
  displayResultMessage(message, output)
}