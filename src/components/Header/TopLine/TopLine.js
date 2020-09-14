import React from 'react';

import {NavLink} from "react-router-dom"

import SocialContacts from './SocialContacts/SocialContacts'
import ChooseCity from './ChooseCity/ChooseCity'
import CustomMenu from './CustomMenu/CustomMenu'
import Logo from './Logo/Logo'
import AccountButton from './AccountButton/AccountButton'
import BasketButton from './BasketButton/BasketButton'

import "./TopLine.scss"

const TopLine = (props) => (
  <div className='top-line'>

    <Logo />
    <SocialContacts />
    <ChooseCity />
    <div className="top-line__search">
      <input className="top-line__input" placeholder="" type="text" name="" id=""/>
    </div>
    <NavLink
      to="/contacts"
      className='top-line__contacts'
      activeClassName='top-line__contacts -active'>
      Контакты
    </NavLink>
    <CustomMenu/>
    <AccountButton />
    <BasketButton basket_counter='2'/> {/* Здесь считать количество в корзине*/}
    
  </div>
);

export default TopLine;