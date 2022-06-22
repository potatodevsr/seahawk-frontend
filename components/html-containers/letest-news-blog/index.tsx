import React from 'react'
import { Icon10 } from '../../../pages/icon10'
import { Icon12 } from '../../../pages/icon12'
import { Icon13 } from '../../../pages/icon13'

export const LatestNewsBlog = () => {
    return (
        <section className='bg-[#fff] py-28 pb-20'>

            <span className='px-2.5 py-2.5'>
                <h2 className='text-[#086AD7] text-center font-bold text-sm'>LATEST NEWS & BLOG</h2>
                <h3 className='text-center text-5xl font-black'>Get Every Single Updates</h3>
            </span>

            <div id="services" className=' mx-auto max-w-[1210px] gap-10 grid grid-cols-3 z-10 flex relative w-full'>
                <div className='px-7 py-14 flex flex-col items-center'>
                    <img id='รูปที่1' className='pb-8 rounded-t-lg rounded-md' src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/blog-01.jpg" />
                    <div>
                        <h1 className='items-center text-base font-semibold text-[#696969] flex pb-5'>
                            <Icon13 />
                            <span className='ml-1.5'> November 21, 2021</span>
                        </h1>
                        <h3 className='text-xl font-bold text-[#211E3B] inline-block pb-5'>Beyond Tools How Building A Design System...</h3>
                        <div className='text-[#696969] border border-[##]696969] flex rounded-lg z-10 whitespace-nowrap w-48 h-14 bg-[#ffff] mr-5 px-3.5 text-xs items-center relative inline-flex justify-center hover:border-[#086AD7] hover:bg-[#086AD7] items-center hover:text-[#ffff]'>
                            <a className='text-sm font-normal px-7 pt-4 p-3.5 '> READ MORE </a>
                            <Icon10></Icon10>
                        </div>

                    </div>
                </div>

                <div className='px-7 py-14 flex flex-col items-center'>
                    <img id='รูปที่2' className='pb-8 rounded-t-lg rounded-md' src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-01.jpg" />
                    <div>
                        <h1 className='items-center text-base font-semibold text-[#696969] flex pb-5'>
                            <Icon13 />
                            <span className='ml-1.5'> November 21, 2021</span>
                        </h1>

                        <h3 className='text-xl font-bold text-[#211E3B] inline-block pb-5'>Make Honest Design Work As <br /> For Digital...</h3>
                        <div className='text-[#696969] border border-[##]696969] flex rounded-lg z-10 whitespace-nowrap w-48 h-14 bg-[#ffff] mr-5 px-3.5 text-xs items-center relative inline-flex justify-center hover:border-[#086AD7] hover:bg-[#086AD7] items-center hover:text-[#ffff]'>
                            <a className='text-sm font-normal px-7 pt-4 p-3.5 '> READ MORE </a>
                            <Icon10></Icon10>
                        </div>
                    </div>
                </div>

                <div className='px-7 py-14 flex flex-col items-center'>
                    <img id='รูปที่3' className='pb-8 rounded-t-lg rounded-md' src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-02.jpg" />
                    <div>
                        <h1 className='items-center text-base font-semibold text-[#696969] flex pb-5'>
                            <Icon13 />
                            <span className='ml-1.5'> November 21, 2021</span>
                        </h1>
                        <h3 className='text-xl font-bold text-[#211E3B] inline-block pb-5'>Beyond Tools How Building A Design System...</h3>
                        <div className='flex'>

                        </div>
                        <div className='text-[#696969] border border-[##]696969] flex rounded-lg z-10 whitespace-nowrap w-48 h-14 bg-[#ffff] mr-5 px-3.5 text-xs items-center relative inline-flex justify-center hover:border-[#086AD7] hover:bg-[#086AD7] items-center hover:text-[#ffff]'>
                            <a className='text-sm font-normal px-7 pt-4 p-3.5 '> READ MORE </a>
                            <Icon10></Icon10>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
