import React from 'react';
import { useParams } from 'react-router-dom';
import { useGet } from '../../Hooks/HttpHooks';
import DetailsCard from './Components/DetailsCard';

function Details() {
    const { id } = useParams()

    const { data, loading, error } = useGet(`http://localhost:1337/pokemon/${id}`)

    if (loading) return <span>loading...</span>
    if (data) return <DetailsCard {...data} />
    if (error) return <span>{error}</span>
    return null
}

export default Details