
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <div>
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
      </div>
    </div>
  );
};

export default Browse;
