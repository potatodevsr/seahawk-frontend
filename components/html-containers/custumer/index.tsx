import React from 'react'

export const Costumer = () => {
  const data = [
    {
      image: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/1.png",
    },
    {
      image: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/2.png",
    },
    {
      image: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/3.png",
    },
    {
      image: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/3.png",
    },
    {
      image: "https://rrdevs.net/demos/wp/techex/wp-content/uploads/2021/11/3.png",
    },
  ]



  return (
    <section id='3' className='relative px-28 grid mb-px mb-0 relative block box-bordern '>
      <div id="services" className='border-t-2 mx-auto max-w-[1210px] gap-10 grid grid-cols-5 z-10 flex relative w-full pb-6'>
        {data.map(({ image }, index) => {
          return <div key={index} className='px-7 py-14 flex flex-col items-center'>
            <img className='rounded-t-lg rounded-md' src={image} />
          </div>
        })}
      </div>
    </section>
  )
}
