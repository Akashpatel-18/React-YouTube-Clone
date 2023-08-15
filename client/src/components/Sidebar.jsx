import React from 'react'
import {NavLink} from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
        <div className="sidebarWrapper">
            <ul className="sidebarList">
            <li className='sidebarListItem'>
                    <NavLink exact className="sidebarLink" to="/">
                        <div className="sidebarListText">Home</div>
                    </NavLink>
                </li>                <li className='sidebarListItem'>
                    <NavLink exact className="sidebarLink" to="/video">
                       <div className="sidebarListText">Music</div>
                    </NavLink>
                </li>                <li className='sidebarListItem'>
                    <NavLink exact className="sidebarLink" to="/video">
                       <div className="sidebarListText">Gaming</div>
                    </NavLink>
                </li>                <li className='sidebarListItem'>
                    <NavLink exact className="sidebarLink" to="/video">
                       <div className="sidebarListText">Sports</div>
                    </NavLink>
                </li>                <li className='sidebarListItem'>
                    <NavLink exact className="sidebarLink" to="video">
                       <div className="sidebarListText">Motivation</div>
                    </NavLink>
                </li>                <li className='sidebarListItem'>
                    <NavLink exact className="sidebarLink" to="/video">
                       <div className="sidebarListText">News</div>
                    </NavLink>
                </li>                <li className='sidebarListItem'>
                    <NavLink exact className="sidebarLink" to="/video">
                        <div className="sidebarListText">TMKOC</div>
                    </NavLink>
                </li>                <li className='sidebarListItem'>
                    <NavLink exact className="sidebarLink" to="/video">
                        <div className="sidebarListText">Recently Uploaded</div>
                    </NavLink>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Sidebar