import React from 'react'
import './popularArtist.css'
import ArtistCard from '../artistCard/ArtistCard'

const PopularArtist = ({setCurrentPage}) => {
  return (
    <div className='popularArtistMainContainer trendiingSectionMainContainer'>
      <span>
        Popular artists
      </span>
      <ArtistCard setCurrentPage={setCurrentPage}/>
    </div>
  )
}

export default PopularArtist