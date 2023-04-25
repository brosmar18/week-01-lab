import React, { useState } from 'react';


function HornedBeast(props) {
    const [favorites, setFavorites] = useState(0);

    const handleClick = () => {
        setFavorites(favorites + 1);
    }
    return (
        <div className="horned-beast">
            <h2>{props.title}</h2>
            <img src={props.imageUrl} alt={props.title} title={props.title} />
            <p>{props.description}</p>
            <p>Number of Horns: {props.horns}</p>
        </div>
    );
}

export default HornedBeast;
