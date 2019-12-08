import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Header = () => {
  return (
    <header id="header">
      <Link to="/" >
        <Logo />
      </Link>
    </header>
  )
}

export default Header