import React from 'react'

export default function UserMenu() {
  return (
    <div className='absolute top-[50px] right-0 bg-[#292929] w-[200px] h-[240px] rounded text-white'>
        <div className='w-[95%] mx-auto mt-1 border-b border-[#444444] text-sm'>
            <p className='p-3 hover:bg-[#444444] cursor-pointer rounded'>Account</p>
            <p className='p-3 hover:bg-[#444444] cursor-pointer rounded'>Profile</p>
            <p className='p-3 hover:bg-[#444444] cursor-pointer rounded'>Private session</p>
            <p className='p-3 hover:bg-[#444444] cursor-pointer rounded'>Settings</p>
        </div>
        <div className='w-[95%] mx-auto mt-1 text-sm'>
            <p className='p-3 hover:bg-[#444444] cursor-pointer rounded'>Log out</p>
        </div>
    </div>
  )
}
