import React from "react";
import { useEffect, useState } from "react";
import Pokemon from "./components/Pokemon";
import PokemonService from "./services/PokemonService";
import selectRandom from "./util/ArrayUtil";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const slice = 20;

  // Get slice amount of random Pokemon.
  useEffect(() => {
    PokemonService.getAllPokemon()
      .then(received => setPokemons(selectRandom(received, slice)));
  }, []);

  return pokemons ?
    Object.entries(pokemons).map(([ key, value ]) => {
      return <Pokemon url={value.url} key={key}/>;
    })
    : 
    <p>loading...</p>;
};

export default App;
