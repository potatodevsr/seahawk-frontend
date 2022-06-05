import React from 'react'
import { Icon10 } from '../../../pages/icon10'

export const Poppular = () => {
  return (
    <section className='bg-[#211E3B] py-28'>

    <span className='text-white px-2.5 py-2.5'>
      <h2 className='text-center font-bold text-sm'>POPULAR IT SERVICES</h2>
      <h3 className='text-center text-5xl font-black'>Our Professional Solutions <br /> For IT Business</h3>
    </span>


    <div id="services" className='mx-auto max-w-[1210px] gap-10 grid grid-cols-4  z-10 flex relative w-full pb-6'>


      <div className='px-7 py-14 border border-solid border-[#312E49] hover:bg-[#2E2A50] flex flex-col items-center'>
        <img className='pb-8' src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/sicon4.png" />
        <div>
          <h3 className='text-white inline-block'>Digital Solutions</h3>
          <p className='mb-2.5 text-[#9A95C0]'> Quis autem vel eum iure <br /> reprehenderit qui in ea </p>
          <p className='hover:bg-[#2E2A50] justify-between px-6 items-center text-[#9A95C0] flex w-full text-xs'>
            LEARN MORE
            <Icon10></Icon10>
          </p>
        </div>
      </div>

      <div className='px-7 py-14 border border-solid border-[#312E49] hover:bg-[#2E2A50] flex flex-col items-center'>
        <img className='pb-8' src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/sicon3.png" />
        <div>
          <h3 className='text-white'>Web Development</h3>
          <p className='mb-2.5 text-[#9A95C0]'> Quis autem vel eum iure <br /> reprehenderit qui in ea </p>
          <p className='hover:bg-[#2E2A50] justify-between px-6 items-center text-[#9A95C0] flex w-full text-xs'>
            LEARN MORE
            <Icon10></Icon10>
          </p>
        </div>
      </div>

      <div className='px-7 py-14 border border-solid border-[#312E49] hover:bg-[#2E2A50] flex flex-col items-center'>
        <img className='pb-8' src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/sicon1.png" />
        <div>
          <h3 className='text-white'>Manage IT Services</h3>
          <p className='mb-2.5 text-[#9A95C0]'> Quis autem vel eum iure <br /> reprehenderit qui in ea </p>
          <p className='hover:bg-[#2E2A50] justify-between px-6 items-center text-[#9A95C0] flex w-full text-xs'>
            LEARN MORE
            <Icon10></Icon10>
          </p>
        </div>
      </div>

      <div className='px-7 py-14 border border-solid border-[#312E49] hover:bg-[#2E2A50] flex flex-col items-center'>
        <img className='pb-8' src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/sicon2.png" />
        <div>
          <h3 className='text-white '>Product Engineering</h3>
          <p className='mb-2.5 text-[#9A95C0]'> Quis autem vel eum iure <br /> reprehenderit qui in ea </p>
          <p className='hover:bg-[#2E2A50] justify-between px-6 items-center text-[#9A95C0] flex w-full text-xs'>
            LEARN MORE
            <Icon10></Icon10>
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}
