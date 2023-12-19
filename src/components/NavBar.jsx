import React from 'react';

function NavBar({ pokemonList, onPokemonClick }) {
    const handlePokemonSelection = (index) => {
        const selectedPokemon = pokemonList[index];
        if (selectedPokemon.name.toLowerCase() === 'pikachu') {
            alert('pika pikachu !!!');
        }
        onPokemonClick(index);
    };

    return (
        <nav>
            {pokemonList.map((pokemon, index) => (
                <button key={pokemon.name} onClick={() => handlePokemonSelection(index)}>
                    {pokemon.name}
                </button>
            ))}
        </nav>
    );
}

export default NavBar;

