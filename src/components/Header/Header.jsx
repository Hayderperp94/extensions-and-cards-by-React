import './Header.css'
import React from 'react'
import logo from './../../assets/logos/logo.svg'
import moon from './../../assets/icons/icon-moon.svg'

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} alt="" />
      <img src={moon} alt="" />
    </div>
  )
}

export default Header
