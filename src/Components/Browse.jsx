
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
  return (
    <div className="overflow-hidden">
      <div>
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
      </div>
    </div>
  );
};

export default Browse;
