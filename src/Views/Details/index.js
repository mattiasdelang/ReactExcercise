import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGet } from '../../Hooks/HttpRequests';
import { DetailsButton, DetailsCard } from './Components';

function Details() {
    const { id } = useParams()
    const { data, loading, error } = useGet(`http://localhost:1337/pokemon/${id}`)

    function setFavorite() {
        const body = {favorite:true}
        const options = {
            headers:{
                'Content-Type':'application/json'
            }
        }

        axios.post(`http://localhost:1337/pokemon/${id}`, body, options)
            .then(res=> {
                console.log(res);
            })
    }

    let content = null
    if (loading) content = <span>loading...</span>
    if (data) content = <DetailsCard {...data} />
    if (error) content = <span>{error}</span>
    return (
        <div className='detailsContainer'>
            <div className='detailsNavigation'>
                {id !== '1' && <DetailsButton text='back' id={parseInt(id) - 1} />}
                <button onClick={() => setFavorite()}>Favorite</button>
                {id !== '151' && <DetailsButton text='next' id={parseInt(id) + 1} />}
            </div>
            {content}
        </div>

    )
}

export default Details