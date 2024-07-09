
import React, {useEffect, useState} from 'react'
import '../navigation/Navbar.css'
import logo from '../../assets/white_logo.png'
import menu_icon from '../../assets/menu-icon.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  
  // Sticky Nav bar
  const [sticky, setSticky] = useState(false);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false)
    })
  },[]);


  //  Hamburger Menu
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }
  
  return (

    
  
  <nav className={`container ${sticky? 'dark-nav' : ''}`}>

      <a href="Hero container"><img src={logo} className='logo' alt=''/></a>
      {/* <img src={logo} className='logo' alt=''/> */}
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='Hero container' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500}>About</Link></li>
        <li><Link to='services' smooth={true} offset={-230} duration={500}>Services</Link></li>
        <li><Link to='projects' smooth={true} offset={-260} duration={500}>Projects</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>

    </nav>
    
  )
}

export default Navbar