import clsx from 'clsx'
import React, { useState } from 'react'
import { Icon10 } from '../../../pages/icon/icon10'
import { Button } from '../../button'
 
export const RecentProject = ({ data }) => {
  const [activeMenu, setActiveMenu] = useState('All')
  const menu = ['All', 'Business', 'Consulting', 'Engineering', 'Product']
  return (
    <section className='mb-16 relative pt-20 px-28 grid  mb-px mb-0 relative block box-bordern '>
      <div className='flex mr-14'>
        <div className='font-normal decoration-black leading-6 text-left	box-border'>
          <h2 className='text-[#086AD7] font-bold decoration-slate-900 text-sm uppercase flex-wrap text-left	box-border text-sm not-italic	'>
            {data?.pretitle}</h2>
          <h3 className='decoration-black text-4xl font-black box-border clear-both	mb-2 m-0'>{data?.title}</h3>
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
      <div className=' mx-auto max-w-[1210px] gap-10 grid grid-cols-3 gap-6 z-10 flex relative w-full'>
        {data?.recent.map(({ image, pretitle, title } ,index) => {
          return (
            <div className='px-7 py-14 flex flex-col items-center'>
              <img id='รูปที่1' className='pb-2 rounded-t-lg rounded-md' src={'http://localhost:1337' + image.data.attributes.url} />
              <div className='flex flex-col items-center'>
                <h2 className='text-xl font-bold text-[#211E3B] inline-block pb-2'>{data?.pretitle}</h2>
                <p className='text-base justify-between px-6 items-center text-[#696969] flex w-full text-xs'>{data?.title}
                </p>
                <a href="" className='pl-8 pr-8 font-bold flex items-center text-[#086ADB] justify-between'>
                READ MORE
                <Icon10></Icon10>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}