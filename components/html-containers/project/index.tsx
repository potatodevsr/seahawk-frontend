import React from 'react'
import { Icon5 } from '../../../pages/icon5'
import { Icon6 } from '../../../pages/icon6'
import { Icon7 } from '../../../pages/icon7'
import { Icon8 } from '../../../pages/icon8'

export const Project = () => {
  const data = [
    {

      score: "368",
      text: "Project Completed",
    },

    {

      score: "785",
      text: "Expert Consultants",
    },

    {

      score: "897",
      text: "5 Stars Rating",
    },

    {

      score: "125",
      text: "Awards Winning",
    },
  ]

  return (
    <section className='-mt-20 mx-10 bg-[#086AD7] rounded-lg z-10'>
      <div id="services" className='pt-16 grid grid-cols-4  z-10 flex relative w-full pb-6'>
        {data.map(({ score, text }, index) => {
          return <div key={index} className='py-4 px-8 text-white flex flex-col items-center'>
            <Icon5></Icon5>
            <div>
              <span className='text-3xl font-medium pl-20 text-white'>+</span>
              <h1 className='font-medium text-6xl text-white text-center'>{score}</h1>
              <h3 className='pb-16 text-white text-center'>{text}</h3>
            </div>
          </div>
        })}
      </div>
    </section>
  )
}

export default Project