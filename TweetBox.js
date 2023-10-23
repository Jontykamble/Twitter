import React, { useState } from 'react'

import "./Tweetbox.css"
import { Button,Avatar } from '@mui/material'
import db from './firbase'

function TweetBox() {
  const [tweetmessage, setTweet]=useState("")
  const [tweetImage, setImg]=useState("")


  const sendTweet=(e)=>{

    e.preventDefault();//dont refersh the page
    db.collection('post').add({

      Name:"Jonty kamble",
      verified:true,
      text:tweetmessage,
      image:tweetImage,
      avatar:"jk.jpeg"




    })

    setImg("");
   setTweet("");


     

  }



  return (
    <div className='tweetBox'>

        <form>

            <div className='tweetBox_input'>
                <Avatar src='jk.jpeg'/>
                <input  onChange={e=>setTweet(e.target.value)}value={tweetmessage} placeholder="What's happening?"type='text'/>
           



            </div>
            <input onChange={e=>setImg(e.target.value)} value={tweetImage}className='tweetBox_imgI' placeholder="Enter image URL"type='text'/>

            <Button onClick={sendTweet} type="submit"className='tweetBox_button'>Tweet</Button>
        </form>





    </div>
  )
}

export default TweetBox