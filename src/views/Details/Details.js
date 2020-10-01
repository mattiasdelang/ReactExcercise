import React from 'react';
import { useParams } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import { useGet } from '../../hooks/HttpHook';
import NavigationButton from '../Main/NavigationButton';
import FavoriteButton from '../Main/FavoriteButton';

function Details() {
    const {id} = useParams();
    const { data, loading, error } = useGet(`http://localhost:1337/pokemon/${id}`)

    let content = null;

    if (loading) content = <span>loading...</span>
    if (data) content = <PokemonCard {...data} />
    if (error) content = <span>{error}</span>


    return(
        <div className='detailsContainer'>
            <div className='detailsNavigation'>
                {id !== '1' && <NavigationButton text='back' id={parseInt(id) - 1} />}
                {id !== '151' && <NavigationButton text='next' id={parseInt(id) + 1} />}
            </div>
            <FavoriteButton/>
            {content}
        </div>
    );
}

export default Details;