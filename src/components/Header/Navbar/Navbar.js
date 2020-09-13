import React from 'react'
import {NavLink} from 'react-router-dom'

import './Navbar.scss'

const Navbar = () => (
  <nav className="navbar">
    <ul className="navbar-menu">
      <li className="navbar-menu__item">
        <NavLink to="/" className="navbar-menu__link">Главная</NavLink>
      </li>
      <li className="navbar-menu__item">
        <NavLink to="#" className="navbar-menu__link">Что-то</NavLink>
      </li>
      <li className="navbar-menu__item">
        <NavLink to="#" className="navbar-menu__link">тут</NavLink>
      </li>
      <li className="navbar-menu__item">
        <NavLink to="#" className="navbar-menu__link">не так</NavLink>
      </li>
      <li className="navbar-menu__item">
        <NavLink to="/about" exact className="navbar-menu__link">О компании</NavLink>
      </li>
    </ul>

  </nav>
)

export default Navbar