import React from "react";
import { useEffect, useState } from "react";
import Pokemon from "./components/Pokemon";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const slice = 20;

  // Fetch all pokemon from pokeapi.
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(response => response.json())
      .then(data => setPokemons(data.results));
  }, []);

  /**
   * Get slice amount of Pokemon from array pseudorandomly.
   * 
   * @returns An array of randomly selected Pokemon.
   */
  const getRandomPokemons = () => {
    const result = {};
    for (let i = 0; i < slice; i++) {
      let randInt = Math.floor(Math.random() * pokemons.length);
      result[pokemons[randInt].name] = pokemons[randInt].url;
    }
    
    return result;
  };

  if (pokemons.length > 0) {
    const randomlySelected = getRandomPokemons();

    return (
      Object.entries(randomlySelected).map(([k, value]) => {
        return <Pokemon url={value} key={k}/>;
      })
    );
  }
  return <p>loading...</p>;
  
};

export default App;
