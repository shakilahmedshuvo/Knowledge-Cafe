import React from 'react';
import './SingleCard.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCard = (props) => {
    const { author, data, img, title, userImg, time } = props.card
    return (
        <div className='single-container'>
            <img className='coverImg' src={img} alt="" />
            <img className='userImg' src={userImg} alt="" />
        </div>
    );
};

export default SingleCard;