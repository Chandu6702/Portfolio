import React from 'react'
import Styles from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <nav className={Styles['nav-bar']}>
      <NavLink t0='/'>Sarma's Portfolio</NavLink>
      <div id={Styles['nav-links']}>
        <NavLink to='/' className={({isActive})=>(isActive?Styles['active']:"")}>Home</NavLink>
        <NavLink to='about' className={({isActive})=>(isActive?Styles['active']:"")}>About</NavLink>
        <Link to='https://github.com/Chandu6702?tab=repositories' target='_blank'>Projects</Link>
        <NavLink  to='contact' className={({isActive})=>(isActive?Styles['active']:"")}>Contact</NavLink>
      </div>
    </nav>
  )
}

export default Header