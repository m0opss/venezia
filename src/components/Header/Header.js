import React from 'react';
import Nanbar from './Navbar/Navbar'
import TopLine from './TopLine/TopLine'

const Header = () => (
  <div className='header-container'>
    <div className="container">
      <TopLine/>
    </div>
    <Nanbar/>
  </div>
);

export default Header;