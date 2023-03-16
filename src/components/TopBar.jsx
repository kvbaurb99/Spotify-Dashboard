import React from 'react'
import ArtistInfo from './ArtistInfo'
import Navigation from './Navigation'
import UserBar from './UserBar'

export default function TopBar() {
  return (
    <div className='w-full lg:h-[700px] h-[400px] relative'>
      <img
        src="https://cdn.filestackcontent.com/crop=d:[0,0,1920,960]/pjpg=q:90/compress/c3lVrq3VTpOmh86aw2Dw"
        className='lg:h-[700px] h-[400px] w-full object-cover absolute'
        alt='artist'
      />
      <div className='w-full bg-black/50 h-[75px] flex items-center justify-between sticky top-0'>
        <Navigation />
        <UserBar />
      </div>
      <ArtistInfo />
    </div>
  )
}
