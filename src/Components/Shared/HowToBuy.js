import React, {useState} from 'react'
import Button from '../Button/Button'
import BuyTestModal from '../Modal/BuyTestModal';

const HowToBuy = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <>
    <Button 
        title="BUY NOW"
        bgColor="#F2E14F"
        className="test-buy-now-btn"
        data-toggle="modal"
        data-target="#exampleModal"
        onClickHandler={ toggleModal }
    />
    {
        isModalOpen && (
            <BuyTestModal testName={props.test} closeModal={toggleModal} />
        )
    }
    </>
  )
}

export default HowToBuy