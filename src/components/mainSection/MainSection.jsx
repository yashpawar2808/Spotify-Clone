import React from 'react'
import './mainSection.css'
import Trending from '../trending/Trending'
import PopularArtist from '../populArartist/PopularArtist'

const MainSection = () => {
  return (
    <main className='mainSection'>
      <Trending/>
      <PopularArtist/>
    </main>
  )
}

export default MainSection