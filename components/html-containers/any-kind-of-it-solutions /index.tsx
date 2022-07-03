import React from 'react'
import { Icon10 } from '../../../pages/icon10'
import { Icon9 } from '../../../pages/icon9'

export const AnyKindOfItSolutions = () => {
    const data = {
        title: "Ready To Get Free Consulations For Any Kind Of It Solutions ?",
        }
    return (
        <section className='-mt-10 rounded-md py-20 px-28 gap-24 grid grid-cols-2 mb-px mb-0 relative block box-bordern bg-[#211E3B]'>
            <div>
                <div className='font-normal mx-auto decoration-black leading-6 text-left	box-border'>
                    <h3 className='decoration-black text-4xl font-black box-border clear-both text-[#ffff] mb-2 m-0'>{data.title}</h3>
                </div>
            </div>
            <div>
                <div className='#211E3B text-[#ffff] border border-[##]696969] flex rounded-lg z-10 whitespace-nowrap w-48 h-14 mr-5 px-3.5 text-xs items-center relative inline-flex justify-center hover:border-[#086AD7] hover:bg-[#086AD7] items-center hover:text-[#ffff]'>
                    <a className='text-sm font-normal px-7 pt-4 p-3.5 '>GET A QUOTE</a>
                    <Icon10></Icon10>
                </div>
                <div className='#211E3B text-[#ffff] border border-[##]696969] flex rounded-lg z-10 whitespace-nowrap w-48 h-14 mr-5 px-3.5 text-xs items-center relative inline-flex justify-center hover:border-[#086AD7] hover:bg-[#086AD7] items-center hover:text-[#ffff]'>
                    <a className='text-sm font-normal px-7 pt-4 p-3.5 '>READ MORE</a>
                    <Icon10></Icon10>
                </div>

            </div>
        </section>
    )
}
