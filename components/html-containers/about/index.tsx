import React from 'react'
import { Icon9 } from '../../../pages/icon9'

export const About = () => {
  const data = {
    title1: 'ABOUT COMPANY',
    title2: 'Get is IT Solutions For Expert Consultants',
    title3: 'Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium doloremque laudantium totamcomponents/html-containers/about/index.tsx rem aperiamea queipsa quae abillo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    title4: 'Professional Consultants',
    title5: 'Quis autem vel eum iure reprehenderit quin voluptate velit esse quam',
    image1: 'https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/about-us.jpg'





  }
  return (
    <section id='3' className='py-32 px-28 gap-24 grid grid-cols-2 mb-px mb-0 relative block box-bordern '>
    <div>
      <div className='font-normal mx-auto decoration-black leading-6 text-left	box-border'>
        <h2 className='font-bold decoration-slate-900 text-sm uppercase flex-wrap text-left	box-border text-sm not-italic text-[#086AD7]'>{data.title1}</h2>
        <p className='decoration-black text-4xl font-black box-border clear-both	mb-2 m-0'>{data.title2}</p>
      </div>
      <div className='py-8 font-normal mx-auto max-w-[1210px] decoration-black leading-6 text-left box-border'>
        <p>{data.title3}</p>
      </div>
      <div className='rounded-lg hover:border-[#007bff] border border-solid border-[#EEF4FC] pt-1.5 px-4 pb-5 bg-white flex items-center pt-5'>
        <div className='text-[#007bff]'>
          <Icon9></Icon9>
        </div>
        <div className='ml-6 w-full border-solid'>
          <h4 className='text-2xl font-bold pt-5'>{data.title4}</h4>
          <p className='text-[#696969]'>{data.title5}</p>
        </div>
      </div>
    </div>
    <img className='w-full flex rounded h-auto z-10 align-middle inline-block mr-8' src={data.image1}></img>
  </section>
  )
}
