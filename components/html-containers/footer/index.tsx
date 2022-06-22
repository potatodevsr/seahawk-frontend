import clsx from 'clsx'
import React, { useState } from 'react'
import { Icon10 } from '../../../pages/icon10'
import { Icon14 } from '../../../pages/icon14'
import { Icon15 } from '../../../pages/icon15'
import { Icon16 } from '../../../pages/icon16'
import { Icon17 } from '../../../pages/icon17'
import { Icon18 } from '../../../pages/icon18'
import { Icon19 } from '../../../pages/icon19'
import { Button } from '../../button'

export const Footer = () => {
    return (
        <footer className=' bg-[#F2F7FD] '>
            <section className='pt-28 flex items-center justify-between mx-auto max-w-[1210px]'>
                <div className='flex flex-col items-center'>
                    <div className='gap-10 grid grid-cols-4 '>
                        <div className='mb-5'>
                            <Icon14></Icon14>
                            <p className='text-[#696969] text-base font-normal my-8'>
                                Sed ut perspiciatis unde omnis <br />
                                natus voluptatem accusa ntiumy <br />
                                doloremque laudantium. <br />
                            </p>
                            <form className='flex'>
                                <input placeholder="Enter your email" type='email' name="email" className='rounded-l-lg text-center hover text-[#696969] text-base font-normal'></input>
                                <button className='hover:bg-[#211E3B] hover:border-[#211E3B] flex justify-center items-center rounded-r-lg border border-[#086AD7] bg-[#086AD7] w-16 h-16'>
                                    <Icon15></Icon15>
                                </button>
                            </form>
                        </div>
                        <div className='mb-5'>
                            <h4 className='mb-8 font-bold text-xl'>Company</h4>
                            <ul>
                                <li className='items-center pb-4 flex gap-2 text-[#696969] hover:text-[#007BFF]'>
                                    <Icon16></Icon16><span>About us</span></li>
                                <li className='items-center pb-4 flex gap-2 text-[#696969] hover:text-[#007BFF]'>
                                    <Icon16></Icon16><span>Company History</span></li>
                                <li className='items-center pb-4 flex gap-2 text-[#696969] hover:text-[#007BFF]'>
                                    <Icon16></Icon16><span>Need a Career</span></li>
                                <li className='items-center pb-4 flex gap-2 text-[#696969] hover:text-[#007BFF]'>
                                    <Icon16></Icon16><span>Working Process</span></li>
                                <li className='items-center pb-4 flex gap-2 text-[#696969] hover:text-[#007BFF]'>
                                    <Icon16></Icon16><span>Blog Post</span></li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4 className='mb-8 font-bold text-xl'>News News</h4>
                            <ul>
                                <li className='items-center pb-4 flex text-[#696969] hover:text-[#007BFF]'>
                                    <Icon16></Icon16><span>About us</span></li>
                                <li className='items-center pb-4 flex text-[#696969] hover:text-[#007BFF]'>
                                    <Icon16></Icon16><span>Company History</span></li>
                                <li className='items-center pb-4 flex text-[#696969] hover:text-[#007BFF]'>
                                    <Icon16></Icon16><span>Need a Career</span></li>
                                <li className='items-center pb-4 flex text-[#696969] hover:text-[#007BFF]'>
                                    <Icon16></Icon16><span>Working Process</span></li>
                                <li className='items-center pb-4 flex text-[#696969] hover:text-[#007BFF]'>
                                    <Icon16></Icon16><span>Blog Post</span></li>
                            </ul>
                        </div>
                        <div className='mb-5'>
                            <h4 className='mb-8 font-bold text-xl'>Contact Us</h4>

                            <p className='gap-4 flex text-[#696969]'><Icon17></Icon17>256 Elizaberth Ave, Brooklyn, CA, <br />
                                90025</p> <br />
                            <p className='gap-4 flex text-[#696969] pb-4'><Icon18></Icon18>info@supportexam.com</p>
                            <p className='gap-4 flex text-[#696969] pb-4'><Icon19></Icon19>+012 (345) 678 99</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='pt-28 flex items-center justify-between mx-auto max-w-[1210px]'>
                <div id="services" className='text-center justify-center border-t-2 mx-auto max-w-[1210px] z-10 flex relative w-full pb-6'>
                    <p className='pt-5 font-bold text-[#7A7A7A] text-center'>© 2022 RR Devs . All Rights Reserved</p>
                </div>
            </section>
        </footer>
    )
}
