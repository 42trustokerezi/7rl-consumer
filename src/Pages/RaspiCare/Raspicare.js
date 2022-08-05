import React from 'react'
import SingleTest from '../../Components/Shared/SingleTests/SingleTest'
import respicare from '../../Assets/img/respcare.jpg'
import Steps from '../../Components/Shared/steps/Steps'
import Contact from '../../Components/Shared/Contact/Contact'

const Raspicare = () => {
  return (
    <div>
        <SingleTest 
            image ={respicare}
            title="RespiCare™" 
            subtitle="Because breathing symbolizes life - we want you to breathe easy!"
            desc="Many microorganisms are known to infect the respiratory tract giving similar signs and symptoms in most cases but requiring different types of treatment. Therefore it is important to make an accurate diagnosis and identify the causative agent. This bundle is made up of several tests that help to rule out or confirm an infection as well as identify the causative organism with one sample and in one-go so that your healthcare provider can begin treating you appropriately. Broad panel testing could be life saving as it saves time and brings about accuracy. More specifically, screening for prolonged flu-like symptoms, bacterial and viral pneumonia, bronchitis, croup, whooping cough, COVID-19 and other common respiratory tract infections."
            price= "NGN45,250"
            test= "RespiCare™"
        />
        <Steps/>
        <Contact/>
    </div>
  )
}

export default Raspicare