import React, { useState, useEffect } from 'react'
import './Comments.css'

function Comments(props) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        const makeRequest = async () =>
            setComments(
                (await (await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.postId}`))
                    .json())
            )
        makeRequest()
    }, [])

    return (
        <div className='Comments-content'><h3>Comments </h3>
            {comments.map(comment => <div className='Comments-text'> <div className='Comments-h5'>name</div><div className='Comments-name'>{comment.name}</div><p>{comment.body}</p><hr/></div>)}
        
        </div>
        

    )

}

export default Comments