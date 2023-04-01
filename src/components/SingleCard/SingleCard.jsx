import React, { useEffect, useState } from 'react';
import './SingleCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleCard = (props) => {
    const [already, setAlready] = useState(false)
    const [counter,setCounter] = useState(0)
    const { author, date, img, title, userImg, time } = props.card
    const handleAddToCart = props.handleAddToCart
    const marksRead = props.marksRead
    const notify = () => toast("Already Added");


    const abcd = () => {
        const abc = JSON.parse(localStorage.getItem('titles'))
        const a = abc?.find(item => item === title)
        if (a) {
            setAlready(true)
        }
        else {
            setAlready(false)
        }
    }

    useEffect(() => {
        abcd()
    }, [counter])
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
                        onClick={() => {
                                setCounter(prev =>prev+1)
                                abcd()

                                if (already) {
                                    notify()
                                    return
                                }
                                else {
                                    handleAddToCart(props.card)
                                }

                            }} className='bookmarkBtn'
                            icon={faBookmark}
                        ></FontAwesomeIcon>
                        </p>
                        <ToastContainer />
                    </div>
                </div>
                <h3 className='title'>{title}</h3>
                <a onClick={() => marksRead(parseInt(time))}
                    className='markReadAncor' href="">Mark as Read</a>
                <hr className='hr' />
            </div>
        </div>
    );
};

export default SingleCard;