import React from 'react'
import ContainerBlock from '../components/ContainerBlock'

export default function New() {
  return (
    <ContainerBlock>
        <div className='new-section'>
          <div className='lg:flex h-[90vh] w-11/12 lg:w-8/12 py-32 mx-auto'>
            <div className='w-7/12'>
                <p className='text-7xl font-Finlandica text-green-600 font-semibold'>Simple, </p><p className='text-7xl font-Finlandica text-green-600 py-5 font-semibold'>Yet Not Simple </p><p className='text-purple-500 text-7xl font-Finlandica font-bold'>BURGER</p>
                <p  className='font-Finlandica py-10 text-xl'>Burgers are of different heights, that is its superpower- <span>Shape Shifting</span></p>
            </div>
            <div className='w-5/12'>
                <img src='../burger.png' className='rounded-lg'/>
            </div>
          </div>
          <div className='lg:flex w-fit lg:px-60 justify-between py-40 mx-auto bg-[#DCC3C3]'>
            <div className='w-5/12'>
                <img src='../wizard.png'  className='rounded-lg'/>
            </div> 
            <div className='w-6/12 font-Finlandica'>
              <p className='text-xl'>Recently, one of our core member <span>Mr. Random</span> was walking through the dark streets of <span>Diagonally</span></p>
              <p className='text-xl'>What he saw amazed us!! Here is his observation-</p>
              <div className='text-xl'>
                An alchemist, not less than 150 years old, was stirring a potion. He was singing a song, the ingredients which Mr. Random was able to understand were:
                <ul className='py-5 text-lg'>
                  <li>ToothPaste</li>
                  <li>Golden Gloss Hair Shampoo</li>
                  <li>Canary Seeds</li>
                  <li>Chilli Powder</li>
                  <li>Grease</li>
                  <li>Super White Washing Powder</li>
                  <li>Served with Fresh Coriander</li>
                  <li className='py-3'>Now just stir and stir and stir and stir... for only 2 hours.</li>
                </ul>

                <p className='text-sm'>For those who are thinking to create it - One Ingredient is missing </p>
              </div>
            </div>
          </div>
        </div>
    </ContainerBlock>
  )
}
