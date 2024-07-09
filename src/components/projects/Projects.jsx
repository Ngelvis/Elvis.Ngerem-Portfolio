import React from 'react'
import './Projects.css'
import gallery_1 from '../../assets/edusity.png'
import gallery_2 from '../../assets/rayal_park.png'
import gallery_3 from '../../assets/task-flow.png'
import white_arrow from '../../assets/white-arrow.png'

const Projects = () => {
  return (
    <div className='projects'>
        <div className="gallery">
          <img src={gallery_1} alt="" />
          <img src={gallery_2} alt="" />
          <img src={gallery_3} alt="" />
        </div>
        <a href="https://github.com/Ngelvis" target='_blank'>
          <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
        </a>
    </div>
  )
}

export default Projects