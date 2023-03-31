import React, { useEffect, useState } from 'react';
import './Card.css'
import SingleCard from '../SingleCard/SingleCard';


const Card = () => {
    // const [timeWatch, setTimeWatch] = useState("")
    const [cards, setCards] = useState([])
    // const [titles, setTitles] = useState([])
    // 

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
        // .then(data=>console.log(data))
    }, [])

    return (
        <div className='main-container'>
            <div className='cards-container'>
                {
                    cards.map(card => <SingleCard
                        card={card}
                        key={card.id}
                    ></SingleCard>)
                }
            </div>
        </div>
    );
};

export default Card;