import React from 'react'
import Button from '../../Components/Button/Button'
import './login.css'

const Login = () => {
  return (
    <div className='login-container'>
        <div className='login-wrapper'>
            <h2>Login</h2>
            <div className='form-field'>
                <div className='form-grp'>
                    <input  placeholder='Enter your email'/>
                </div>
                <div className='form-grp'>
                    <input placeholder='Enter your password'/>
                </div>
            </div>
            <p>Forgot password? <a href='#'>Click here</a></p>
            <Button title="Login"  bgColor="#F2E14F"/>
        </div>
    </div>
  )
}

export default Login