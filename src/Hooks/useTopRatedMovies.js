import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTRMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const URL = "https://api.themoviedb.org/3/movie/top_rated?page=1";
    const data = await fetch(URL, API_OPTIONS);
    const MovieData = await data.json();
    dispatch(addTRMovies(MovieData.results));
    // console.log("The Tmdb Live Movies Data : ", MovieData.results);
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};
export default useTopRatedMovies;
