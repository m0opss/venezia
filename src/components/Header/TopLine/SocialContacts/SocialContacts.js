import React from 'react';

import {Link} from "react-router-dom"
import {Icon} from '@iconify/react';
import instagramIcon from '@iconify/icons-mdi/instagram';
import vkIcon from '@iconify/icons-mdi/vk';
import facebookIcon from '@iconify/icons-mdi/facebook';
import telegramIcon from '@iconify/icons-mdi/telegram';
import youtubeIcon from '@iconify/icons-mdi/youtube';
import phoneInTalk from '@iconify/icons-mdi/phone-in-talk';

import "./SocialContacts.scss"

const accentColor = "#C98505"

const SocialContacts = props => {
  return (
    <div className="top-line__social">
      <div className="top-line__phone">
        <Icon icon={phoneInTalk} color={accentColor} width="1.5em" height="1.5em"/>
        +7 (499) 645-98-85
      </div>
      <div className="top-line__soc-icons">
        <Link to='#'><Icon icon={vkIcon} color={accentColor}/></Link>
        <Link to='#'><Icon icon={instagramIcon} color={accentColor}/></Link>
        <Link to='#'><Icon icon={facebookIcon} color={accentColor}/></Link>
        <Link to='#'><Icon icon={telegramIcon} color={accentColor}/></Link>
        <Link to='#'><Icon icon={youtubeIcon} color={accentColor}/></Link>
      </div>
    </div>
  )
}
export default SocialContacts