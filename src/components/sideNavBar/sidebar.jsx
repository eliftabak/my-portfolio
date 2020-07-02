import React from 'react';
import SideBarItems from "./sideBarItems";
import Buttons from "./buttons"



export default function Sidebar() {
 return (
  <div className="sidenav">
   <img src={require('./images/eliflogo.png')} style={{ width: "60px" }} />
   <SideBarItems />
   <Buttons />
  </div>
 )
}
