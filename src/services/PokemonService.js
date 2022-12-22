/**
 * Retrieves all Pokemon from pokeapi.co
 * 
 * @returns 
 */
const getAllPokemon = async () => {
  return fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => response.json())
    .then(data => data.results)
}

/**
 * Gets Pokemon data from url.
 * 
 * @param {string} url Pokemon data url.
 * @returns 
 */
const getPokemon = async (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(pokemon => pokemon)
}

export default { getAllPokemon, getPokemon }