import clsx from 'clsx'
import React, { useState } from 'react'
import { Icon10 } from '../../../pages/icon10'

export const OurPricingPlan = () => {
    const [activeMenu, setActiveMenu] = useState('Get started')
    const menu = [' Get started ']
    return (
        <section className='bg-[#211E3B]'>

            <span className='text-white px-2.5 py-2.5'>
                <h2 className='text-center font-bold text-sm'>OUR PRICING PLAN</h2>
                <h3 className='text-center text-5xl font-black'>Awesome Pricing Plan</h3>
            </span>


            <div className='mx-auto max-w-[1210px] gap-10 grid grid-cols-3  z-10 flex relative w-full pb-6'>
                <div  id="แพ็คเกจ1" className='pr-9 pl-10 py-11 border border-solid border-[#312E49] bg-[#211E3B] flex flex-col'>
                    <div className='mb-2.5'>
                        <h3 className='text-white inline-block'>Basic Plan</h3>
                        <p className='mb-2.5 text-[#9A95C0]'> Quis autem vel eum iure reprehes <br /> derit quin voluptate velite</p>
                    </div>

                    <div className='flex mb-2.5'>
                        <h3 className='text-5xl font-normal text-[#FFFFFF]'>$50</h3> <span className='text-[#9A95C0]'>/Monthly</span>
                    </div>

                    <ul className='text-[#9A95C0] mb-10'>
                        <li>Responsive Live</li>
                        <li>Adaptive Bitrate</li>
                        <li>Analytics</li>
                    </ul>
                    <div className='flex rounded-lg z-10 whitespace-nowrap w-48 h-14 bg-[#312E49] mr-5 px-3.5 text-xs items-center relative inline-flex justify-center hover:border-[#211E3B] hover:bg-[#086AD7] items-center'>
                        <a className='text-sm font-normal px-7 pt-4 p-3.5 text-[#FFFFFF]'> Get started </a>
                    </div>
                </div>

                <div  id="แพ็คเกจ2" className='pr-9 pl-10 py-11 border border-solid border-[#312E49] bg-[#211E3B] flex flex-col'>
                    <div className='mb-2.5'>
                        <h3 className='text-white inline-block'>Regular Plan</h3>
                        <p className='mb-2.5 text-[#9A95C0]'> Quis autem vel eum iure reprehes <br /> derit quin voluptate velite </p>
                    </div>

                    <div className='flex mb-2.5'>
                        <h3 className='text-5xl font-normal text-[#FFFFFF]'>$75</h3> <span className='text-[#9A95C0]'>/Monthly</span>
                    </div>

                    <ul className='text-[#9A95C0] mb-10'>
                        <li>Responsive Live</li>
                        <li>Adaptive Bitrate</li>
                        <li>Analytics</li>
                    </ul>
                    <div className='flex rounded-lg z-10 whitespace-nowrap w-48 h-14 bg-[#312E49] mr-5 px-3.5 text-xs items-center relative inline-flex justify-center hover:border-[#211E3B] hover:bg-[#086AD7] items-center'>
                        <a className='text-sm font-normal px-7 pt-4 p-3.5 text-[#FFFFFF]'> Get started </a>
                    </div>
                </div>

                <div  id="แพ็คเกจ3" className='pr-9 pl-10 py-11 border border-solid border-[#312E49] bg-[#211E3B] flex flex-col'>
                    <div className='mb-2.5'>
                        <h3 className='text-white inline-block'>Premium Plan</h3>
                        <p className='mb-2.5 text-[#9A95C0]'> Quis autem vel eum iure reprehes <br /> derit quin voluptate velite </p>
                    </div>

                    <div className='flex mb-2.5'>
                        <h3 className='text-5xl font-normal text-[#FFFFFF]'>$100</h3> <span className='text-[#9A95C0]'>/Monthly</span>
                    </div>

                    <ul className='text-[#9A95C0] mb-10'>
                        <li>Responsive Live</li>
                        <li>Adaptive Bitrate</li>
                        <li>Analytics</li>
                    </ul>
                    <div className='flex rounded-lg z-10 whitespace-nowrap w-48 h-14 bg-[#312E49] mr-5 px-3.5 text-xs items-center relative inline-flex justify-center hover:border-[#211E3B] hover:bg-[#086AD7] items-center'>
                        <a className='text-sm font-normal px-7 pt-4 p-3.5 text-[#FFFFFF]'> Get started </a>
                    </div>
                </div>
            </div>
        </section >
    )
}
