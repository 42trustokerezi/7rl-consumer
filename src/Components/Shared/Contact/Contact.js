import React from 'react'
import Button from '../../Button/Button'
import "./contact.css"

const Contact = () => {
  return (
    <div className='contact_comp'>
        <div className='contact_comp_wrapped'>
            <div className='contact_comp_right'>
                <h1>Do you need help choosing the right test for you?</h1>
            </div>
            <div className='contact_comp_left'>
                <p>Our board-certified genetic counsellors are available to provide peersonalized and valuable insight into what is the most appropriate test for you and what our molecular genetic test results mean for you.</p>
                <a href='https://7riverlabs.com/contact/' target="_blank" rel="noreferrer">
                    <Button title="Contact Us" bgColor="#F2E14F"/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Contact