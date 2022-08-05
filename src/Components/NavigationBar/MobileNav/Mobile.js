import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
import './index.css'

const Mobile = ({toggleMenu,toggleModal}) => {
  return (
    <div className='mobile-nav-container'>
        <div className='mobile-nav-wrapper'>
            <div className='mobile-cancel'><button onClick={toggleMenu}>X</button></div>
            <ul>
                <li><Link to="/products/all" className='nav-link'>Our Tests</Link></li>
                <li><Link to='#' className='nav-link' onClick={toggleModal}>Our Locations</Link></li>
                <li><Link to='#' className='nav-link'>Contact Us</Link></li>
                <li><Link to='#'><Button title= "Login" borderColor="#1B249E"/></Link></li>
                <li><Link to='#'><Button title="Order a Test" bgColor="#F2E14F"/></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Mobile