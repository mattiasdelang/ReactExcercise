import React from 'react';
import { useParams } from 'react-router-dom';
import { useGet } from '../../Hooks/HttpHooks';
import DetailsButton from './Components/DetailsButton';
import DetailsCard from './Components/DetailsCard';

function Details() {
    const { id } = useParams()

    const { data, loading, error } = useGet(`http://localhost:1337/pokemon/${id}`)

    let content = null
    if (loading) content = <span>loading...</span>
    if (data) content = <DetailsCard {...data} />
    if (error) content = <span>{error}</span>
    return (
        <div className='detailsContainer'>
            <div className='detailsNavigation'>
                {id !== '1' && <DetailsButton text='back' id={parseInt(id) - 1} />}
                {id !== '151' && <DetailsButton text='next' id={parseInt(id) + 1} />}
            </div>
            {content}
        </div>
    )
}

export default Details