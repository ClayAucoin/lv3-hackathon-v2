//Profit Calculator Page

import { useState } from "react";
import data from "../data/enriched-collection.json";
import "./Profit.css";

export default function Profit() {
  const [profit, setProfit] = useState([]);
  // const [genre, setGenre] = useState("");
  // const [rating, setRating] = useState("");
  // const [filteredGenreList, setFilteredGenreList] = useState([]);
  // const [filteredRatingList, setFilteredRatingList] = useState([]);

  //if click genre button, filter list , show list of movies of genre
  //if click rating button, filter list, show list of ratings in order
  //calculate profit
  function findProfit30() {
    let tempProfit = [];
    // Calculate profit percentage for each movie
    for (let i = 0; i < data.length; i++) {
      // Calculate profit percentage
      const gross = Number(data[i].worldwide_gross);
      const budget = Number(data[i].budget);
      if (!isNaN(gross) && !isNaN(budget) && budget > 0) {
        //calculate profit percentage
        const profitPercentage = ((gross - budget) / budget) * 100;
        //check if profit percentage is less than 30%
        if (profitPercentage < 30) {
          //push movie title and profit percentage to tempProfit array
          tempProfit.push({
            Title: data[i].title,
            Profit: profitPercentage.toFixed(2),
          });
        }
      }
    }
    console.log(tempProfit);
    setProfit(tempProfit);
  }

  function findProfitMore50() {
    let tempProfit = [];
    // Calculate profit percentage for each movie
    for (let i = 0; i < data.length; i++) {
      // Calculate profit percentage
      const gross = Number(data[i].worldwide_gross);
      const budget = Number(data[i].budget);
      if (!isNaN(gross) && !isNaN(budget) && budget > 0) {
        //calculate profit percentage
        const profitPercentage = ((gross - budget) / budget) * 100;
        //check if profit percentage is more than 50%
        if (profitPercentage > 50) {
          //push movie title and profit percentage to tempProfit array
          tempProfit.push({
            Title: data[i].title,
            Profit: profitPercentage.toFixed(2),
          });
        }
      }
    }
    console.log(tempProfit);
    setProfit(tempProfit);
  }

  function findProfit50() {
    let tempProfit = [];
    // Calculate profit percentage for each movie
    for (let i = 0; i < data.length; i++) {
      // Calculate profit percentage
      const gross = Number(data[i].worldwide_gross);
      const budget = Number(data[i].budget);
      if (!isNaN(gross) && !isNaN(budget) && budget > 0) {
        //calculate profit percentage
        const profitPercentage = ((gross - budget) / budget) * 100;
        //check if profit percentage is 50%
        if (profitPercentage < 50) {
          //push movie title and profit percentage to tempProfit array
          tempProfit.push({
            Title: data[i].title,
            Profit: profitPercentage.toFixed(2),
          });
        }
      }
    }
    console.log(tempProfit);
    setProfit(tempProfit);
  }

  // //filter genre and rating functions
  // function handleGenre() {
  //   for (let i = 0; i < data.length; i++) {
  //     if (genre === data[i].genre) {
  //      genreTemp.push(data[i].genre);
  //     }
  //   }
  //    setFilteredGenreList(genreTemp);
  //       console.log(genreTemp);

  // }

  // function MovieDisplay() {
  //   return (
  //     <>
  //       <h3>List of Movies</h3>
  //       {setGenre}
  //       {setRating}
  //       <div className="MovieListOutput"></div>
  //     </>
  //   );
  // }

  // function handleRating() {
  //   for (let i = 0; i < data.length; i++) {
  //     if (rating === data[i].rating) {
  //       setFilteredRatingList(filteredRatingList);
  //       console.log(filteredRatingList);
  //     }
  //   }

  // }

  //Profit Button component
  function Buttons() {
    return (
      <>
        <button className="button" onClick={() => findProfit30()}>
          Less than 30%
        </button>
        <button className="button" onClick={() => findProfit50()}>
          50%
        </button>
        <button className="button" onClick={() => findProfitMore50()}>
          More than 50%
        </button>
      </>
    );
  }

  //Profit Output component
  function ProfitScreen() {
    return (
      <>
        <h3>Profit Results:</h3>
        {profit.length > 0 ? (
          <ul>
            {profit.map((movie, index) => (
              <li key={index}>
                <strong>{movie.Title}</strong>: {movie.Profit}% profit
              </li>
            ))}
          </ul>
        ) : (
          <h1>
            No Profit Data Available - Please Click a Profit Percentage Button
          </h1>
        )}
      </>
    );
  }

  return (
    <>
      <div className="profitPage">
        <h1>Movies by Profit</h1>
        {/* <h2>Less than 30% Profit Range</h2>
        <div className="filter-container">
          <h3>Filter By:</h3>
          <button className="button" onClick={handleGenre}>Genre</button>
          <button className="button" onClick={handleRating}>Rating</button>
        </div> */}
        <div className="movie-display">
          {/* <MovieDisplay /> */}
          {/* {filteredGenreList} */}
        </div>
        <div className="profit-output">
          <ProfitScreen />
        </div>
        <div className="profitButton-container">
          <Buttons />
        </div>
      </div>
    </>
  );
}
