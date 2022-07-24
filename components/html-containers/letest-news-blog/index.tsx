import React from 'react'
import { Icon10 } from '../../../pages/icon/icon10'
import { Icon12 } from '../../../pages/icon/icon12'
import { Icon13 } from '../../../pages/icon/icon13'

export const LatestNewsBlog = ({ data }) => {
    return (

        <section className='bg-[#fff] py-28 pb-20'>

            <span className='px-2.5 py-2.5'>
                <h2 className='text-[#086AD7] text-center font-bold text-sm'>{data?.pretitle}</h2>
                <h3 className='text-center text-5xl font-black'>{data?.title}</h3>
            </span>

            <div className=' mx-auto max-w-[1210px] gap-10 grid grid-cols-3 z-10 flex relative w-full'>
                {data?.updates_news.map(({ image, date, text }, index) => {
                    return <div key={index} className='px-7 py-14 flex flex-col items-center'>
                        <img className='pb-8 rounded-t-lg rounded-md' src={'http://localhost:1337' + image.data.attributes.url} />
                        <div>
                            <h1 className='items-center text-base font-semibold text-[#696969] flex pb-5'>
                                <Icon13 />
                                <span className='ml-1.5'>{date}</span>
                            </h1>
                            <h3 className='text-xl font-bold text-[#211E3B] inline-block pb-5'>{text}</h3>
                            <div className='text-[#696969] border border-[##]696969] flex rounded-lg z-10 whitespace-nowrap w-48 h-14 bg-[#ffff] mr-5 px-3.5 text-xs items-center relative inline-flex justify-center hover:border-[#086AD7] hover:bg-[#086AD7] items-center hover:text-[#ffff]'>
                                <a className='text-sm font-normal px-7 pt-4 p-3.5 '> READ MORE </a>
                                <Icon10></Icon10>
                            </div>

                        </div>
                    </div>
                })}
            </div>


        </section>
    )
}
