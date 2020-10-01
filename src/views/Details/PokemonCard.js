import React from 'react';

function PokemonCard(props) {
    return (
        <div className='pokemonCard'>
            <img className='sprite' src={props.sprite} alt={props.id} />
            <span>{props.id}</span>
            <span>{props.name}</span>
            <p>{props.info}</p>
        </div>
    )
}

export default PokemonCard 