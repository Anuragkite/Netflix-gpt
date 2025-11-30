import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";


const usePopularMovies = ()=>{

  
  const dispatch = useDispatch();
  
  const getPopularMovies = async () => {
    const URL = "https://api.themoviedb.org/3/movie/popular?page=1";
    const data = await fetch(URL, API_OPTIONS);
    const MovieData = await data.json();
    dispatch(addPopularMovies(MovieData.results));
    // console.log("The Tmdb Live Movies Data : ", MovieData.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

}

export default usePopularMovies;