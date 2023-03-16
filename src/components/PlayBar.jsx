import React from 'react'
import { BsFillPlayFill, BsThreeDots } from 'react-icons/bs'

export default function PlayBar() {
  return (
    <div className='w-full h-[100px] bg-gradient-to-b  bg-[#121212] flex gap-5 lg:gap-10 items-center'>
        <div className='bg-[#1db954] w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] flex items-center justify-center rounded-full hover:scale-105 ml-[3%]'>
            <BsFillPlayFill className='text-3xl lg:text-4xl' />
        </div>
        <div className='text-white p-1 px-5 border border-[#b3b3b3] hover:border-white cursor-pointer'>
            <p className='text-sm tracking-widest'>Follow</p>
        </div>
        <div className='text-[#b3b3b3] hover:text-white'>
            <BsThreeDots className='text-2xl' />
        </div>
    </div>
  )
}
