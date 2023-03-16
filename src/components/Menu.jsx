import React from 'react'

export default function Menu() {
  return (
    <div className='w-[250px] h-[360px] bg-[#292929] absolute top-8 left-[-4rem] z-10 rounded-lg lg:block hidden'>
        <div className='w-[80%] mx-auto flex flex-col items-center mt-2 text-xs border-b border-[#444444]'>
            <p className='cursor-pointer w-full text-center hover:bg-[#444444] py-3 rounded-lg'>Add to queue</p>
            <p className='cursor-pointer w-full text-center hover:bg-[#444444] py-3 rounded-lg'>Go to the track</p>
            <p className='cursor-pointer w-full text-center hover:bg-[#444444] py-3 rounded-lg'>Go to the artist</p>
            <p className='cursor-pointer w-full text-center hover:bg-[#444444] py-3 rounded-lg'>Go to the album</p>
            <p className='cursor-pointer w-full text-center hover:bg-[#444444] py-3 rounded-lg'>Show content authors</p>
        </div>
        <div className='w-[80%] mx-auto flex flex-col items-center mt-2 text-xs border-b border-[#444444]'>
            <p className='cursor-pointer w-full text-center hover:bg-[#444444] py-3 rounded-lg'>Add to playlist</p>
            <p className='cursor-pointer w-full text-center hover:bg-[#444444] py-3 rounded-lg'>Show content authors</p>
        </div>
        <div className='w-[80%] mx-auto flex flex-col items-center mt-2 text-xs'>
            <p className='cursor-pointer w-full text-center hover:bg-[#444444] py-3 rounded-lg'>Share</p>
        </div>
    </div>
  )
}
