import React from 'react'
import { Button } from '../../button'

export const Footer = () => {
  return (
    <footer id='3'>
    <section className='py-32 px-28 bg-[#211E3B] grid grid-cols-4 mb-px mb-0 relative block box-bordern '>
      <div className='flex w-full'>
        <div className='font-normal mx-auto decoration-black leading-6 text-left	box-border'>
          <h3 className='text-4xl text-white decoration-black font-black box-border clear-both	mb-2 m-0'>Ready To Get Free Consulations <br /> For Any Kind Of It Solutions ?</h3>
        </div>
      </div>
      <Button>GET A QUOTE</Button>
      <Button className=''>READ MORE</Button>
    </section>

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
