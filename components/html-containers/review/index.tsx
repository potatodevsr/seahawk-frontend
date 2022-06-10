import React from 'react'
import { Icon12 } from '../../../pages/icon12'
import { Icon9 } from '../../../pages/icon9'

export const Review = () => {
  return (
    <section id='3' className='py-32 px-28 gap-24 grid grid-cols-2 mb-px mb-0 relative block box-bordern '>
      <div>
        <img className='w-full flex rounded h-auto z-10 align-middle inline-block mr-8' src='https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/testi_bg.jpg'></img>
      </div>

      <div>
        <Icon12></Icon12>
        <p className='font-bold	text-3xl mt-3.5 mb-9'>On the other hand denounc with ghteo indignation and dislike men who so beguiled and demoralized the charms of pleasure the momen blinded by desire cannot foresee the pain and trouble.</p>
      </div>

      <div>
        <img src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/testimonial-3.png" alt="" />
      </div>

    </section >
  )
}
