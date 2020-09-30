import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import MainSprite from './Components/MainSprite';

function Main(){
    const[pokemon, setPokemon] = useState(null)

    useEffect(() => {
        Axios.get('http://localhost:1337/pokemon').then(res=>{
            setPokemon(res.data)
        })
    }, [])

    return(
        <div>
            {pokemon&&pokemon.map(p=><MainSprite key={p.id} {...p}/>)}
        </div>
    )
}

export default Main