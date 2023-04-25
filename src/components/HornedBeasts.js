import React, { useState } from 'react';

function HornedBeast(props) {
    const [favorites, setFavorites] = useState(0);

    const handleClick = () => {
        setFavorites(favorites + 1);
    };

    return (
        <div className="horned-beast">
            <h2 className="horned-beast__title">{props.title}</h2>
            <img
                className="horned-beast__image"
                src={props.imageUrl}
                alt={props.title}
                title={props.title}
            />
            <p className="horned-beast__description">{props.description}</p>
            <p className="horned-beast__horns">Number of Horns: {props.horns}</p>
            <button className="horned-beast__favorite-btn" onClick={handleClick}>
                ❤️ Favorites: {favorites}
            </button>
        </div>
    );
}

export default HornedBeast;
