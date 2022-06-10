import React from 'react'
import { Icon5 } from '../../../pages/icon5'
import { Icon6 } from '../../../pages/icon6'
import { Icon7 } from '../../../pages/icon7'
import { Icon8 } from '../../../pages/icon8'

function Project() {
  return (
    <section className='-mt-20 mx-10 bg-[#086AD7] rounded-lg z-10'>
    <div id="services" className='pt-16 grid grid-cols-4  z-10 flex relative w-full pb-6'>
      <div className='py-4 px-8 text-white flex flex-col items-center'>
        <Icon5></Icon5>
        <div>
          <span className='text-3xl font-medium pl-20 text-white'>+</span>
          <h1 className='font-medium text-6xl text-white text-center'>368</h1>
          <h3 className='pb-16 text-white text-center'>Project Completed</h3>
        </div>
      </div>

      <div className='py-4 px-8 text-white flex flex-col items-center'>
        <Icon6></Icon6>
        <div>
          <span className='text-3xl font-medium pl-20 text-white'>+</span>
          <h1 className='font-medium text-6xl text-white text-center'>785</h1>
          <h3 className='text-white text-center'>Expert Consultants</h3>
        </div>
      </div>

      <div className='py-4 px-8 text-white flex flex-col items-center'>
        <Icon7></Icon7>
        <div>
          <span className='text-3xl font-medium pl-20 text-white'>+</span>
          <h1 className='font-medium text-6xl text-white text-center'>897</h1>
          <h3 className='text-white text-center'>5 Stars Rating</h3>
        </div>
      </div>

      <div className='py-4 px-8 text-white flex flex-col items-center'>
        <Icon8></Icon8>
        <div>
          <span className='text-3xl font-medium pl-20 text-white text-left'>+</span>
          <h1 className='font-medium text-6xl text-white text-center'>125</h1>
          <h3 className='text-white text-center'>Awards Winning</h3>
        </div>
      </div>

    </div>
  </section>
  )
}

export default Project