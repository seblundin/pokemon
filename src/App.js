import React from "react"
import { useEffect, useState } from "react"
import Grid from "./components/Grid"
import PokemonService from "./services/PokemonService"
import selectRandom from "./util/ArrayUtil"
import SearchBar from "./components/SearchBar"

const App = () => {
  const [pokemon, setPokemon] = useState([])
  const [allPokemon, setAllPokemon] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const slice = 20

  // Get slice amount of random Pokemon.
  useEffect(() => {
    PokemonService.getAllPokemon()
      .then(received => {
        setAllPokemon(received)
        setPokemon(selectRandom(received, slice))
      })
  }, [])

  const onSearch = (event) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)
    setPokemon(allPokemon.filter(p => p.name.toLowerCase().includes(term)).slice(0,slice))

    console.log(pokemon)
  }

  return pokemon ? 
    <div style={appStyle}>
      <SearchBar handleContentChange={onSearch} content={searchTerm}/>
      <Grid pokemon={pokemon}/>
    </div>
    :
    <p>loading...</p>
}

const appStyle = {
  maxWidth: "80%",
  margin: "auto",
}

export default App
