import React from 'react'
import SingleTest from '../../Components/Shared/SingleTests/SingleTest'
import stiGold from '../../Assets/img/sti-gold.png'

const StiGold = () => {
  return (
    <div>
        <SingleTest 
            image = {stiGold}
            title="Sti Gold" 
            subtitle="Because you health and vitality matters - Knowing your status is crucial!"
            desc="This health check is made up of several tests that measure the overall health of your blood,cholesterol, triglycerides, kidney function, to assess the overall health of your body and including organs and hormones that influence metabolism and is commonly ordered as an annual health screening as it assesses multiple systems and organs to give a picture of general well being."
            price= "NGN30,000"
            test= "Sti Gold"
        />
    </div>
  )
}

export default StiGold