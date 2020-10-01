import React from 'react';
import { Link } from 'react-router-dom';

function NavigationButton(props) {
    return (
        <Link to={`/${props.id}`}>
            <button>{props.text}</button>
        </Link>
    )
}

export default NavigationButton 