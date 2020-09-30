import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailsCard from './Components/DetailsCard';

function Details(){
    const {id} = useParams()

    const [pokemon, setPokemon] = useState(null)

    useEffect(()=>{
        Axios.get(`http://localhost:1337/pokemon/${id}`)
            .then(res=>setPokemon(res.data))
    },[id])
    
    return(
        <div>
            {pokemon&&<DetailsCard {...pokemon}/>}
        </div>
    )
}

export default Details