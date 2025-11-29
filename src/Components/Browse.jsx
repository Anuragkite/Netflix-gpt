
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";


const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <div>
        <Header />
      </div>
    </div>
  );
};

export default Browse;
