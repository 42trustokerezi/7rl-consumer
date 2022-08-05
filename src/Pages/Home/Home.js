import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Contact from '../../Components/Shared/Contact/Contact'
import Steps from '../../Components/Shared/steps/Steps'
import TestList from '../../Components/Shared/TestList/TestList'

const Home = () => {
  return (
    <div>
        <Hero />
        <TestList  title ='Our Health Checks'/>
        <Steps />
        <Contact />
    </div>
  )
}

export default Home