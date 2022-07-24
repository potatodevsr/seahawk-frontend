import React from 'react'

export const Costumer = ({ data }) => {
  return ( 
    <section className='relative px-28 grid mb-px mb-0 relative block box-bordern '>
      <div className='border-t-2 mx-auto max-w-[1210px] gap-10 grid grid-cols-5 z-10 flex relative w-full pb-6'>
        {data?.map(({ image } ,index) => {
          return <div className='px-7 py-14 flex flex-col items-center'>
            <img className='rounded-t-lg rounded-md' src={'http://localhost:1337' + image.data.attributes.url} />
          </div>
        })}
      </div>
    </section>
  )
}
