import React from 'react'
import { Icon10 } from '../../../pages/icon10'

export const HeaderBanner = () => {
    const image1 = { "backgroundImage": "url(https://rrdevs.net/demos/wp/techex/wp-content/uploads/2022/01/heros-01.jpg)" }
    const image2 = { "backgroundImage": "url(https://rrdevs.net/demos/wp/techex/wp-content/uploads/2022/01/heros-02.jpg" }
  
    return (
        <section className='mx-26 -mt-24 mb-0 relative block box-border min-h-[900px] h-[95vh]'>
            <div className='font-normal pt-[230px] pl- max-w-[50%] decoration-black leading-6 text-left	box-border'>
                <h1 className='max-w-[50vw] z-10 relative overflow-hidden  font-bold'>
                    <span className='text-7xl'>Solutions For</span>
                    <br />
                    <span className='text-9xl'>
                        IT Business
                    </span>
                </h1>
                <p className='mt-5 font-medium text-2xl text-2xl decoration-black'>We Have 25 Years Of Experience In IT Solutions</p>
                <div className='mt-9 justify-between flex'>
                    <div className='rounded-lg z-10 whitespace-nowrap w-80 h-14 bg-[#086AD7] mr-5 px-3.5 text-xs items-center relative inline-flex justify-center border border-solid border-[#086AD7] hover:border-[#211E3B] hover:bg-[#211E3B] items-center'>
                        <a className='text-sm font-normal	px-7 pt-4 p-3.5 text-[#FFFFFF]'>Service we provide</a>
                        <Icon10></Icon10>
                    </div>

                    <div className='rounded-lg hover:text-white z-10 whitespace-nowrap w-80 h-14 mr-80 px-3.5 p-3.5 text-xs items-center relative inline-flex justify-center border border-solid border-[#086AD7] hover:bg-[#086AD7] items-center'>
                        <a className='items-center text-sm font-normal px-7 pt-4 p-3.5'>LEARN MORE</a>
                        <Icon10></Icon10>
                    </div>



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
