import React from 'react';
import HornedBeast from './HornedBeasts';
import data from '../data/Data';

function Main() {
    return (
        <main>
            {data.map((item) => (
                <HornedBeast
                    key={item._id}
                    title={item.title}
                    imageUrl={item.image_url}
                    description={item.description}
                />
            ))}
        </main>
    );
}

export default Main;
