const getAllPokemon = async () => {
  return await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => response.json())
    .then(data => data.results)
}

const getPokemon = async (url) => {
  return await fetch(url)
    .then(response => response.json())
    .then(pokemon => pokemon)
}

export default { getAllPokemon, getPokemon }