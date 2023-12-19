import { useState } from 'react'
import PokemonCard from './components/PokemonCard' 
import NavBar from './components/NavBar'
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
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePokemonClick = (index) => {
      setPokemonIndex(index);
  };

  return (
      <div>
          <NavBar pokemonList={pokemonList} onPokemonClick={handlePokemonClick} />
          <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      </div>
  );
}

export default App;