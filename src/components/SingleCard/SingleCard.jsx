import React from 'react';
import './SingleCard.css';

const SingleCard = () => {
    const { author, data, img, title, userImg, time } = props.card

    return (
        <div>
            <div className='single-container'>
                <img className='coverImg' src={c} alt="" />
                <img className='userImg' src={c} alt="" />
            </div>
        </div>
    );
};

export default SingleCard;