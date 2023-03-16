import React from 'react'

export default function ArtistInfo() {
  return (
    <div className='absolute text-white top-[65%] lg:top-1/2 px-5 lg:px-10'>
        <div className='flex items-center'>
            <img src="https://www.genzhiphop.com/wp-content/uploads/2021/09/Legitly-Verified-Blue-Badge-top-page.png" alt="check" className='lg:w-[40px] w-[25px] object-cover' />
            <p className='text-sm lg:text-base tracking-wider'>Verified artist</p>
        </div>
        <p className='font-bold text-4xl lg:text-8xl mt-4'>Ariana Grande</p>
        <p className='text-base mt-4 lg:mt-8'>79 319 182 listeners in this month</p>
    </div>
  )
}
