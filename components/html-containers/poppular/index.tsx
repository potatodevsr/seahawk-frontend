import { text } from 'node:stream/consumers'
import React from 'react'
import { Icon10 } from '../../../pages/icon10'
import { Service } from '../how-we-can-help/service'
 
export const Poppular = () => {
  const data = {
    title: 'POPULAR IT SERVICES',
    subtitle:'Our Professional Solutions For IT Business',
    blocks: [
      {
        title: "Digital Solutions",
        text: "Our Professional Solutions",
        text2: "For IT Business",
        image_url: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/sicon4.png",
      },
      {
        title: "Web Development",
        text: "Our Professional Solutions",
        text2: "For IT Business",
        image_url: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/sicon3.png"
      },
      {
        title: "Manage IT Services",
        text: "Our Professional Solutions",
        text2: "For IT Business",
        image_url: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/sicon1.png",
      },
      {
        title: "Product Engineering",
        text: "Our Professional Solutions",
        text2: "For IT Business",
        image_url: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/10/sicon2.png",
      },

    ]
  }
  return (
    <section className='bg-[#211E3B] py-28'>

      <span className='text-white px-2.5 py-2.5'>
        <h2 className='text-center font-bold text-sm'>{data.title}</h2>
        <h3 className='text-center text-5xl font-black'>{data.subtitle}</h3>
      </span>


      <div id="services" className='mx-auto max-w-[1210px] gap-10 grid grid-cols-4  z-10 flex relative w-full pb-6'>
        {data.blocks.map(({ title, text, text2, image_url }, index) => {
          return <div key={index} className='px-8 py-14 border border-solid border-[#312E49] hover:bg-[#2E2A50] flex flex-col items-center'>
            <img className='pb-8' src={image_url} />
            <div>
              <h3 className='text-white inline-block'>{title}</h3>
              <p className='mt-2.5 text-[#9A95C0]'>{text}</p>
              <p className='mb-2.5 text-[#9A95C0]'>{text2}</p>
              <p className='hover:bg-[#2E2A50] justify-between gap-4 font-bold pl-8 pr-8 items-center text-[#9A95C0] flex w-full text-xs'>
                LEARN MORE
                <Icon10></Icon10>
              </p>
            </div>
          </div>
        })}
      </div>
    </section>
  )
}
