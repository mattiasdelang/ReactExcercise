import React from 'react';
import LinkPokemon from './LinkPokemon';
import { useGet } from '../../hooks/HttpHook';

function Main() {
    const { data, loading, error } = useGet(`http://localhost:1337/pokemon`)
    
    if (loading) return <span>loading...</span>
    if (data) return data.map(p => <LinkPokemon key={p.id} {...p} />)
    if (error) return <span>{error}</span>
    return null
}

export default Main;