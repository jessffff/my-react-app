import React from 'react';
import PropTypes from 'prop-types';

function PokemonCard({ pokemon }) {
    return (
        <figure>
            {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc} alt={pokemon.name} />
            ) : (
                <p>???</p>
            )}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

// Définition des types de props
PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string
    }).isRequired
};

export default PokemonCard;

