/**
 * Get slice amount of items from array pseudorandomly.
 * 
 * @returns An array of randomly selected items with no duplicates.
 */
const selectRandom = (array, slice) => {
  const selected = []
  let i = 0
  while (i < slice) {
    let randInt = Math.floor(Math.random() * array.length)
    let item = array[randInt]
    if (!(item in selected)) {
      selected.push(item)
      i++
    }
  }
  
  return { ...selected }
}

export default selectRandom