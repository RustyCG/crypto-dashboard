import React from 'react'
import {Link} from 'react-router-dom'
import './Sidebar.css'

export default function SideBar() {
    return (
        <div className="sidebar-container">
            <hr/>
            <ul className="sidebar-nav nav-pills">
                <li className="nav-item">
                    <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/coins" className="nav-link text-white">Coin List</Link>
                </li>
                <li className="nav-item">
                    <Link to="/coins/:coinId" className="nav-link text-white" >Coin Details</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className="nav-link text-white">Portfolio</Link>
                </li>
            </ul>
        </div>
    )
}
