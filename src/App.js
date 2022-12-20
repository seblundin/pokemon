import React from "react";
import { useEffect, useState } from "react";

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const pokemons = 1154;
  const slice = 20;
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${Math.random() * (pokemons - slice)}?limit=${slice}`)
      .then(response => response.json())
      .then(data => {
        setPokemon(data.results);
      });
  }, []);

  return (
    <ul>
      {pokemon.map(p => <li key={p.url}> {p.name} </li>)}
    </ul>
  );
};

export default App;
