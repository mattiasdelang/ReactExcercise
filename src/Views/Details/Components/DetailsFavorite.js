import axios from 'axios';
import React from 'react';

function DetailsFavorite(props) {
    
    const patchFavorite = (value) => {
        const body = JSON.stringify({ favorite: value })
        const options = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.patch(`http://localhost:1337/pokemon/${props.id}`, body, options)
            .then(res => props.setFavorite(res.data.favorite))

    }

    return (<button onClick={() => patchFavorite(!props.favorite)}>{props.favorite ? 'unfavorite' : 'favorite'}</button>)
}

export default DetailsFavorite