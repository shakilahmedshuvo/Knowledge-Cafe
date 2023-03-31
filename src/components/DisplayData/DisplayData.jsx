import React from 'react';
import './DisplayData.css'

const DisplayData = (props) => {
    const { title } = props.title;
    return (
        <div>
            <h4>{title}</h4>
        </div>
    );
};

export default DisplayData;