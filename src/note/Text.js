import React from 'react';
import './Text.css'

function Text(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p className='Text-text'>{props.text}</p>
        </div>
    )
}

export default Text;