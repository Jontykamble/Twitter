import React from 'react'
import "./Widget.css"
import SearchIcon from "@mui/icons-material/Search";


import {
 
 
  TwitterTimelineEmbed,
  TwitterShareButton
  
} from "react-twitter-embed"



function Widget() {




  return (
    <div className='widget'>
      <div className='widget_input'>
        <SearchIcon className="widget_search"/>
        <input placeholder='Search Twitter' type='text'/>
      </div>

      <div className='widgets_con'>
        <h2> What's happening</h2>

       


        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />    

               



      </div>


    </div>
  )
}
// npm i react-twitter-embed

export default Widget