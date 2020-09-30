import React from 'react';
import { Link } from 'react-router-dom';

function DetailsButton(props) {
    return (
        <Link to={`/${props.id}`}>
            <button>{props.text}</button>
        </Link>
    )
}

export default DetailsButton