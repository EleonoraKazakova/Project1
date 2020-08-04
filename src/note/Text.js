import React from 'react';
import './Text.css'

function Text(props) {
    return (
        <>
            <h3>{props.title}</h3>
            <textarea className='Text-text' value={props.text} onChange={(event) => props.saveText(event.target.value)}/>
        </>
    )
}

export default Text;