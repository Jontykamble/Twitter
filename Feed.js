import React, { useEffect, useState } from 'react'
import "./Feed.css"

import TweetBox from './TweetBox'
import Post from './Post'

import db from './firbase'

function Feed() {


  const [posts,setPost]=useState([])

  useEffect(()=>{

    db.collection('post').onSnapshot(snapshot=>{
      setPost(snapshot.docs.map(doc=> doc.data()))

    })


    
  },[])



  
  return (
    <div className='feed'>

        {/* Header */}

        <div className='feed__header'>
        <h2>Home</h2>
        </div>
        



        {/* TweetBox */}

        <TweetBox/>

        




        {/* post */}

        {posts.map((post) => (
          <Post
            key={post.text}
            Name={post.Name}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
          />
        ))}
        {/* post */}
        {/* post */}
        {/* post */}
        {/* post */}
        {/* post */}







    </div>
  )
}

export default Feed