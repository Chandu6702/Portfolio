import React from 'react'
import Styles from './About.module.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div id={Styles['wrapper']}>
    <section id={Styles['section']}>
    <div id={Styles['main']}>
      <div id={Styles['container']}>
        <p>Hello,my name is Uma Chandra Sekhara Sarma Thadepalli.I am FullStack Developer and Data enthusiastic</p>
        <img src='me.png' alt='Profile Pic'/>
      </div>
      <Link to="Uma_Chandra_Sekhara_Sarma_Thadepalli_Resume.pdf" target='_blank'>Download Resume</Link>
    </div>
    </section>
    <hr/>
    <h1><u>Skills</u></h1>
    <section id={Styles['skills']}>
      <p><h4>Frontend:</h4>HTML, CSS, JavaScript, React.js</p>
      <p><h4>Backend:</h4>Node.js,Express.js</p>
      <p><h4>Database:</h4>MongoDB</p>
      <p><h4>DataScience:</h4>Machine Learning</p>
    </section>
    </div>
  )
}

export default About