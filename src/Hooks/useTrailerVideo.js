import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
      const json = await response.json();

      if (!json || !json.results) return;

      const filterData = json.results.filter((video) => video.type === "Trailer");
      
      // Safety check using .length as discussed previously
      const trailer = filterData.length ? filterData[0] : json.results[0];
      
      // Dispatch to Redux Store
      dispatch(addTrailerVideo(trailer));
      
    } catch (error) {
      console.error("Error fetching trailer:", error);
    }
  };

  useEffect(() => {
    // Only fetch if movieId is present
    if (movieId) {
      getMovieVideos();
    }
  }, [movieId]); // Added dependency to refetch if movie changes
};

export default useTrailerVideo;