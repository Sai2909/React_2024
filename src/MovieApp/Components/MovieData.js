import { useState } from "react";
import SearchBar from "./SearchBar";
import MovieCard from "./MovieCard";


function MovieData() {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to fetch data with debouncing
  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://omdbapi.com/?s=${searchMovie}&apikey=112b26a6`,
      );
      const data = await res.json();
      setAllMovieData(data.Search);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  console.log(allMovieData);
  return (
    <div className="bg">
      <SearchBar
        searchMovie={searchMovie}
        setSearchMovie={setSearchMovie}
        fetchMovieData={fetchMovieData}
      />
      <MovieCard allMovieData={allMovieData} loading={loading} />
    </div>
  );
}

export default MovieData;