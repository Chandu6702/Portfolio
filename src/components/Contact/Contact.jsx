import React from 'react'
import Styles from './Contact.module.css'
import { Link } from 'react-router-dom'
function Contact() {
  return (
    <div id={Styles['container']}>
      <div id={Styles['main']}>
        <Link to='mailto:chandrasekhara067@gmail.com' ><img src='gmail.png' alt='mail icon'/></Link>
        <Link to='https://github.com/Chandu6702' target='_blank'><img src='github.png' alt='github icon'/></Link>
        <Link to='https://www.linkedin.com/in/umachandrasekhara/' target='_blank'><img src='linkedin.png' alt='linkedin icon'/></Link>
      </div>
    </div>
  )
}

export default Contact