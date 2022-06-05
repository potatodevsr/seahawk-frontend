import React from 'react'
import { Icon9 } from '../../../pages/icon9'

export const About = () => {
  return (
    <section id='3' className='py-32 px-28 gap-24 grid grid-cols-2 mb-px mb-0 relative block box-bordern '>
    <div>
      <div className='font-normal mx-auto decoration-black leading-6 text-left	box-border'>
        <h2 className='font-bold decoration-slate-900 text-sm uppercase flex-wrap text-left	box-border text-sm not-italic text-[#086AD7]	'>ABOUT COMPANY</h2>
        <h3 className='decoration-black text-4xl font-black box-border clear-both	mb-2 m-0'>Get's IT Solutions For Expert<br /> Consultants </h3>
      </div>
      <div className='py-8 font-normal mx-auto max-w-[1210px] decoration-black leading-6 text-left box-border'>
        <p >Sed ut perspiciatis unde omnis natus error sit voluptatem <br /> accusa ntium doloremque laudantium totam rem aperiamea <br /> queipsa quae abillo inventore veritatis et quasi architecto <br /> beatae vitae dicta sunt explicabo.</p>
      </div>
      <div className='rounded-lg hover:border-[#007bff] border border-solid border-[#EEF4FC] pt-1.5 px-4 pb-5 bg-white flex items-center pt-5'>
        <div className='text-[#007bff]'>
          <Icon9></Icon9>
        </div>
        <div className='ml-6 w-full border-solid'>
          <h4 className='text-2xl font-bold pt-5'>Professional Consultants</h4>
          <p className='text-[#696969]'>Quis autem vel eum iure reprehenderit quin voluptate <br /> velit esse quam
          </p>
        </div>
      </div>
    </div>
    <img className='w-full flex rounded h-auto z-10 align-middle inline-block mr-8' src='https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/about-us.jpg'></img>
  </section>
  )
}
