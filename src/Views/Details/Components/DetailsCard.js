import React from 'react';

function DetailsCard(props){
    return (
        <div className='detailsCard'>
            <img className='sprite' src={props.sprite} alt={props.id} />
            <span>{props.id}</span>
            <span>{props.name}</span>
            <p>{props.info}</p>
        </div>
    )
}

export default DetailsCard