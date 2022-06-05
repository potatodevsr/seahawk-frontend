import clsx from 'clsx'
import React, { useState } from 'react'
import { Button } from '../../button'

export const RecentProject = () => {
  const [activeMenu, setActiveMenu] = useState('All')
  const menu = ['All', 'Business', 'Consulting', 'Engineering', 'Product']
  return (
    <section id='3' className='relative py-32 px-28 grid grid-cols-2 mb-px mb-0 relative block box-bordern '>
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

    </section>


  )
}
