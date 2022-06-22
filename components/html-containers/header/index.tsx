import React from 'react'
import { Icon10 } from '../../../pages/icon10'
import { MenuDropdown } from '../menu-dropdown'

export const Header = () => {
    return (
        <header className='relative z-30 block'>
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
                                <MenuDropdown></MenuDropdown>
                                <li className='px-4 py-2 font-bold'>Demos</li>
                                <li className='px-4 py-2 font-bold'>Pages</li>
                                <li className='px-4 py-2 font-bold'>Blog</li>
                                <li className='px-4 py-2 font-bold'>Contact</li>
                            </ul>
                        </div>
                        <div className='rounded-lg text-white ounded-lg z-10 whitespace-nowrap w-50 h-14 bg-[#086AD7] mr-5 px-3.5 text-xs items-center relative inline-flex justify-center border border-solid border-[#086AD7] hover:border-[#211E3B] hover:bg-[#211E3B] items-center'>
                            <a className='text-sm font-normal	px-7 pt-4 p-3.5 text-[#FFFFFF]'>Consultancy</a>
                            <Icon10></Icon10>
                        </div>
                    </nav>
                </section>
            </div>
        </header>
    )
}
