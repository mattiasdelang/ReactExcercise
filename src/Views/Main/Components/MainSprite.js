import React from 'react';
import { Link } from 'react-router-dom';
import withFavorite from '../../../Hoc/withFavorite';

function MainSprite(props) {
    return (
        <Link to={`/${props.id}`}>
            <img src={props.sprite} alt={props.id} />
        </Link>
    )
}

export default withFavorite(MainSprite)