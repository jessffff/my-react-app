import React from 'react';

function PokemonCard() {
    // Utilisation du premier Pokémon de la liste
    const pokemon = pokemonList[0];

    return (
        <figure>
            {/* Affichage conditionnel de l'image ou du texte '???' */}
            {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p>???</p>
            )}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

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

export default PokemonCard;
