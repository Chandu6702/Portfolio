import React from 'react'
import Styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className={Styles['nav-bar']}>
      <p>Sarma's Portfolio</p>
      <div id={Styles['nav-links']}>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='about'>About</NavLink>
        <Link to='https://github.com/Chandu6702' target='_blank'>Projects</Link>
        <NavLink to='contact'>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Header