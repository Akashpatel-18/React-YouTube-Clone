import React from 'react'
import {NavLink} from 'react-router-dom'
import './Slider.css'

const Slider = () => {
  return (
    <div className='sliderContainer'>
        <ul className="sliderList">
        <li className='sliderListItem'>
                <NavLink exact className="sliderLink" to="/">
                    <div className="sliderListText">Home</div>
                </NavLink>
            </li>            <li className='sliderListItem'>
                <NavLink exact className="sliderLink" to="/">
                    <div className="sliderListText">Music</div>
                </NavLink>
            </li>            <li className='sliderListItem'>
                <NavLink exact className="sliderLink" to="/">
                    <div className="sliderListText">Gaming</div>
                </NavLink>
            </li>            <li className='sliderListItem'>
                <NavLink exact className="sliderLink" to="/">
                    <div className="sliderListText">Sports</div>
                </NavLink>
            </li>            <li className='sliderListItem'>
                <NavLink exact className="sliderLink" to="/">
                    <div className="sliderListText">Motivation</div>
                </NavLink>
            </li>            <li className='sliderListItem'>
                <NavLink exact className="sliderLink" to="/">
                    <div className="sliderListText">News</div>
                </NavLink>
            </li>            <li className='sliderListItem'>
                <NavLink exact className="sliderLink" to="/">
                    <div className="sliderListText">TMKOC</div>
                </NavLink>
            </li>            <li className='sliderListItem'>
                <NavLink exact className="sliderLink" to="/">
                    <div className="sliderListText">Recently Uploaded</div>
                </NavLink>
            </li> 
          
            </ul>
    </div>
  )
}

export default Slider