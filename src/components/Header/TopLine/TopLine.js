import React from 'react';

import {NavLink, Link} from "react-router-dom"
import {Icon, InlineIcon} from '@iconify/react';
import instagramIcon from '@iconify/icons-mdi/instagram';
import vkIcon from '@iconify/icons-mdi/vk';
import facebookIcon from '@iconify/icons-mdi/facebook';
import telegramIcon from '@iconify/icons-mdi/telegram';
import youtubeIcon from '@iconify/icons-mdi/youtube';
import phoneInTalk from '@iconify/icons-mdi/phone-in-talk';
import mapMarker from '@iconify/icons-mdi/map-marker';
import accountIcon from '@iconify/icons-mdi/account';
import cartIcon from '@iconify/icons-mdi/cart';

import Menu from '../../Menu/Menu'

import "./TopLine.scss"

import logo from "images/header-logo.png"

// const menuOptions = [
//   'Распродажа',
//   'Товар в наличии',
//   'Новое поступление',
//   'Под заказ',
//   'Рекомендованное',
//   'Товары в пути'
// ]
// const cityOptions = [
//   'Москва',
//   'Санкт-Петербург',
//   'Краснодар',
//   'Екатеринбург',
//   'Казань',
//   'Крым'
// ]

const menuOptions = {
    'sales' : 'Распродажа',
    '11' : 'Товар в наличии',
    '22' : 'Новое поступление',
    '33' : 'Под заказ',
    '44' : 'Рекомендованное',
    '55' : 'Товары в пути'
  }
  
  const cityOptions = {
    'sa': 'Москва',
    '01' :'Санкт-Петербург',
    '02' :'Краснодар',
    '03' :'Екатеринбург',
    '04' :'Казань',
    '05' :'Крым',
  }

const TopLine = () => (
  <div className='top-line'>

    <div className="top-line__logo">
      <Link to='/'> <img src={logo} alt=""/> </Link>
    </div>
    <div className="top-line__social">
      <div className="top-line__phone">
        <Icon icon={phoneInTalk} color="#C98505"/>
        +7 (499) 645-98-85
      </div>
      <div className="top-line__soc-icons">
        <Icon icon={vkIcon} color="#C98505"/>
        <Icon icon={instagramIcon} color="#C98505"/>
        <Icon icon={facebookIcon} color="#C98505"/>
        <Icon icon={telegramIcon} color="#C98505"/>
        <Icon icon={youtubeIcon} color="#C98505"/>
      </div>
    </div>
    <div className="top-line__city">
      <Icon icon={mapMarker} color="#C98505"/>
      <Menu options={cityOptions}/>
    </div>
    <div className="top-line__search">
      <input className="top-line__input" placeholder="" type="text" name="" id=""/>
    </div>
    <div className="top-line__contacts">
      <NavLink
        to="/contacts"
        className='top-line__contacts'
        activeClassName='top-line__contacts -active'>
        Контакты
      </NavLink>
    </div>
    <div className="top-line__menu">
      <Menu options={menuOptions}/>
    </div>
    <div className="top-line__account">
        <Icon icon={accountIcon} color="#C98505" width="2em" height="2em" />
    </div>
    <div className="top-line__basket">
        <Icon icon={cartIcon} color="#C98505" width="1.8em" height="1.8em" />
    </div>
  </div>
);

export default TopLine;