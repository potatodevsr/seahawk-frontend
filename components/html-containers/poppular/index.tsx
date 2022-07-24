import { text } from 'node:stream/consumers'
import React from 'react'
import { Icon10 } from '../../../pages/icon/icon10'
import { Service } from '../how-we-can-help/service'

export const Poppular = ({ data }) => {
  return (
    <section className='bg-[#211E3B] py-28'>

      <span className='text-white px-2.5 py-2.5'>
        <h2 className='text-center font-bold text-sm'>{data?.pretitle}</h2>
        <h3 className='text-center text-5xl font-black'>{data?.title}</h3>
      </span>


      <div className='mx-auto max-w-[1210px] gap-10 grid grid-cols-4  z-10 flex relative w-full pb-6'>
        {data?.Popular.map(({ pretitle, title, image }, index) => {
          return <div className='px-8 py-14 border border-solid border-[#312E49] hover:bg-[#2E2A50] flex flex-col items-center'>
            <img className='pb-8' src={'http://localhost:1337' + image.data.attributes.url} />
            <div>
              <h3 className='text-white inline-block'>{data?.pretitle}</h3>
              <p className='mt-2.5 text-[#9A95C0]'>{data?.title}</p>
              <p className='hover:bg-[#2E2A50] justify-between gap-4 font-bold pl-8 pr-8 items-center text-[#9A95C0] flex w-full text-xs'>
                LEARN MORE
                <Icon10></Icon10>
              </p>
            </div>
          </div>
        })}
      </div>
    </section>
  )
}
