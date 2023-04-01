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
        // .then(data=>console.log(data))
    }, [])

    // add to cart
    const handleAddToCart = (card) => {
        const newTitles = [...title, card];
        setTitle(newTitles);
    }

    // mark read
    const marksRead = (times) => {
        const addTime = JSON.parse(localStorage.getItem('Add-Time'))
        if (addTime) {
            const addSum = addTime + times
            localStorage.setItem("Add-Time", addSum)
            setTimeWatch(addSum)
        }
        else {
            localStorage.setItem("Add-Times", times)
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
                <h2>Bookmarked Blogs:{title.length}</h2>
                </div>
            </div>
        </div>
    );
};

export default Card;