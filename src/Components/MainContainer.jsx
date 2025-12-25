import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from "./VideoTitle";
import VideoBg from "./VideoBg";
const MainContainer = () => {
    const movies = useSelector(store => store?.movie?.nowPlayingMovies);

    if (movies === null ) return ; 
    // console.log(movies );
    const mainMovie = movies[0];
  
    const {original_title , overview ,id
 } = mainMovie;

  return (
    <div className='relative h-[90vh] '>
        <VideoTitle title = {original_title} overview={overview}/>
        <VideoBg movieId = {id}/>
    </div>
  )
}

export default MainContainer