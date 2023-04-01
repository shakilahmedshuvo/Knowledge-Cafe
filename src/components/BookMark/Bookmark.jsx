import React, { useState,useEffect } from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    const title = props.title
    console.log(title);
    const [titles, setTitles] = useState([]);
    useEffect(() => {
        const savedTitles = JSON.parse(localStorage.getItem("titles"));
        setTitles(savedTitles)
    }, [title?.length])

    return (
        <div className='bookmark-count'>
            <h2>Bookmarked Blogs:{titles?.length}</h2>
            {
                titles.map(item=>(
                    <h1>{item}</h1>
                ))
            }
        </div>
    );
};
export default Bookmark;