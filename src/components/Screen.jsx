import React from 'react'
import Footer from './Footer'
import PlayBar from './PlayBar'
import Popular from './Popular'
import TopBar from './TopBar'

export default function Screen() {
  return (
    <div className='w-full overflow-hidden lg:overflow-visible'>
        <TopBar />
        <PlayBar />
        <Popular />
        <Footer />
    </div>
  )
}
