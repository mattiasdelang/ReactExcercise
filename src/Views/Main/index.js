import Axios from 'axios';
import React, { useEffect, useState } from 'react';

function Main(){
    const[pokemon, setPokemon] = useState(null)

    useEffect(() => {
        Axios.get('http://localhost:1337/pokemon').then(res=>{
            setPokemon(res.data)
        })
    }, [])

    return(
        <div>
            {pokemon&&pokemon.map(p=><img key={p.id} src={p.sprite} alt={p.id}/>)}
        </div>
    )
}

export default Main