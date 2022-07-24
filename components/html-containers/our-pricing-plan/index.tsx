import clsx from 'clsx'
import { title } from 'process'
import React, { useState } from 'react'
import { Icon10 } from '../../../pages/icon/icon10'

export const OurPricingPlan = ({ data }) => {
    const [activeMenu, setActiveMenu] = useState('Get started')
    const menu = [' Get started ']
    return (
        <section className='bg-[#211E3B]'>
            <span className='text-white px-2.5 py-2.5'>
                <h2 className='text-center font-bold text-sm'>{data?.pretitle}</h2>
                <h3 className='text-center text-5xl font-black'>{data?.title}</h3>
            </span>
            <div className='mx-auto max-w-[1210px] gap-10 grid grid-cols-3  z-10 flex relative w-full pb-6'>
                {data?.Planing.map((plan, index) => {
                    return <div className='pr-9 pl-10 py-11 border border-solid border-[#312E49] bg-[#211E3B] flex flex-col'>
                        <div className='mb-2.5'>
                            <h3 className='text-white inline-block'>{plan?.plan_name}</h3>
                            <p className='mb-2.5 text-[#9A95C0]'>{plan?.explain_plan}</p>
                        </div>

                        <div className='flex mb-2.5'>
                            <h3 className='text-5xl font-normal text-[#FFFFFF]'>{plan?.thb}</h3> <span className='text-[#9A95C0]'>{plan?.month}</span>
                        </div>

                        <ul className='text-[#9A95C0] mb-10'>
                            <li>{plan?.text1}</li>
                            <li>{plan?.text2}</li>
                            <li>{plan?.text3}</li>
                        </ul>
                        <div className='flex rounded-lg z-10 whitespace-nowrap w-48 h-14 bg-[#312E49] mr-5 px-3.5 text-xs items-center relative inline-flex justify-center hover:border-[#211E3B] hover:bg-[#086AD7] items-center'>
                            <a className='text-sm font-normal px-7 pt-4 p-3.5 text-[#FFFFFF]'>Get started</a>
                        </div>
                    </div>
                })}
            </div>
        </section >
    )
}
