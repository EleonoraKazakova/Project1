import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import './Post.css'
import Comments from './Comments'

function Post() {
  const [posts, setPosts] = useState([])
  const [id, setId] = useState(null)
  useEffect(() => {
    const makeRequest = async () =>
      setPosts(
        (await (await fetch('https://jsonplaceholder.typicode.com/posts'))
          .json())
      )
    makeRequest()
  }, []
  )

  return (
    <div className='post-content'>

      <div className='post-title'>
        {posts.map(post => <p className={post.id === id ? 'Post-p' : ''} onClick={() => setId(post.id)}>{post.title}</p>)}
      </div>

      <div className='post-text'>
        {posts.map(post => post.id === id ? <><p>{post.body}</p> <Comments postId={post.id}/> </> : '')}

      </div>


    </div>

  )

}



export default Post