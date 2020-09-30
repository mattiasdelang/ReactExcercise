import React from 'react';
import { useGet } from '../../Hooks/HttpHooks';
import MainSprite from './Components/MainSprite';

function Main() {

    const { data, loading, error } = useGet(`http://localhost:1337/pokemon`)


    if (loading) return <span>loading...</span>
    if (data) return data.map(p => <MainSprite key={p.id} {...p} />)
    if (error) return <span>{error}</span>
    return null
}

export default Main