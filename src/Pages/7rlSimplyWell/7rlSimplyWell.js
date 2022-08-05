import React from 'react'
import SingleTest from '../../Components/Shared/SingleTests/SingleTest'
import simplywell from "../../Assets/img/simplywell.jpg"
import Steps from '../../Components/Shared/steps/Steps'
import Contact from '../../Components/Shared/Contact/Contact'

const SimplyWell = () => {

    
    
  return (
    <div>
        <SingleTest 
            title="SimplyWell" 
            subtitle="Because you health and vitality matters - Knowing your status is crucial!"
            desc="This health check is made up of several tests that measure the overall health of your blood,cholesterol, triglycerides, kidney function, to assess the overall health of your body and including organs and hormones that influence metabolism and is commonly ordered as an annual health screening as it assesses multiple systems and organs to give a picture of general well being."
            price= "NGN30,000"
            test= "SimplyWell"
            image = {simplywell}
            />
            <Steps/>
            <Contact />
            </div>
  )
}

export default SimplyWell