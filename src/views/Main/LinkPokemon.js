import React from 'react';
import { Link } from 'react-router-dom';

function LinkPokemon(props) {
    return (
        <Link to={`/${props.id}`}>
            <img src={props.sprite} alt={props.id} />
        </Link>
    )
}

export default LinkPokemon 