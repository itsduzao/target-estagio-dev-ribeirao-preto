export function sumValuesUpToLimit({limit,count,accumulator}){
  while (count < limit) {
    count++
    accumulator += count
    console.log({count,accumulator})
  }

  return accumulator
}