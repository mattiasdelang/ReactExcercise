import React from 'react';

const withFavorite = (Component) => props => {
    const className = props.favorite?'favorite':null
    return (
        <div className={className}>
            <Component {...props}/>
        </div>
    )
}

export default withFavorite