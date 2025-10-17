import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import MovieView from "./pages/MovieView";
import data from "./data/enriched-collection.json";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  const [currentGenre, setCurrentGenre] = useState("");

  function goToHome() {
    setCurrentPage("home");
  }

  let pageContent = <Home data={data} onSelectMovie={handleSelectMovie} />;

  if (currentPage === "home") {
    pageContent = (
      <Home
        data={data}
        onSelectMovie={handleSelectMovie}
        currentGenre={currentGenre}
        onChangeGenre={setCurrentGenre}
      />
    );
  }

  if (currentPage === "movieview") {
    pageContent = (
      <MovieView
        movieIndex={selectedMovieIndex}
        onBackHome={goToHome}
        currentGenre={currentGenre}
      />
    );
  }

  function handleSelectMovie(index) {
    setSelectedMovieIndex(index);
    setCurrentPage("movieview");
  }

  return (
    <>
      {/* <button type="button" onClick={goToHome}>
        Home
      </button> */}
      {pageContent}
    </>
  );
}

export default App;
