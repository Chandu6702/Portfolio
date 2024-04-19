import React from "react";
import Styles from "./About.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div id={Styles["wrapper"]}>
      <section id={Styles["section"]}>
        <div id={Styles["main"]}>
          <div id={Styles["container"]}>
            <p>
              Hello,my name is Uma Chandra Sekhara Sarma Thadepalli. I am a CS undergraduate specialized in AI & ML. I have a keen knowledge in Full Stack Web development and Data Science.
            </p>
            <img src="me.png" alt="Profile Pic" />
          </div>
          <Link
            to="/public/Uma_Chandra_Sekhara_Sarma_Thadepalli_Resume.pdf"
            target="_blank"
          >
            Download Resume
          </Link>
        </div>
      </section>
      <hr />
      <h1>
        <u>Skills</u>
      </h1>
      <section id={Styles["skills"]}>
        <p><strong>Frontend :</strong> HTML, CSS, JavaScript, React.js</p>
        <p><strong>Backend :</strong> Node.js, Express.js</p>
        <p><strong>Database :</strong> MongoDB</p>
        <p><strong>DataScience :</strong> Machine Learning</p>
      </section>
    </div>
  );
}

export default About;
