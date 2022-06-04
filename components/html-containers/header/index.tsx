import React from 'react'
import { Icon10 } from '../../../pages/icon10'

export const Header = () => {
    return (
        <header className='relative z-10 block'>
            <div>
                <section className='my-0 mt-[10px]'>
                    <nav className='flex items-center justify-between mx-auto max-w-[1210px]'>
                        <div className='logo'>
                            <img
                                src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2022/01/logo-black.svg"
                                alt="Techex"
                                className="w-[160px]" />
                        </div>
                        <div className='menu'>
                            <ul className='flex'>
                                <li className='px-4 py-2'>Demos</li>
                                <li className='px-4 py-2'>Pages</li>
                                <li className='px-4 py-2'>Blog</li>
                                <li className='px-4 py-2'>Contact</li>
                            </ul>
                        </div>
                        <div className='rounded-lg z-10 whitespace-nowrap w-50 h-14 bg-[#086AD7] mr-5 px-3.5 text-xs items-center relative inline-flex justify-center border border-solid border-[#086AD7] hover:border-[#211E3B] hover:bg-[#211E3B] items-center'>
                            <a className='text-sm font-normal	px-7 pt-4 p-3.5 text-[#FFFFFF]'>Consultancy</a>
                            <Icon10></Icon10>
                        </div>
                    </nav>
                </section>
            </div>
        </header>
    )
}
