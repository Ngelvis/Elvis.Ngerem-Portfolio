import React from 'react'
import './About.css';
import about_img from '../../assets/avatar.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about_img'/>
      </div>
      <div className="about-right">
        {/* <h3>ABOUT ME</h3> */}
        <h2>ABOUT ME</h2>
        <p>
          As a web developer with a master's degree in electrical engineering, I bring a unique blend of technical expertise and creativity to my work. 
          My background in electrical engineering has equipped me with strong problem-solving skills and a deep understanding of technology.  
        </p>

        <p>
          I am passionate about creating elegant and user-friendly web experiences. With proficiency in HTML, CSS, JavaScript, and various frontend frameworks, 
          I strive to build responsive and visually appealing websites that meet both user needs and business objectives.
        </p>

        <p>
          My journey into frontend development began during my graduate studies, where I discovered my passion for web development while working on projects 
          that involved designing and implementing user interfaces for embedded systems.
        </p>

        {/* <a href="/" className="btn dark-btn">More</a> */}
      </div>
    </div>
  )
}

export default About