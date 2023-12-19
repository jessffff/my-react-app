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

  const handlePrev = () => {
      if (pokemonIndex > 0) setPokemonIndex(pokemonIndex - 1);
  };

  const handleNext = () => {
      if (pokemonIndex < pokemonList.length - 1) setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <div>
        <NavBar 
            onPrev={handlePrev} 
            onNext={handleNext} 
            showPrev={pokemonIndex > 0}
            showNext={pokemonIndex < pokemonList.length - 1}
        />
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
    </div>
);
}

export default App;