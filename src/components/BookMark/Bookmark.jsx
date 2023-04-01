import React from 'react';
import './Bookmark.css'

const Bookmark = (props) => {
    const title =props.title
    return (
        <div className='bookmark-count'>
            <h2>Bookmarked Blogs:{title.length}</h2>
        </div>
    );
};

export default Bookmark;