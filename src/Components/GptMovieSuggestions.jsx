import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList";
import MovieCart from './MovieCart';
const GptMovieSuggestions = () => {

const gpt = useSelector(store => store.gpt);
const { movieNames , movieData} = gpt.content ;
if(!movieNames || !movieData) return null ; 


  return (


  <div className="w-full pt-20 bg-black overflow-x-hidden  ">  
    <div className='' >
      {movieNames.map((movieName,index) =>(
        <MovieList 
        key={movieName}
        title={movieName}
        movie ={movieData[index]}
        />)
      )}
    </div>

    {    console.log(movieNames,movieData)}
</div>

  )
}  

export default GptMovieSuggestions