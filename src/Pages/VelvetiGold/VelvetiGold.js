import React from 'react'
import SingleTest from '../../Components/Shared/SingleTests/SingleTest'
import velvgold from '../../Assets/img/velveti-gold.jpg'
import Steps from '../../Components/Shared/steps/Steps'
import Contact from '../../Components/Shared/Contact/Contact'

const VelvetiGold = () => {
  return (
    <div>
        <SingleTest 
            image = {velvgold}
            title="Velveti™ Gold" 
            subtitle="Clear all doubts"
            desc="This health check is made up of several tests that will screen you for the presence of organisms,such as chlamydia, HIV, Hepatitis B and C viruses, which can be transferred through unprotected sexual exposure. In addition to this, the health check will screen for syphilis, gonorrhea, herpes and other causative organisms for STIs. It is suited for pre-marital or pre-employment screening."
            price= "NGN30,200"
            test= "Velveti™ Gold"
        />
        <Steps/>
        <Contact/>
    </div>
  )
}

export default VelvetiGold