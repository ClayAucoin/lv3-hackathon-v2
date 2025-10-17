import React from "react";
import "./Home.css";

export default function Home(props) {
  const { data, currentGenre, onSelectMovie, onChangeGenre } = props;

  // build unique genre list
  const allGenres = Array.from(
    new Set(
      data
        .flatMap((r) => (r.genres || "").split(","))
        .map((g) => g.trim().toLowerCase())
        .filter(Boolean)
    )
  )
    .map((g) => g.charAt(0).toUpperCase() + g.slice(1))
    .sort((a, b) => a.localeCompare(b));

  // build genre buttons
  const genreButtonsJSX = [];
  for (let i = 0; i < allGenres.length; i++) {
    genreButtonsJSX.push(
      <button
        key={allGenres[i]}
        id={allGenres[i]}
        onClick={() => currentGenreClick(allGenres[i])}
        className={`btn btn-primary ${
          allGenres[i] === currentGenre ? "is-active" : ""
        }`}
      >
        {allGenres[i]}
      </button>
    );
  }

  // build movie grid according to currentGenre
  let movieGridJSX = [];
  for (let i = 0; i < data.length; i++) {
    const movie = data[i];
    const movieGenres = movie.genres || "";

    if (movieGenres.includes(currentGenre.toLowerCase())) {
      movieGridJSX.push(
        <img
          key={i}
          onClick={() => onSelectMovie(i)}
          className="movie-grid"
          src={movie.poster}
          alt={movie.title}
        />
      );
    }
  }

  // filter: get qty of movies in current genre
  const matchingMovies = data.filter((movie) =>
    (movie.genres || "")
      .toLowerCase()
      .split(",")
      .map((genre) => genre.trim())
      .includes(currentGenre.toLowerCase())
  );

  // handle genre navigation buttons
  function firstGenre() {
    if (allGenres.length) onChangeGenre(allGenres[0]);
  }

  function lastGenre() {
    if (allGenres.length) onChangeGenre(allGenres[allGenres.length - 1]);
  }

  function nextGenre() {
    if (!allGenres.length) return;
    const i = allGenres.indexOf(currentGenre);
    const next = i === -1 ? 0 : Math.min(i + 1, allGenres.length - 1);
    onChangeGenre(allGenres[next]);
  }

  function prevGenre() {
    if (!allGenres.length) return;
    const i = allGenres.indexOf(currentGenre);
    const prev = i === -1 ? 0 : Math.max(i - 1, 0);
    onChangeGenre(allGenres[prev]);
  }

  function currentGenreClick(genre) {
    onChangeGenre(genre);
  }

  return (
    <>
      <div className="containter">
        <main>
          <header className="mb-3">
            <div className="row">
              <div className="col-4 align-self-center page-title">
                <h1>Oby-Aucoin's</h1>
                <h4>Movie List</h4>
              </div>
              <div className="col-8">
                <section className="d-flex justify-content-center genre-btns">
                  <div className="genre-flex">{genreButtonsJSX}</div>
                </section>
              </div>
            </div>
          </header>

          <article>
            <section className="current-genre">
              {currentGenre && (
                <h1>
                  {currentGenre} ({matchingMovies.length})
                </h1>
              )}

              {currentGenre && (
                <div className="genre-nav-buttons">
                  <button className="genre-nav-button" onClick={firstGenre}>
                    ⏮
                  </button>
                  <button className="genre-nav-button" onClick={prevGenre}>
                    ◀
                  </button>
                  <button className="genre-nav-button" onClick={nextGenre}>
                    ▶
                  </button>
                  <button className="genre-nav-button" onClick={lastGenre}>
                    ⏭
                  </button>
                </div>
              )}
            </section>
            {currentGenre && (
              <section className="movie-grid justify-content-center">
                {movieGridJSX}
              </section>
            )}
          </article>
        </main>
      </div>
    </>
  );
}
