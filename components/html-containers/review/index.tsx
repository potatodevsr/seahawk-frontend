import React from 'react'
import { Icon12 } from '../../../pages/icon12'
import { Icon9 } from '../../../pages/icon9'
import { Slider } from '../../swiper'

export const Review = () => {
  const data = [
    {
      quote: 'On the other hand denounc with ghteo indignation and dislike men who so beguiled and demoralized the charms of pleasure the momen blinded by desire cannot foresee the pain and trouble.',
      picture: 'https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/testimonial-3.png',
      name: 'John Doe',
      who: 'WordPress Expert',
      id: 1
    },
    {
      quote: 'On the other hand denounc with ghteo indignation and dislike men who so beguiled and demoralized the charms of pleasure the momen blinded by desire cannot foresee the pain and trouble.',
      picture: 'https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/testimonial-3.png',
      name: 'Potato',
      who: 'Poop Expert',
      id: 2
    },
    {
      quote: 'On the other hand denounc with ghteo indignation and dislike men who so beguiled and demoralized the charms of pleasure the momen blinded by desire cannot foresee the pain and trouble.',
      picture: 'https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/testimonial-3.png',
      name: 'Tanoo',
      who: 'Food Expert',
      id: 3
    }
  ]
  return (
    <section id='3' className='py-32 px-28 flex mb-px mb-0 relative block box-bordern '>
      <div className='w-1/2 pr-8'>
        <img className='w-full flex rounded h-auto z-10 align-middle inline-block mr-8' src='https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/testi_bg.jpg'></img>
      </div>

      <div className='w-1/2 pl-8'>
        <Slider>
          {data.map(({ quote, picture, name, who, id }) => {
            return <div key={id} className='max-w-[40vw]'>
              <Icon12></Icon12>
              <p className='font-bold	text-3xl mt-3.5 mb-9'>{quote}</p>

              <div className='flex hover:border-[#007bff] items-center pb-5 pt-1.5 pt-5 px-4 rounded-lg'>
                <img className='mr-6 w-20 h-70' src={picture} alt="" />
                <div>
                  <h4 className='text-2xl font-bold	'>{name}</h4>
                  <p className='text-base font-medium text-[#086ADB] mb-2.5 '>{who}</p>
                </div>
              </div>
            </div>
          })}

        </Slider>
      </div>
    </section >
  )
}
