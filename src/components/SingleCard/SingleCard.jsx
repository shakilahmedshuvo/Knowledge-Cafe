import React from 'react';
import './SingleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCard = (props) => {
    const { author, date, img, title, userImg, time } = props.card
    const handleAddToCart = props.handleAddToCart
    return (
        <div className='single-container'>
            <img className='coverImg' src={img} alt="" />
            <div className='info-container'>
                <div className='card'>
                    <div className='autor-img-section'>
                        <img className='userImg' src={userImg} alt="" />
                        <div>
                            <p className='author-info'>{author}</p>
                            <p>{date}</p>
                        </div>
                    </div>
                    <div className='bookmark-section'>
                        <p>{time} min read <FontAwesomeIcon
                            onClick={() => handleAddToCart(props.card)} className='bookmarkBtn'
                            icon={faBookmark}
                        ></FontAwesomeIcon>
                        </p>
                    </div>
                </div>
                <h3 className='title'>{title}</h3>
                <a className='markReadAncor' href="">Mark as Read</a>
            </div>
        </div>
    );
};

export default SingleCard;