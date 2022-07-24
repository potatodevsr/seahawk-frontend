import React from 'react'
import { Icon12 } from '../../../pages/icon/icon12'
import { Icon9 } from '../../../pages/icon/icon9'
import { Slider } from '../../swiper'

export const Review = ({ data }) => {
  return (
    <section className='py-32 px-28 flex mb-px mb-0 relative block box-bordern '>
      <div className='w-1/2 pr-8'>
        <img className='w-full flex rounded h-auto z-10 align-middle inline-block mr-8' src={'http://localhost:1337' + data?.image.data.attributes.url}></img>
      </div>

      <div className='w-1/2 pl-8'>
        <Slider>
          {data?.reviews.map(({ title_reviews, profile, name, title }, index) => {
            return <div key={index} className='max-w-[40vw]'>
              <Icon12></Icon12>
              <p className='font-bold	text-3xl mt-3.5 mb-9'>{title_reviews}</p>

              <div className='flex hover:border-[#007bff] items-center pb-5 pt-1.5 pt-5 px-4 rounded-lg'>
                <img className='mr-6 w-20 h-70' src={'http://localhost:1337' + profile.data.attributes.url} />
                <div>
                  <h4 className='text-2xl font-bold	'>{name}</h4>
                  <p className='text-base font-medium text-[#086ADB] mb-2.5 '>{title}</p>
                </div>
              </div>
            </div>
          })}

        </Slider>
      </div>
    </section >
  )
}
