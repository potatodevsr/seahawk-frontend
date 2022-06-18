import clsx from 'clsx'
import React, { useState } from 'react'
import { Icon10 } from '../../../pages/icon10'
import { Button } from '../../button'

export const Footer = () => {
  return (
    <footer id='3'>
      <section className='flex items-center justify-between mx-auto max-w-[1210px]'>
        <div className='logo '>
          <img
            src="https://rrdevs.net/demos/wp/techex/wp-content/uploads/2022/01/logo-black.svg"
            alt="Techex" />
          <div className='my-8'>
            Sed ut perspiciatis unde omnis <br /> natus voluptatem accusa ntiumy <br /> doloremque laudantium.
          </div>
        </div>

        <div>
          <h2 className='font-bold'>Company</h2>
          <ul className='my-8'>
            <li>About us</li>
            <li>Need a Career</li>
            <li>Working Process</li>
            <li>Blog Post</li>
          </ul>
        </div>

        <div>
          <h2 className='font-bold'>News News</h2>
          <ul className='my-8'>
            <li>About us</li>
            <li>Need a Career</li>
            <li>Working Process</li>
            <li>Blog Post</li>
          </ul>
        </div>

        <div>
          <h2 className='font-bold'>Contact Us</h2>
          <ul className='my-8'>
            <li>256 Elizaberth Ave, Brooklyn, CA, 90025</li>
            <li>info@supportexam.com</li>
            <li>+012 (345) 678 99</li>
          </ul>
        </div>
      </section>
    </footer>
  )
}
