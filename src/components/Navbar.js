import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

export default function NavBar() {
    return (
        <div className="navbar-container">
            <div className="navbar-brand">
                <svg className="navbar-logo">Logo</svg>
                <span className="navbar-name">CoreCoin</span>
            </div>
            <input className="navbar-search" type="text" placeholder="Search" aria-label="Search"/>
            <div className="navbar-user">
                <div className="navbar-item">
                    {/* <a className="navbar-link px-3" href="">Sign out</a> */}
                </div>
            </div>
        </div>
    )
}
