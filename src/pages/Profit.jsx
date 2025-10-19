//Profit Calculator Page

import { useState } from "react";
import data from "../data/enriched-collection.json";
import "./Profit.css";

export default function Profit(props) {
  // const { data, currentGenre, onSelectMovie, onChangeGenre } = props;
  const { onSelectMovie } = props;

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
    for (let i = 0; i < data.length; i++) {
      const gross = Number(data[i].worldwide_gross);
      const budget = Number(data[i].budget);
      if (!isNaN(gross) && !isNaN(budget) && budget > 0) {
        const profitPercentage = ((gross - budget) / budget) * 100;
        if (profitPercentage < 30) {
          tempProfit.push({
            Title: data[i].title,
            Profit: profitPercentage.toFixed(2),
            idx: i,
          });
        }
      }
    }
    console.log(tempProfit);
    setProfit(tempProfit);
  }

  function findProfitMore50() {
    let tempProfit = [];
    for (let i = 0; i < data.length; i++) {
      const gross = Number(data[i].worldwide_gross);
      const budget = Number(data[i].budget);
      if (!isNaN(gross) && !isNaN(budget) && budget > 0) {
        const profitPercentage = ((gross - budget) / budget) * 100;
        if (profitPercentage > 50) {
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
    for (let i = 0; i < data.length; i++) {
      const gross = Number(data[i].worldwide_gross);
      const budget = Number(data[i].budget);
      if (!isNaN(gross) && !isNaN(budget) && budget > 0) {
        const profitPercentage = ((gross - budget) / budget) * 100;
        if (profitPercentage < 50) {
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
            {profit.map((movie, index, idx) => (
              <li id={idx} key={index}>
                {/* <button
                  className="btn text-decoration-none"
                  onClick={() => onSelectMovie(idx)}
                > */}
                <strong>{movie.Title}</strong>: {movie.Profit}% profit
                {/* </button> */}
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
        <div className="movie-display"></div>
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
