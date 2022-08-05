import React from 'react'
import laptop from "../../../Assets/img/laptop.svg"
import tube from "../../../Assets/img/tube.svg"

import "./steps.css"

const Steps = () => {
  return (
    <div className='step_container'>
        <div className='step_contained'>
            <h1 className='step_header'>How to get these tests in 3 steps</h1>
            <div className='step_wrapper'>
                <div className='step_1'>
                    <div className='step_image'>
                        <img src={laptop} alt="laptop" />
                    </div>
                    <h5>1. Purchase the Test</h5>
                    <p>Choose this or any other test from our list and pay online. If you do not have a doctor, our in-house medical team can guide or refer you to an appropriate physician/ clinic/center and a physician will help review your results.</p>
                </div>
                <div className='step_2'>
                <div className='step_image'>
                    <img src={tube} alt="tube" />
                </div>
                    <h5>2. Provide your Samples</h5>
                    <p>Go to a 7RiverLabs lounge and provide the ID we sent to you via email. Present it at the 7RiverLabs lounge for sample collection.</p>
                </div>
                <div className='step_3'>
                <div className='step_image'>
                    <img src={laptop} alt="laptop"/>
                </div>
                    <h5>3. Get Your Results Online</h5>
                    <p>Securely view your easy-to-understand results and test history in your 7RiverLabs Consumer portal account.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Steps