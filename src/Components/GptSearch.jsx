import React, { useEffect } from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'

const GptSearch = () => {
  useEffect(() => {
    // we unmount the scroll property given by body 
    // then we add the hidden on the current page only 
    // on unmounting we add the prev body property to rest of pages 
    const prev = document.body.style.overflowX;
    document.body.style.overflowX = 'hidden';
    // On unmounting we added this 
    return () => {
      document.body.style.overflowX = prev;
    };
  }, []);

  return (
    <div>
      <div className='overflow-x-hidden'>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  )
}

export default GptSearch