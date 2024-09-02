import React from 'react'
import { NavLink } from 'react-router-dom';
import "./userMenu.css"

const UserMenu = () => {
  return (
    <div className="text-center userMenu">
      <div className="list-group">
        <h4>Royal Jewellery</h4>
        <NavLink
          to="/dashboard/user"
          className=""
          style={{color:"black",textDecoration:"none",border:"1px solid rgb(203, 198, 198)", padding:"10px",backgroundColor:"transparent"}}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/dashboard/user/profile"
          className="list-group-item list-group-item-action"
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/user/orders"
          className="list-group-item list-group-item-action"
        >
          Orders
        </NavLink>
        <NavLink
          to="/dashboard/abc"
          className="list-group-item list-group-item-action"
        >
          Support
        </NavLink>
      </div>
      <img src='/images/userMenu.gif' style={{width:"100%",marginTop:"30px",height:"260px"}}/>
    </div>
  )
}

export default UserMenu