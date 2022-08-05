import React from 'react'
import SingleTest from '../../Components/Shared/SingleTests/SingleTest'
import xtrawellwomen from '../../Assets/img/xtra-woman.jpg'
import Steps from '../../Components/Shared/steps/Steps'
import Contact from '../../Components/Shared/Contact/Contact'

const XtraWellWomen = () => {
  return (
    <div>
        <SingleTest 
        image={xtrawellwomen}
        title="XtraWell™ For Women" 
            subtitle="Giving you so much more for better health outcomes"
            desc="This health check is made up of several tests that measure triglycerides, cholesterol, kidney and liver function, average blood glucose (HbA1c) levels, to assess your risk of developing heart diseases, diabetes, stroke and kidney disease. It is commonly ordered as an annual health screening as it assesses multiple systems and organs to give a picture of general well being."
            price= "NGN45,000"
            test= "XtraWell™ For Women"
        />
        <Steps/>
        <Contact/>
    </div>
  )
}

export default XtraWellWomen