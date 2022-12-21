import React from "react"
import { useEffect, useState } from "react"
import Grid from "./components/Grid"
import PokemonService from "./services/PokemonService"
import selectRandom from "./util/ArrayUtil"

const App = () => {
  const [pokemons, setPokemons] = useState([])
  const slice = 20

  // Get slice amount of random Pokemon.
  useEffect(() => {
    PokemonService.getAllPokemon()
      .then(received => setPokemons(selectRandom(received, slice)))
  }, [])

  return pokemons ? <Grid pokemon={pokemons}/> : <p>loading...</p>
}

export default App
