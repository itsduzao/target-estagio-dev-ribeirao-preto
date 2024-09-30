export function isEmpty(input){
  if (typeof input === 'object') {
    const inputValues = Object.values(input)
    const filteredEmptyValues = inputValues.filter(input => input === '')
    console.log(filteredEmptyValues)
    return filteredEmptyValues.length > 0 
  }
  return input.trim().length === 0
}