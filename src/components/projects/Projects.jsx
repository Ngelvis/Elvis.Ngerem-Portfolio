import React from 'react'
import './Projects.css'
import gallery_1 from '../../assets/recipix.png'
import gallery_2 from '../../assets/racehopper.png'
import white_arrow from '../../assets/white-arrow.png'

const Projects = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={gallery_1} alt="" />
            <img src={gallery_2} alt="" />
        </div>
        <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
    </div>
  )
}

export default Projects