import React from 'react'
import SingleTest from '../../Components/Shared/SingleTests/SingleTest'
import velvessential from '../../Assets/img/velveti-essential.jpg'
import Steps from '../../Components/Shared/steps/Steps'
import Contact from '../../Components/Shared/Contact/Contact'

const VelvetiEssential = () => {
  return (
    <div>
       <SingleTest 
        image = {velvessential}
        title="Velveti™ Essential" 
            subtitle="Because sexual health matters to you, your partner and family."
            desc="This health check is made up of several tests that will screen you for the presence of organisms,such as chlamydia, HIV, Hepatitis B and C viruses, which can be transferred through unprotected sexual exposure."
            price= "NGN11,300"
            test= "Velveti™ Essential"
       />
       <Steps />
       <Contact/>
    </div>
  )
}

export default VelvetiEssential