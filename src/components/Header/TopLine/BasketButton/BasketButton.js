import React from 'react';

import {Icon} from '@iconify/react';
import {Link} from "react-router-dom"

import cartIcon from '@iconify/icons-mdi/cart';
import "./BasketButton.scss"

const BasketButton = props => {
  return (
    <Link to='/basket' className="top-line__basket">
      <Icon
        className="top-line__basket-icon"
        icon={cartIcon}
        color="#C98505"
        width="1.5em"
        height="1.5em"/>
      <div className="top-line__basket-counter">{props.basket_counter}</div>
    </Link>
  )
}
export default BasketButton