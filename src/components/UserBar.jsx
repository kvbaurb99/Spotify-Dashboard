import React, { useState } from 'react'
import { RiArrowDownSFill, RiArrowUpSFill } from 'react-icons/ri'
import UserMenu from './UserMenu'

export default function UserBar() {

    const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='w-[200px] h-[40px] bg-black/70 mr-[2%] rounded-full hidden lg:flex items-center relative'>
    <div className='ml-[2%]'>
        <img src="https://i.pinimg.com/236x/f1/f8/66/f1f8664a405b24203b08d381836afc70.jpg" alt='user' className='h-[35px] rounded-full' />
    </div>
    <div className='text-white text-xs tracking-wider ml-5 flex items-center'>
        <p>Julita Gomez</p>
        {showMenu ? <RiArrowUpSFill onClick={() => setShowMenu(!showMenu)} className='text-2xl ml-4 cursor-pointer' /> : <RiArrowDownSFill onClick={() => setShowMenu(!showMenu)} className='text-2xl ml-4 cursor-pointer'/>}
    </div>
        {showMenu ? <UserMenu /> : null}
    </div>
  )
}
