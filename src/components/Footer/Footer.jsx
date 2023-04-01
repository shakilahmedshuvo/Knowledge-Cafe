import React from 'react';

const Footer = () => {
    return (
        <div>
            <p>Question:</p>
            <p>1.Props and State difference?</p>
            <p>Answer:The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. </p>
            <br />
            <p>2.How to Work Use State?</p>
            <p>Answer:InitialValue is the value you want to start with, and state is the current state value that can be used in your component..</p>
            <br />
            <p>3.Without data Load what things to do UseEffect?</p>
            <p>Answer:UseEffect will check the list of dependency values against the values from the last render, and will call your effect function if any one of them has changed.</p>
            <br />
            <p>4.How does React Work?</p>
            <p>Answer:React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. </p>
        </div>
    );
};

export default Footer;