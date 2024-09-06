import React, { useEffect, useState } from 'react'
import './Nav.css';
import logo from '../../assets/logo.png';
import menu from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Nav = () => {

    const [sticky,setSticky] = useState(false);

    useEffect(()=>{
         window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setSticky(true):setSticky(false);
         })
    },[]);
    const [mobilemenu,setMobilemenu] = useState(false);
    const toggleMenu= ()=>{
      mobilemenu ? setMobilemenu(false) : setMobilemenu(true);
    }
  return (
    <nav className={`container ${sticky? 'dark-nav': ''}`}>
        <img className='logo' src={logo} alt=''/>
        <ul className={mobilemenu?'':"hide-mobile-menu"}>
            <li><Link to = 'hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to = 'program' smooth={true} offset={-260} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li> 
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
            <li><Link to='testimonial' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>

            <li><Link to='contect' smooth={true} offset={-260} duration={500} className='btn'>Contect us</Link></li>
        </ul>
        <img src={menu} alt='' className='menu-icon' onClick={toggleMenu}/>

    </nav>
  );
}

export default Nav;