import React from 'react';
import './SingleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const SingleCard = (props) => {
    const { author, date, img, title, userImg, time } = props.card
    return (
        <div className='single-container'>
            <img className='coverImg' src={img} alt="" />
            <img className='userImg' src={userImg} alt="" />
            <div className='info-container'>
                <div>
                    <p className='author-info'>{author}</p>
                    <p>{date}</p>
                </div>
                <div>
                    <p>{time} min read <FontAwesomeIcon className='font-awesome'
                        icon={faBookmark}
                    ></FontAwesomeIcon>
                    </p>
                </div>
                <h3 className='title'>{title}</h3>
                <a className='ancor' href="">Mark as Read</a>
            </div>
        </div>
    );
};

export default SingleCard;