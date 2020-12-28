import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import Image from '../../Atoms/Image/Image'

/**
 * Header component render the header links
 */
function Header() { 
    return (
        <div className="header">
            <Link to="/home" className="li tlc"><Image srcImg="./images/Tlc.svg" altText="tlc"/></Link>
            <Link to="/shows" className="li gridIcon"><Image srcImg="./images/grid-icon.svg" altText="shows"/>&nbsp;<span className="shows">Shows</span></Link>
            <Link to="/onNow" className="li onNow"><Image srcImg="./images/live.svg" altText="live" />&nbsp;<span className="shows">OnNow</span></Link>
            <li className="li search"><Image srcImg="./images/search.svg" altText="search" /><span>Search</span></li>
            <Link to="/SignIn" className="li profile"><span>xfinity</span><Image srcImg="./images/loginprofile.svg" altText="loginprofile" /></Link>
        </div>
    )
}

export default Header
