import React from 'react';
import Styles from './style.css';

function Greeting(props) {
    return (

        <div>
            <header>
                <h1 style={{border : "2px solid Tomato" }}>Hello {props.name}, I, Maulin Patel wish you a good day !!!</h1>
            </header>
        </div>

    );
}

export default Greeting;