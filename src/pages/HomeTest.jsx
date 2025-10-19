import "./Home.css";

export default function Home({
  data,
  allGenres,
  currentGenre,
  onChangeGenre,
  onSelectMovie,
  onFirstGenre,
  onPrevGenre,
  onNextGenre,
  onLastGenre,
}) {
  let movieGridJSX = [];
  for (let i = 0; i < data.length; i++) {
    const movie = data[i];
    const movieGenres = movie.genres || "";

    if (
      movieGenres
        .toLowerCase()
        .split(",")
        .map((g) => g.trim())
        .includes(currentGenre.toLowerCase())
    ) {
      movieGridJSX.push(
        <img
          key={i}
          onClick={() => onSelectMovie(i)}
          id={i}
          className="movie-grid"
          src={movie.poster}
          alt={movie.title}
        />
      );
    }
  }

  const matchingMovies = data.filter((m) =>
    (m.genres || "")
      .toLowerCase()
      .split(",")
      .map((g) => g.trim())
      .includes(currentGenre.toLowerCase())
  );

  return (
    <>
      <div className="containter">
        <div className="my-container">
          <header className="mb-3">
            <div className="page-title">
              <h1>Oby-Aucoin's</h1>
              <h4>Movie List</h4>
              <h4>HomeTest</h4>
            </div>
          </header>
          <main>
            <article>
              <section className="d-flex justify-content-center genre-btns">
                <div
                  className="genre-flex"
                  style={{
                    display: "flex",
                    gap: 8,
                    flexWrap: "wrap",
                    marginTop: 12,
                  }}
                >
                  {allGenres.map((g) => (
                    <button
                      key={g}
                      onClick={() => onChangeGenre(g)}
                      className={g === currentGenre ? "is-active" : ""}
                    >
                      {g}
                    </button>
                  ))}
                </div>{" "}
              </section>
              <section className="current-genre">
                {currentGenre && (
                  <h1>
                    {currentGenre} ({matchingMovies.length})
                  </h1>
                )}

                {currentGenre && (
                  <div className="genre-nav-buttons">
                    <button className="genre-nav-button" onClick={onFirstGenre}>
                      ⏮
                    </button>
                    <button className="genre-nav-button" onClick={onPrevGenre}>
                      ◀
                    </button>
                    <button className="genre-nav-button" onClick={onNextGenre}>
                      ▶
                    </button>
                    <button className="genre-nav-button" onClick={onLastGenre}>
                      ⏭
                    </button>
                  </div>
                )}
              </section>
              {currentGenre && (
                <section className="movie-grid">{movieGridJSX}</section>
              )}
            </article>
          </main>
        </div>
      </div>
    </>
  );
}
