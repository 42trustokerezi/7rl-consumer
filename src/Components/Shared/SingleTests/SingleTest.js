import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../Button/Button'
import HowToBuy from '../HowToBuy'
import "./singleTest.css"

const SingleTest = ({title, subtitle, desc, price, image, test}) => {
  return (
    <div className='single_tst-container'>
        <div className='single_tst-hero'>
            <div className='tst-hero-left'>
                <h1>{title}</h1>
                <h3>{subtitle}</h3>
                <p>{desc}</p>
                <div className='price-buy'>
                    <h2>{price}</h2>
                        <HowToBuy  test={test}/>
                </div>
            </div>
            <div className='tst-hero-right'>
                <img src={image} alt="header"/>
            </div>
        </div>
        {/* content */}
        <div className='tst-content'>
            <div className='test-header'>
                <h2>Test included in this health check</h2>
            </div>
        <div className='test-included'>
                <div className='test-inc-left'>
                    <div className="col-md-6">
                        <ul className="test-details-down-ul">
                            <li className="test-details-down-li">
                            <b>Complete Blood Count:</b> This panel assesses the quality and quantity of blood cells in our body. Abnormality in any of the parameters could be indicative of an ongoing anaemia, infection, inflammation, cancer,or bleeding disorders
                            </li>
                            <li className="test-details-down-li">
                            <b>Lipid Profile:</b> This test quantifies the level of cholesterol and other fats in your blood. Abnormal levels could make your blood vessels unhealthy thereby increasing the risk of heart disease or stroke
                            </li>
                            <li className="test-details-down-li">
                            <b>Liver Function Test:</b> The liver plays a key role in your body’s metabolism among other functions and this test quantifies the levels of proteins and enzymes produced by the liver to assess its function.
                            </li>
                            <li className="test-details-down-li">
                            <b>Erythrocyte Sedimentation Rate:</b> In this test, erythrocytes (also known and red blood cells) are analyzed to determine if there is an ongoing inflammatory process which may be seen in autoimmune diseases like Rheumatoid Arthritis
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='test-inc-right'>
                    <div className="col-md-6">
                            <ul className="test-details-down-ul">
                            <li className="test-details-down-li">
                                <b>Glucose:</b> While sugar plays a vital role in the normal functioning of our cells, providing us with energy, abnormally high levels have a detrimental effect on our long term health. Diabetes Mellitus is a disease that results from a dysfunction of our blood glucose regulation and this test quantifies blood glucose
                                </li>
                                <li className="test-details-down-li">
                                <b>Renal Function (Sodium, Potassium, Chloride, Urea, Creatinine):</b>This test is done to assess the function of your kidneys. The kidneys play an important role in ridding your blood of waste through urine, thereby acting as a “filter”. Abnormalities in kidney function could lead to a build up of harmful substances in your blood which may be toxic to your organs.
                                </li>
                                <li className="test-details-down-li">
                                <b>Urinalysis:</b> Urine is a product of the filtration that has been carried out by the kidneys. This test is used to evaluate the quality of urine which could indicate high blood levels of substances like sugar and protein among other things. This could serve as a pointer towards an conditions like an ongoing infection or Diabetes Mellitus
                                </li>
                            </ul>
                    </div>
                </div>
            </div>

            {/* Sample type */}
            <div className='sample-data'>
                <div className='sample-dataset'>
                    <h2>Sample type</h2>
                    <p>Blood and Urine</p>
                </div>
                <div className='sample-dataset'>
                    <h2>Collection Method</h2>
                    <p>Visit the 7RiverLabs Lounge</p>
                </div>
                <div className='sample-dataset'>
                    <h2>Who is the health check for?</h2>
                    <p>18+</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleTest