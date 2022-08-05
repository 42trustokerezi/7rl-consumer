import React, {useEffect, useState} from 'react';
import "./navStyles.css";
import Logo from "../../Assets/logo.svg"
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import LocationModal from '../Modal/LocationModal';
import Mobile from './MobileNav/Mobile';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSolid, faBars} from '@fortawesome/free-solid-svg-icons'


const UserNav = () => {
  const [mobile, setMobile] = useState(false)
  // const mobView = setMobile(!mobile)
  function toggleMenu(){
    setMobile(!mobile)
  }

  const [isModalOpen, setIsModalOpen]  = useState(false);
    function toggleModal(){
        setIsModalOpen(!isModalOpen)

    }

    useEffect(()=>{
        setMobile()
    },[])
  return (
    <nav className='nav_container'>
      <div className='logo'>
        <Link to={'/'}><img src={Logo}/></Link></div>
      <div className={`right ${mobile && ('nav-mobile')}` }>
            <ul>
              <li><Link to="/products/all" className='nav-link'>Our Tests</Link></li>
              <li><Link to='#' className='nav-link' onClick={toggleModal}>Our Locations</Link></li>
              <li><Link to='#' className='nav-link'>Contact Us</Link></li>
              <li><Link to='#'><Button title= "Login" borderColor="#1B249E"/></Link></li>
              <li><Link to='#'><Button title="Order a Test" bgColor="#F2E14F"/></Link></li>
            </ul>
      </div>
      <button onClick={toggleMenu} className='open'><FontAwesomeIcon icon={ faBars} /></button>
        {mobile && <Mobile  toggleMenu={toggleMenu} toggleModal={toggleModal} />}
      {isModalOpen && <LocationModal isModalOpen={isModalOpen} toggleModal={toggleModal} />}
    </nav>
  )
}
 
export default UserNav