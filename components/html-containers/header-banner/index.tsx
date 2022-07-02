import React from 'react'
import { Icon10 } from '../../../pages/icon10'

export const HeaderBanner = () => {
    const data = {
        title1: 'Solutions For',
        title2: 'Potato ass',
        text: "We Have 25 Years Of Experience In IT Solutions",
        image1: 'https://rrdevs.net/demos/wp/techex/wp-content/uploads/2022/01/heros-01.jpg',
        image2: 'https://rrdevs.net/demos/wp/techex/wp-content/uploads/2022/01/heros-02.jpg',
        button1: 'Service we provide',
        button1link: 'Service we provide',
        button2: 'Learn more',
        button2link: 'Learn more'
    }
    const image1 = { "backgroundImage": `url(${data.image1})` }
    const image2 = { "backgroundImage": `url(${data.image2})` }

    return (
        <section className='mx-26 -mt-24 mb-0 relative block box-border min-h-[900px] h-[95vh]'>
            <div className='font-normal pt-[230px] pl-32 decoration-black leading-6 text-left	box-border'>
                <h1 className='max-w-[50vw] z-10 relative overflow-hidden  font-bold'>
                    <span className='text-7xl'>{data.title1}</span>
                    <br />
                    <span className='text-9xl'>
                        {data.title2}
                    </span>
                </h1>
                <p className='mt-5 font-medium text-2xl text-2xl decoration-black'></p>
                <div className='mt-9 justify-between flex max-w-[50%]'>
                    <a href={data.button1link} className='rounded-lg text-white hover:text-white z-10 whitespace-nowrap w-80 h-14 bg-[#086AD7] mr-5 px-3.5 text-xs items-center relative inline-flex justify-center border border-solid border-[#086AD7] hover:border-[#211E3B] hover:bg-[#211E3B] items-center'>
                        <span className='text-sm font-normal px-7 pt-4 p-3.5 text-[#FFFFFF]'>{data.button1}</span>
                        <Icon10></Icon10>
                    </a>

                    <a href={data.button2link} className='rounded-lg hover:text-white z-10 whitespace-nowrap w-80 h-14 mr-80 px-3.5 p-3.5 text-xs items-center relative inline-flex justify-center border border-solid border-[#086AD7] hover:bg-[#086AD7] items-center'>
                        <span className='items-center text-sm font-normal px-7 pt-4 p-3.5'>{data.button2}</span>
                        <Icon10></Icon10>
                    </a>
                </div>


                {/* @ts-ignore */}
                <div className=' z-1 top-0 absolute right-0 w-[771px] h-[788px] clip-path-1 ' style={image1}></div>
                <div className='radial-gradient absolute left-0 top-0 h-full w-[60vw]'></div>
                {/* @ts-ignore */}
                <div className=' z-1 bottom-0 absolute right-8 w-[972px] h-[486px] clip-path-2 ' style={image2}></div>
            </div>
        </section >

    )
}
