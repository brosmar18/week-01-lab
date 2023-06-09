import React from 'react';
import HornedBeast from './HornedBeasts';
import data from '../data/Data';
import { CardGroup, Card } from 'react-bootstrap';

function Main() {
    return (
        <main className="main">
            <CardGroup className="main__card-group">
                {data.map((item) => (
                    <Card key={item._id} className="main__card" style={{ minWidth: '18rem', margin: '1rem' }}>
                        <HornedBeast
                            title={item.title}
                            imageUrl={item.image_url}
                            description={item.description}
                            horns={item.horns}
                        />
                    </Card>
                ))}
            </CardGroup>
        </main>
    );
}

export default Main;
