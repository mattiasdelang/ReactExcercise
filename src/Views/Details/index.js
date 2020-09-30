import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGet } from '../../Hooks/HttpHooks';
import DetailsButton from './Components/DetailsButton';
import DetailsCard from './Components/DetailsCard';
import DetailsFavorite from './Components/DetailsFavorite';

function Details() {
    const { id } = useParams()

    const { data, loading, error } = useGet(`http://localhost:1337/pokemon/${id}`)
    const [favorite, setFavorite] = useState()
    
    useEffect(() => {
        if (data) setFavorite(data.favorite)
        else setFavorite(false)
    }, [data])


    let content = null
    if (loading) content = <span>loading...</span>
    if (data) content = <DetailsCard {...data} favorite={favorite} />
    if (error) content = <span>{error}</span>
    return (
        <div className='detailsContainer'>
            <div className='detailsNavigation'>
                {id !== '1' ? <DetailsButton text='back' id={parseInt(id) - 1} /> : <div></div>}
                {data && <DetailsFavorite {...data} favorite={favorite} setFavorite={setFavorite} />}
                {id !== '151' ? <DetailsButton text='next' id={parseInt(id) + 1} /> : <div></div>}
            </div>
            {content}
        </div>
    )
}

export default Details