import React from 'react'
import '../services/Services.css'
import program_1 from '../../assets/code.jpg'
import program_2 from '../../assets/seo.jpg'
import program_3 from '../../assets/ui.jpg'
import program_icon_1 from '../../assets/code-icon.png'
import program_icon_2 from '../../assets/seo-icon.png'
import program_icon_3 from '../../assets/ui-icon.png'


const Services = () => {
  return (
    <div className='programs'>
        <div className='program'>
            <img src={program_1} alt=''/>
            <div className='caption'>
                <img src={program_icon_1} alt=''/>
                <p>Web Development</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_2} alt=''/>
            <div className='caption'>
                <img src={program_icon_2} alt=''/>
                <p>Search Engine Optimization</p>
            </div>
        </div>
        <div className='program'>
            <img src={program_3} alt=''/>
            <div className='caption'>
                <img src={program_icon_3} alt=''/>
                <p>UI/ UX Design</p>
            </div>
        </div>
    </div>
  )
}

export default Services