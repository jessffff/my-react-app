import { useState } from 'react'
import PokemonCard from './components/PokemonCard' // Assurez-vous que le chemin d'importation est correct

import './App.css'

const pokemonList = [
  {
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "Mew",
    imgSrc: null, // Mew n'a pas d'image définie
  },
];


function App() {
  return (
    <div>
      <PokemonCard pokemon={pokemonList[0]} />
    </div>
  );
}


export default App
