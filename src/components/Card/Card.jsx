import React, { useEffect, useState } from 'react';
import './Card.css'
import SingleCard from '../SingleCard/SingleCard';
import Time from '../Time/Time';
import Bookmark from '../BookMark/Bookmark';


const Card = () => {
    const [timeWatch, setTimeWatch] = useState("")
    const [cards, setCards] = useState([])
    const [title, setTitle] = useState([])

    // data fetch
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    // add to cart
    const handleAddToCart = (card) => {
        const savedTitles = JSON.parse(localStorage.getItem("titles"));
        if (savedTitles?.length > 0) {
            const newTitles = [...savedTitles, card.title];
            localStorage.setItem('titles', JSON.stringify(newTitles))
            setTitle(newTitles);
        }
        else {
            const newTitles = [...title, card.title];
            localStorage.setItem('titles', JSON.stringify(newTitles))
            setTitle(newTitles);
        }
    }

    // mark read
    const marksRead = (times) => {
        const addTime = JSON.parse(localStorage.getItem('addTime'))
        if (addTime) {
            const addSum = addTime + times
            localStorage.setItem("addTime", addSum)
            setTimeWatch(addSum)
        }
        else {
            localStorage.setItem("addTime", times)
            setTimeWatch(times)
        }

    }

    return (
        <div className='main-container'>
            <div className='cards-container'>
                {
                    cards.map(card => <SingleCard
                        card={card}
                        key={card.id}
                        handleAddToCart={handleAddToCart}
                        marksRead={marksRead}
                    ></SingleCard>)
                }
            </div>
            <div className='bookmark-container'>
                <div className='bookmark-title'>
                    <Time timeWatch={timeWatch}
                    ></Time>
                </div>
                <div className='bookmarkBody'>
                    <Bookmark
                        title={title}
                    ></Bookmark>
                </div>
            </div>
        </div>
    );
};

export default Card;