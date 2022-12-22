/**
 * Get slice amount of items from array pseudorandomly.
 * 
 * @returns An array of randomly selected items with no duplicates.
 */
const selectRandom = (array, slice) => {
  const selected = new Array(slice)
  let i = 0
  while (i < slice) {
    const randInt = Math.floor(Math.random() * array.length)
    const item = array[randInt]
    if (!(item in selected)) {
      selected[i] = item
      i++
    }
  }
  
  return selected
}

export default selectRandom