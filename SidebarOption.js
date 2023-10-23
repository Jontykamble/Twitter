import React from 'react'
import "./SidebarOp.css"



function SidebarOption({ active, text, Icon }) {
  return (
    <div className={`sidebarrrr ${active && "sidebarrrr--active"}`}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}


export default SidebarOption