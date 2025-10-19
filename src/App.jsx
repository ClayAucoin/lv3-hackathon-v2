import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import MovieView from "./pages/MovieView";
import data from "./data/enriched-collection.json";
import Profit from "./pages/Profit";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(0);
  const [currentGenre, setCurrentGenre] = useState("");

  function goToHome() {
    setCurrentPage("home");
  }

  function goToProfit() {
    setCurrentPage("profit");
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

  if (currentPage === "profit") {
    pageContent = <Profit onSelectMovie={handleSelectMovie} />;
  }

  function handleSelectMovie(index) {
    setSelectedMovieIndex(index);
    setCurrentPage("movieview");
  }

  return (
    <>
      <button type="button" onClick={goToHome}>
        Home
      </button>
      <button type="button" onClick={goToProfit}>
        Profit Calculator
      </button>{" "}
      {pageContent}
    </>
  );
}

export default App;
