export const BackGroundImageURL =
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop";
export const ProfilePictures =
  "https://i.pinimg.com/736x/72/84/57/7284572aec920044b28338a777a4f81e.jpg";
  // TMDB api options
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzM1OGVlYjcwNDg5MzY2MGIwNjE1MWM2NDYzZjJmYiIsIm5iZiI6MTc2NDM0NjYzNy42OTIsInN1YiI6IjY5MjljYjBkZmVmYjcwNTAxNDI2YzkzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ghqmIl6uY03fOWzaA9pwws4qFG3PEUD3OxMAd9PJObI",
  },
};

export const TMDB_POSTER_CDN_URL = "https://image.tmdb.org/t/p/w500";

// creating This for identifying the languages which are header.js , so we don't use the hardcoded things
export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
  

// export const GEMINI_KEYS="AIzaSyAL101QqK23Blx0BAktxMbhuFhcm8WYCw8";
export const GEMINI_KEYS = "AIzaSyBNg9cp-mM77kUzpBUsdl5buzUsbX1-Sdo"