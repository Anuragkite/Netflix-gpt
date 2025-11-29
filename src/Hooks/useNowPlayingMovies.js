import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";


const useNowPlayingMovies = ()=>{

  
  const dispatch = useDispatch();
  
  const getNowPlayingMovies = async () => {
    const URL = "https://api.themoviedb.org/3/movie/now_playing?page=1";
    const data = await fetch(URL, API_OPTIONS);
    const MovieData = await data.json();
    dispatch(addNowPlayingMovies(MovieData.results));
    console.log("The Tmdb Live Movies Data : ", MovieData.results);
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

}

export default useNowPlayingMovies;