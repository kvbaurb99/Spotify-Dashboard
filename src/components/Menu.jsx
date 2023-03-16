import React from 'react'

export default function Menu() {
  return (
    <div className='w-[250px] h-[330px] bg-[#292929] absolute bottom-6 left-[-8rem] z-10 rounded-lg lg:block hidden'>
        <div className='w-[80%] mx-auto flex flex-col mt-2 text-sm border-b border-[#444444]'>
          <p className='cursor-pointer w-full hover:bg-[#444444] py-2 px-2 rounded-lg'>Add to queue</p>
        </div>
        <div className='w-[80%] mx-auto flex flex-col mt-2 text-sm border-b border-[#444444]'>
            <p className='cursor-pointer w-full  hover:bg-[#444444] py-2 px-2 rounded-lg'>Go to the track</p>
            <p className='cursor-pointer w-full  hover:bg-[#444444] py-2 px-2 rounded-lg'>Go to the artist</p>
            <p className='cursor-pointer w-full  hover:bg-[#444444] py-2 px-2 rounded-lg'>Go to the album</p>
            <p className='cursor-pointer w-full  hover:bg-[#444444] py-2 px-2 rounded-lg'>Show content authors</p>
        </div>
        <div className='w-[80%] mx-auto flex flex-col items-center mt-2 text-sm border-b border-[#444444]'>
            <p className='cursor-pointer w-full hover:bg-[#444444] py-2 px-2 rounded-lg'>Add to playlist</p>
            <p className='cursor-pointer w-full hover:bg-[#444444] py-2 px-2 rounded-lg'>Show content authors</p>
        </div>
        <div className='w-[80%] mx-auto flex flex-col items-center mt-2 text-sm'>
            <p className='cursor-pointer w-full hover:bg-[#444444] py-2 rounded-lg px-2'>Share</p>
        </div>
    </div>
  )
}
