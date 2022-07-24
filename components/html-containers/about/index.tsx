import React from 'react'
import { Icon9 } from '../../../pages/icon/icon9'

export const About = ({ data }) => {
  return (
    <section className='py-32 px-28 gap-24 grid grid-cols-2 mb-px mb-0 relative block box-bordern '>
      <div>
        <div className='font-normal mx-auto decoration-black leading-6 text-left	box-border'>
          <span className='font-bold decoration-slate-900 text-sm uppercase flex-wrap text-left	box-border text-sm not-italic text-[#086AD7]'>{data?.pretitle}</span>
          <h2 className='decoration-black text-4xl font-black box-border clear-both	mb-2 m-0'>{data?.title}</h2>
        </div>
        <div className='py-8 font-normal mx-auto max-w-[1210px] decoration-black leading-6 text-left box-border'>
          <p>{data?.text}</p>
        </div>
        <div className='rounded-lg hover:border-[#007bff] border border-solid border-[#EEF4FC] pt-1.5 px-4 pb-5 bg-white flex items-center pt-5'>
          <div className='text-[#007bff]'>
            <Icon9></Icon9>
          </div>
          <div className='ml-6 w-full border-solid'>
            <h4 className='text-2xl font-bold pt-5'>{data?.Feature.text1}</h4>
            <p className='text-[#696969]'>{data?.Feature.text2}</p>
          </div>
        </div>
      </div>
      <img className='w-full flex rounded h-auto z-10 align-middle inline-block mr-8' src={"http://localhost:1337" + data?.image.data.attributes.url}></img>
    </section>
  )
}
