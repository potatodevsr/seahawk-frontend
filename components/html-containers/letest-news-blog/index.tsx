import React from 'react'
import { Icon10 } from '../../../pages/icon10'
import { Icon12 } from '../../../pages/icon12'
import { Icon13 } from '../../../pages/icon13'

export const LatestNewsBlog = () => {
    const data = {
        title: 'LATEST NEWS & BLOG',
        subtitle: 'Get Every Single Updates',
        blocks: [
            {
                image_url: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/blog-01.jpg",
                text1: "November 21, 2021",
                text2: "Beyond Tools How Building A Design System...",
            },
            {
                image_url: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-01.jpg",
                text1: "November 21, 2021",
                text2: "Make Honest Design Work As For Digital...",
            },
            {
                image_url: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/case-02.jpg",
                text1: "November 21, 2021",
                text2: "Beyond Tools How Building A Design System....",
            },
        ]
    }
    return (

        <section className='bg-[#fff] py-28 pb-20'>

            <span className='px-2.5 py-2.5'>
                <h2 className='text-[#086AD7] text-center font-bold text-sm'>{data.title}</h2>
                <h3 className='text-center text-5xl font-black'>{data.subtitle}</h3>
            </span>

            <div id="services" className=' mx-auto max-w-[1210px] gap-10 grid grid-cols-3 z-10 flex relative w-full'>
                {data.blocks.map(({ image_url, text1, text2 }, index) => {
                    return <div key={index} className='px-7 py-14 flex flex-col items-center'>
                        <img className='pb-8 rounded-t-lg rounded-md' src={image_url}/>
                        <div>
                            <h1 className='items-center text-base font-semibold text-[#696969] flex pb-5'>
                                <Icon13 />
                                <span className='ml-1.5'>{text1}</span>
                            </h1>
                            <h3 className='text-xl font-bold text-[#211E3B] inline-block pb-5'>{text2}</h3>
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
