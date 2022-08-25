import React from 'react'
import ContainerBlock from '../components/ContainerBlock'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Story() {
  return (
        <div className='bg-[#dcc3da]'>
          <Navbar />
          <p className='text-7xl text-center font-Finlandica font-bold text-red-700'>Customer Stories</p>
          <div className='py-36'>
            <div className='story 1 lg:flex lg:w-9/12 w-11/12 mx-auto bg-[#b0e7a8] rounded-lg'>
              <div className='lg:flex w-8/12 mx-auto'>
                <img src='../random.png' className='w-60'/>
                <p className='py-10'><span className='text-blue-800 font-bold'>Mr.Random</span> the guy who brought us the Superhuman potion from the wizard tasted a drop of that syrup, He is now working part-time with <span className='text-red-400 font-bold'>THE AVENGERS</span></p>
              </div>
            </div>
            <div className='story 1 lg:flex lg:w-8/12 w-11/12 mx-auto my-5 bg-[#a8cde7] rounded-lg'>
              <div className='lg:flex w-8/12 mx-auto'>
                <img src='../enderman.png' className='w-40'/>
                <p className='py-10'><span className='text-blue-800 font-bold'>Snoozles</span> was one of our first customer, he ordered a Snapple Pie and Teleported, <span className='text-sm'>without paying the bill</span></p>
              </div>
            </div>
            <div className='story 1 lg:flex lg:w-9/12 w-11/12 mx-auto bg-[#e4e7a8] rounded-lg'>
              <div className='lg:flex w-8/12 mx-auto'>
                <img src='../hulk.png' style={{width: "125px"}}/>
                <p className='py-10'>No way... Gamma Radiation is just a theory, <span className='text-green-800 font-bold'>HULK</span> eats our cabRAGE soup every morning.</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
  )
}
