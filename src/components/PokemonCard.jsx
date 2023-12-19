import React from 'react';

function PokemonCard(props) {
    console.log(props); // Affiche les props dans la console

    // Utilisation du premier Pokémon de la liste
    const pokemon = props;

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



export default PokemonCard;
