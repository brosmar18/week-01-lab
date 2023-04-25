import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function HornedBeast(props) {
    const [favorites, setFavorites] = useState(0);

    const handleClick = () => {
        setFavorites(favorites + 1);
    };

    return (
        <Card.Body className="horned-beast">
            <Card.Title className="horned-beast__title">{props.title}</Card.Title>
            <Card.Img
                className="horned-beast__image"
                src={props.imageUrl}
                alt={props.title}
                title={props.title}
            />
            <Card.Text className="horned-beast__description">{props.description}</Card.Text>
            <Card.Text className="horned-beast__horns">Number of Horns: {props.horns}</Card.Text>
            <button className="horned-beast__favorite-btn" onClick={handleClick}>
                ❤️ Favorites: {favorites}
            </button>
        </Card.Body>
    );
}

export default HornedBeast;
