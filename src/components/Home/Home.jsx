import React from 'react'
import Styles from './Home.module.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section id={Styles['section']}>
    <div id={Styles['main']}>
      <div id={Styles['container']}>
        <p>Hello👋,my name is Uma Chandra Sekhara Sarma Thadepalli.I am FullStack Developer and Data enthusiastic</p>
        <img src='me.png' alt='Profile Pic'/>
      </div>
      <Link to="Uma_Chandra_Sekhara_Sarma_Thadepalli_Resume.pdf" target='_blank'>Download Resume</Link>
    </div>
    </section>
  )
}

export default Home