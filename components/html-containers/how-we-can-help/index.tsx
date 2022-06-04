import React from 'react'
import { Icon1 } from '../../../pages/icon1'
import { Icon2 } from '../../../pages/icon2'
import { Icon3 } from '../../../pages/icon3'
import { Icon4 } from '../../../pages/icon4'

export const HowWeCanHelp = () => {
  return (
       
    <section id="how we can help you" className=' mx-28 relative box-border flex items-center flex-col font-medium'>
    <div className='p-12'>
      <h2 className='font-bold decoration-slate-900 text-sm uppercase flex-wrap text-center	box-border text-sm not-italic text-[#086AD7]'>HOW CAN HELP YOU</h2>
      <h3 className='decoration-black text-4xl font-black box-border clear-both	mb-2 m-0'>We Help Your IT Business</h3>
    </div>
    <div className='flex w-full'>
      <img className='flex rounded w-[395px] h-auto z-10 align-middle inline-block mr-8' src='https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/feature_img.jpg'></img>

      <div>  <div id="services" className='grid grid-cols-2 gap-8 z-10 relative w-full pb-3.5'>
        <div className='bg-white py-4 px-8  flex items-center'>
          <Icon1></Icon1>
          <div>
            <h4 className='text-2xl font-bold'>IT Consultancy</h4>
            <p>Faster & Smarter Solution</p>
          </div>

        </div>

        <div className='bg-white py-4 px-8 flex items-center'>
          <Icon2></Icon2>
          <div>
            <h4 className='text-2xl font-bold pt-5'>UX/UI Strategy</h4>
            <p>Faster & Smarter Solutions</p>
          </div>

        </div>

        <div className='bg-white py-4 px-8 flex items-center'>
          <Icon3></Icon3>
          <div>
            <h4 className='text-2xl font-bold pt-5'>Cyber Security</h4>
            <p>Faster & Smarter Solutions</p>
          </div>
        </div>

        <div className='bg-white py-4 px-8 flex items-center pb-3'>
          <Icon4></Icon4>
          <div>
            <h4 className='text-2xl font-bold pt-5'>Development</h4>
            <p>Faster & Smarter Solutions</p>
          </div>
        </div>
      </div>
        <div className='bg-blue-500 p-20 text-white font-bold text-xl z-20 relative'>
          Sed perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium totam rem aperiam eaque quae
        </div></div>
      <div className='radial-gradient-2 absolute left-0 top-0 h-full w-full'></div>
    </div>

  </section>
  )
}
