import React from 'react'
import "./Post.css"
import {Avatar} from "@mui/material"
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"

import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import RepeatIcon from "@mui/icons-material/Repeat"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import PublishIcon from "@mui/icons-material/Bookmark"


function Post({Name,
    username,
    verified,
    text,
image,
avatar}
) {

   

  return (
    <div className='post'>

        <div className='post_avatar'>
            <Avatar src={avatar}/>

        </div>
        <div className='post_body'>
            <div className='post_header'>
                <div className='post_headerText'>
                    <h3>
                        {Name}
                        <span><VerifiedUserIcon className="post_badge" /></span>
                    </h3>

                </div>
                <div className='post_desc'>
                    <p>  {text}</p>

                </div>
                <img className='pic' src={image} alt=''/>
                <div className='post_footer'>
                <RepeatIcon fontSize="small"/>
                <PublishIcon fontSize="small"/>
                    
                <FavoriteBorderIcon fontSize="small"/>
                 
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    
                    




                </div>



            </div>



        </div>





    </div>
  )
}

export default Post