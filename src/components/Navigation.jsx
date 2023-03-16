import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function Navigation() {
  return (
    <div className='flex gap-6 ml-[2%]'>
    <div className='text-white text-3xl bg-black/30 hover:bg-black/50 rounded-full flex justify-center items-center cursor-not-allowed duration-500 p-1'>
        <MdKeyboardArrowLeft />
    </div>
    <div className='text-white text-3xl bg-black/30 rounded-full lg:flex justify-center items-center cursor-not-allowed hover:bg-black/50 duration-500 p-1 hidden md:hidden'>
        <MdKeyboardArrowRight />
    </div>
    </div>
  )
}
