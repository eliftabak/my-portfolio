import React from 'react'
import SideBarItems from './SideBarItems'
import Buttons from './Buttons'
import '../../App.css'
import './Sidebar.css'

export default function Sidebar() {
  return (
    <div className="sidenav">
      {/* <img src={require("./images/eliflogo.jpg")} style={{width: '60px'}} /> */}
      <SideBarItems />
      <Buttons />
    </div>
  )
}
