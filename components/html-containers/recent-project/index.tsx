import clsx from 'clsx'
import React, { useState } from 'react'
import { Icon10 } from '../../../pages/icon10'
import { Button } from '../../button'

export const RecentProject = () => {
  const [activeMenu, setActiveMenu] = useState('All')
  const menu = ['All', 'Business', 'Consulting', 'Engineering', 'Product']
  return (
    <section id='3' className='mb-16 relative pt-20 px-28 grid  mb-px mb-0 relative block box-bordern '>
      <div className='flex mr-14'>
        <div className='font-normal decoration-black leading-6 text-left	box-border'>
          <h2 className='text-[#086AD7] font-bold decoration-slate-900 text-sm uppercase flex-wrap text-left	box-border text-sm not-italic	'>
            OUR RECENT PROJECT</h2>
          <h3 className='decoration-black text-4xl font-black box-border clear-both	mb-2 m-0'>Latest Case Studies</h3>
        </div>
      </div>

      <div>
        <div className='flex items-center justify-end'>
          {menu.map(el => {
            return <button
              key={el}
              onClick={() => setActiveMenu(el)}
              className={clsx(
                activeMenu === el ? 'bg-blue-500 text-white' : 'bg-white',
                'shadow-2xl ml-4 py-2.5 px-4 rounded-md border-solid border border-[#086AD7] border-inherit'
              )}>
              {el}
            </button>
          })}
        </div>
      </div>

      <div id="services" className=' mx-auto max-w-[1210px] gap-10 grid grid-cols-3 gap-6 z-10 flex relative w-full'>
      <div className='px-7 py-14 flex flex-col items-center'>
          <img id='รูปที่1' className='pb-8 rounded-t-lg rounded-md' src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-02.jpg" />
          <div>
            <h2 className='text-xl font-bold text-[#211E3B] inline-block pb-5'>ui ux design process</h2>
            <p className='font-bold justify-between px-6 items-center text-[#086ADB] flex w-full text-xs'>
              READ MORE
              <Icon10></Icon10>
            </p>
          </div>
        </div>

        <div className='px-7 py-14 flex flex-col items-center'>
          <img id='รูปที่2' className='pb-8 rounded-t-lg rounded-md' src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-02.jpg" />
          <div>
            <h2 className='text-xl font-bold text-[#211E3B] inline-block pb-5'>Financial Investment</h2>
            <p className='font-bold justify-between px-6 items-center text-[#086ADB] flex w-full text-xs'>
              READ MORE
              <Icon10></Icon10>
            </p>
          </div>
        </div>

        <div className='px-7 py-14 flex flex-col items-center'>
          <img id='รูปที่3' className='pb-8 rounded-t-lg rounded-md' src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-02.jpg" />
          <div>
            <h2 className='text-xl font-bold text-[#211E3B] inline-block pb-5'>Research & Market Plan</h2>
            <p className='font-bold justify-between px-6 items-center text-[#086ADB] flex w-full text-xs'>
              READ MORE
              <Icon10></Icon10>
            </p>
          </div>
        </div>

        <div className='px-7 py-14 flex flex-col items-center'>
          <img id='รูปที่4' className='pb-9 h-auto rounded-t-lg rounded-md' src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-04.jpg" />
          <div>
            <h2 className='text-xl font-bold text-[#211E3B] inline-block pb-5'>Digital Solutions</h2>
            <p className='font-bold justify-between px-6 items-center text-[#086ADB] flex w-full text-xs'>
              READ MORE
              <Icon10></Icon10>
            </p>
          </div>
        </div>

        <div className='px-7 py-14 flex flex-col items-center'>
          <img id='รูปที่5' className='pb-8 rounded-t-lg rounded-md' src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-04.jpg" />
          <div>
            <h2 className='text-xl font-bold text-[#211E3B] inline-block pb-5'>Digital Solutions</h2>
            <p className='font-bold justify-between px-6 items-center text-[#086ADB] flex w-full text-xs'>
              READ MORE
              <Icon10></Icon10>
            </p>
          </div>
        </div>

        <div className='px-7 py-14 flex flex-col items-center'>
          <img id='รูปที่5' className='pb-8 rounded-t-lg rounded-md' src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-05.jpg" />
          <div>
            <h2 className='text-xl font-bold text-[#211E3B] inline-block pb-5'>Digital Solutions</h2>
            <p className='font-bold justify-between px-6 items-center text-[#086ADB] flex w-full text-xs'>
              READ MORE
              <Icon10></Icon10>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
