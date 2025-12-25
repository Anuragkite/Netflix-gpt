import React, { useRef } from "react";
import { API_OPTIONS, BackGroundImageURL } from "../utils/constants";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import ai from "../utils/openAi";
import { addContent } from "../utils/GptSlice";

const GptSearchBar = () => {
  const currentLanguage = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();

  //  Search Movie from TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-in&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const searchText = useRef(null);
  const handleGptSearch = async () => {
    const query = searchText.current.value.trim();
    if (!query) return;

    // 🔹 1. Check cache FIRST
    const cachedResult = localStorage.getItem(`gpt-${query}`);
    if (cachedResult) {
      const parsedData = JSON.parse(cachedResult);
      dispatch(addContent(parsedData));
      console.log("Loaded from cache");
      return;
    }

    const movieQuery = `
Recommend exactly 5 movies based on:
"${query}"

Rules:
- Only movie names
- Comma separated
- No numbering
- No extra text
`;

    // 🔹 2. Gemini call (only if not cached)
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: movieQuery,
    });

    const gptArrResult = response.candidates[0].content.parts[0].text
      .split(",")
      .map((movie) => movie.trim())
      .filter(Boolean)
      .slice(0, 5);

    // 🔹 3. TMDB calls
    const TMDBResults = await Promise.all(
      gptArrResult.map((movie) => searchMovieTMDB(movie))
    );

    const payload = {
      movieNames: gptArrResult,
      movieData: TMDBResults,
    };

    // 🔹 4. Save to cache
    localStorage.setItem(`gpt-${query}`, JSON.stringify(payload));

    dispatch(addContent(payload));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <div className="absolute inset-0 -z-10">
        <img
          src={BackGroundImageURL}
          className="w-full h-full object-cover"
          alt="bg"
        />
      </div>

      <form
        className=" w-1/2  bg-black grid grid-cols-12 "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="col-span-9 rounded-lg px-3 my-4 border black  bg-white fl"
          placeholder={lang[currentLanguage].gptSearchPlaceholder}
        ></input>
        <button
          type="button"
          className=" col-span-3 bg-red-600 text-white rounded-lg my-4 py-4 mx-4 font-semibold text-2xl"
          onClick={handleGptSearch}
        >
          {" "}
          {lang[currentLanguage].search}{" "}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
