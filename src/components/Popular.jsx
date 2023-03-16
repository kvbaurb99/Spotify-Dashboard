import React, { useState } from 'react'
import data from './data/data.json'
import PopularSong from './PopularSong'

export default function Popular() {
  const [numToShow, setNumToShow] = useState(5)
  const [showMore, setShowMore] = useState(true)

  const handleShowMore = () => {
    setNumToShow(numToShow + 5)
    setShowMore(false)
  }

  const handleShowLess = () => {
    setNumToShow(5)
    setShowMore(true)
  }

  return (
    <div className='w-full bg-[#121212] h-full mt-5'>
      <div className='lg:ml-[3%]'>
        <p className='text-white text-xl ml-5 lg:ml-0'>Popular now</p>
        <div className='mt-5'>
          {data.slice(0, numToShow).map(song => (
            <PopularSong
              key={song.title}
              position={song.position}
              title={song.title}
              listeners={song.listeners}
              time={song.time}
              image={song.image}
            />
          ))}
        </div>
        {showMore ? (
          <p className='text-[#BFBFBF] text-sm mt-6 cursor-pointer hover:text-white lg:block hidden' onClick={handleShowMore}>
            Show more
          </p>
        ) : (
          <p className='text-[#BFBFBF] text-sm mt-6 cursor-pointer hover:text-white lg:block hidden' onClick={handleShowLess}>
            Show less
          </p>
        )}
      </div>
    </div>
  )
}
