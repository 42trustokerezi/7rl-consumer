import React from 'react'
import Button from '../Button/Button'
import './index.css'

const BuyTestModal = ({testName, closeModal}) => {
  return (
    <div className='modal-bg'>
        <div className='modal-container'>
            <div className='modal-wrapper'>
                <div className='content-wrapper'>
                    <div className='modal-header'>
                        <h3>Provide details to complete payment</h3>
                        <button className='cancel' onClick={closeModal}>X</button>
                    </div>
                    <div className='modal-form'>
                        <div className='frm-group'>
                            <label>Enter your email address</label>
                            <input type='text' className='form-input' placeholder='Email address' required />
                        </div>
                        <div className='frm-group'>
                            <label>Test</label>
                            <input type='text' className='form-input' value={testName} readOnly required />
                        </div>
                    </div>
                    <Button title="Pay Now" width="100%" bgColor="#F2E14F"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BuyTestModal