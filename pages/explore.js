import React from 'react'
import ContainerBlock from '../components/ContainerBlock'
import DocData from '../components/DocData'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const explore = () => {
  return (
      <div className='pb-[5rem] bg-[#DCC3C3]'>
        <Navbar />
        <DocData />
        <Footer />
      </div> 
  )
}

export default explore