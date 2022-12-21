const getAllPokemon = async () => {
  return await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => response.json())
    .then(data => data.results)
}

const getPokemon = async ( id, name, url ) => {
  const fetchPokemon = async (builtUrl) => {
    return fetch(builtUrl)
      .then(response => response.json())
      .then(pokemon => pokemon)
  }

  if (id) {
    return await fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`)
  } else if (name) {
    return await fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${name}`)
  } else if (url) {
    return await fetchPokemon(url)
  }
}

export default { getAllPokemon, getPokemon }