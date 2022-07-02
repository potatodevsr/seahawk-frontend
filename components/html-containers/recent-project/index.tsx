import clsx from 'clsx'
import React, { useState } from 'react'
import { Icon10 } from '../../../pages/icon10'
import { Button } from '../../button'

export const RecentProject = () => {
  const [activeMenu, setActiveMenu] = useState('All')
  const menu = ['All', 'Business', 'Consulting', 'Engineering', 'Product']
  const data = {
    title: 'OUR RECENT PROJECT',
    subtitle: 'Latest Case Studies',

    blocks: [
      {
        image_url: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-02.jpg",
        text: "ui ux design process",
      },
      {
        image_url: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-02.jpg",
        text: "Financial Investment",
      },
      {
        image_url: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-02.jpg",
        text: "Research & Market Plan",
      },
      {
        image_url: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-04.jpg",
        text: "Digital Solutions",
      },
      {
        image_url: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-04.jpg",
        text: "Digital Solutions",
      }, {
        image_url: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-05.jpg",
        text: "Digital Solutions",
      }
    ]
  }
  return (
    <section id='3' className='mb-16 relative pt-20 px-28 grid  mb-px mb-0 relative block box-bordern '>
      <div className='flex mr-14'>
        <div className='font-normal decoration-black leading-6 text-left	box-border'>
          <h2 className='text-[#086AD7] font-bold decoration-slate-900 text-sm uppercase flex-wrap text-left	box-border text-sm not-italic	'>
            {data.title}</h2>
          <h3 className='decoration-black text-4xl font-black box-border clear-both	mb-2 m-0'>{data.subtitle}</h3>
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
        {data.blocks.map(({ image_url, text }, index) => {
          return (
            <div className='px-7 py-14 flex flex-col items-center'>
              <img id='รูปที่1' className='pb-8 rounded-t-lg rounded-md' src={image_url} />
              <div>
                <h2 className='text-xl font-bold text-[#211E3B] inline-block pb-5'></h2>
                <p className='font-bold justify-between px-6 items-center text-[#086ADB] flex w-full text-xs'>{text}
                  READ MORE
                  <Icon10></Icon10>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>

  )
}
