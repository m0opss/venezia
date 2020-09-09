import React from 'react'
import { NavLink } from 'react-router-dom'


export const Navbar = () => (
    <nav className="navbar">
        <div className="navbar-name">
            VeneziaStones
        </div>
        <ul className="navbar-nav">
            <li className="nav-item"><NavLink to="/" className="nav-link">Главная</NavLink></li>
            <li className="nav-item"><NavLink to="#" className="nav-link">Что-то</NavLink></li>
            <li className="nav-item"><NavLink to="#" className="nav-link">тут</NavLink></li>
            <li className="nav-item"><NavLink to="#" className="nav-link">не так</NavLink></li>
            <li className="nav-item"><NavLink to="/about" exact className="nav-link">О компании</NavLink></li>
        </ul>
    </nav>
)