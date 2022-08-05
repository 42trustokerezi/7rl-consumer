import React from 'react'
import "./card.css"
import Button from "../../Button/Button"
import { Link } from 'react-router-dom';

const TestCard = ({image, title, price, desc, url}) => {
    let summary = "";
    if(desc.length > 150){
       summary = desc.slice(0,150);
    }
  return (
    <div className='card_wrapper'>
        <div className='test_imge'>
            <img src={image} />
        </div>
        <div className='test_info_wrapper'>
            <h4>{title}</h4>
            <h3>{price}</h3>
            {
                summary ? (
                    <p>{summary}
                    <Link to={`${url}`}>
                    Read more
                    </Link></p>
                ):
                <p>{desc}</p>
            }
            <Link to={`${url}`}>
                <Button title="Buy Now" bgColor="#F2E14F" />
            </Link>
        </div>
    </div>
  )
}

export default TestCard