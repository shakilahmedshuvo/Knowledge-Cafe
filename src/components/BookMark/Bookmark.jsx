import React, { useState, useEffect } from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    const title = props.title;
    const [titles, setTitles] = useState([]);
    useEffect(() => {
        const savedTitles = JSON.parse(localStorage.getItem("titles"));
        setTitles(savedTitles)
    }, [title?.length])

    return (
        <div className='bookmark-count'>
            <h2>
                Bookmarked Blogs:{titles?.length}
            </h2>
            {
                titles?.map(item => (
                    <h3
                        className='dynamicTitle'>
                        {item}
                    </h3>
                ))
            }
        </div>
    );
};
export default Bookmark;