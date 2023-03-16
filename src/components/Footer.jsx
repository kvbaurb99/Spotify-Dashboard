import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai'

export default function Footer() {
  return (
    <div className='w-full h-[325px] bg-[#121212] hidden lg:flex flex-col justify-end'>
      <div className='flex text-white text-lg w-[90%] mx-auto border-b border-[#292929] py-4'>
        <div className='flex gap-12 w-full'>
          <div className='flex flex-col mb-10'>
            <p>Business</p>
            <p className='text-[#BFBFBF] text-xs mt-6 cursor-pointer hover:underline'>Information</p>
            <p className='text-[#BFBFBF] text-xs mt-4 cursor-pointer hover:underline'>Work</p>
            <p className='text-[#BFBFBF] text-xs mt-4 cursor-pointer hover:underline'>Address</p>
          </div>
          <div className='flex flex-col ml-[10%]'>
            <p>Society</p>
            <p className='text-[#BFBFBF] text-xs mt-6 cursor-pointer hover:underline'>Advertisement</p>
            <p className='text-[#BFBFBF] text-xs mt-4 cursor-pointer hover:underline'>Investors</p>
            <p className='text-[#BFBFBF] text-xs mt-4 cursor-pointer hover:underline'>Suppliers</p>
          </div>
          <div className='flex flex-col ml-[10%]'>
            <p>Useful links</p>
            <p className='text-[#BFBFBF] text-xs mt-6 cursor-pointer hover:underline'>Help</p>
            <p className='text-[#BFBFBF] text-xs mt-4 cursor-pointer hover:underline'>Contact</p>
            <p className='text-[#BFBFBF] text-xs mt-4 cursor-pointer hover:underline'>Mobile Application</p>
          </div>
        </div>
        <div className='flex text-xl gap-5 justify-end w-full'>
          <div className='bg-[#292929] h-[35px] w-[35px] flex items-center justify-center rounded-lg p-1 hover:bg-[#fff]/30 cursor-pointer'>
            <FaFacebookF className='' />
          </div>
          <div className='bg-[#292929] h-[35px] w-[35px] flex items-center justify-center rounded-lg p-1 hover:bg-[#fff]/30 cursor-pointer'>
            <AiOutlineTwitter />
          </div>
          <div className='bg-[#292929] h-[35px] w-[35px] flex items-center justify-center rounded-lg p-1 hover:bg-[#fff]/30 cursor-pointer'>
            <AiOutlineInstagram />
          </div>
        </div>
      </div>
      <div className='flex text-xs text-[#BFBFBF] w-[90%] mx-auto py-6'>
        <p>© 2023 Spotify</p>
      </div>
    </div>
  )
}
