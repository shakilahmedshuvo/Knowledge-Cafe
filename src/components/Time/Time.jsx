import React, { useEffect, useState } from 'react';

const Time = ({ timeWatch }) => {
    const [showTime, setShowTime] = useState(timeWatch)
    useEffect(() => {
        const getTimeFromLocalStorage = localStorage.getItem("addTime")
        setShowTime(getTimeFromLocalStorage);
    }, [timeWatch])

    return (
        <div>
            <h3>
                Spent time on Read:{showTime} min
            </h3>
        </div>
    );
};

export default Time;