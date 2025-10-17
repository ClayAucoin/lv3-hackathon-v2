import "./MovieView.css";
import MovieClip from "../components/MovieClip";

export default function MovieView(props) {
  // retrieve props
  const { movieIndex, data, onBackHome, currentGenre } = props;
  const index = Number.isInteger(movieIndex) ? movieIndex : 0;

  console.log(index);
  const movie = data[index];
  if (!movie) {
    return <p>No movie selected</p>;
  }

  function MovieTitle() {
    return (
      <div className="col-12 col-md-6">
        <h1 className="movie-title">
          {data[index].title} ({Math.trunc(data[index].year)})
        </h1>
      </div>
    );
  }

  return (
    <>
      <div className="containter">
        <div className="my-container">
          <header className="mb-3">
            <div className="mv-toolbar">
              <button className="btn btn-primary" onClick={onBackHome}>
                ← Back to Home
              </button>
              {currentGenre && (
                <span className="badge">Genre: {currentGenre}</span>
              )}
            </div>
            <div className="row g-3 align-items-center">
              <MovieTitle />
              <div className="col-12 col-md-6 text-md-end">
                <div className="d-flex row justify-content-end">
                  <div className="col-6">
                    <div className="page-title">
                      <h1>Oby-Aucoin's</h1>
                      <h4>Movie List</h4>
                      <p>
                        Current #{index + 1} of {data.length - 1} Movies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main>
            <article>
              <section className="image">
                <img className="img-fluid" src={data[index].poster} />
              </section>
              <section className="trailer">
                <MovieClip
                  trailerId={data[index].yt_trailer_id}
                  movie={data[index].title}
                />
              </section>
            </article>

            <article className="d-flex align-items-start gap-4 flex-nowrap info">
              <section className="description text-start">
                <p>{data[index].description}</p>
              </section>

              <section className="details-pane d-flex text-start">
                <div className="details">
                  <ul>
                    <li>
                      <b>4Producers:</b> {data[index].producers}
                    </li>
                    <li>
                      <b>Directors:</b> {data[index].directors}
                    </li>
                    <li>
                      <b>Stars:</b> {data[index].stars}
                    </li>
                  </ul>
                </div>
                <div className="details">
                  <ul>
                    <li>
                      <b>Released:</b> {formatDate(data[index].released)}
                    </li>
                    <li>
                      <b>Runtime:</b> {data[index].runtime}
                    </li>
                    <li>
                      <b>Rating:</b> {data[index].rating}
                    </li>
                    <li>
                      <b>Genre(s):</b> {formatGenres(data[index].genres)}
                    </li>
                    {data[index].budget !== "-" && (
                      <li>
                        <b>Budget:</b> {convertToCurrency(data[index].budget)}
                      </li>
                    )}
                    {data[index].worldwide_gross !== "-" && (
                      <li>
                        <b>Gross:</b>{" "}
                        {convertToCurrency(data[index].worldwide_gross)}
                      </li>
                    )}
                  </ul>
                </div>
              </section>
            </article>
          </main>
        </div>
      </div>
    </>
  );
}

function convertToCurrency(amount) {
  const usdFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount);

  return usdFormatted;
}

function formatGenres(genreString) {
  if (!genreString) return "";
  return genreString
    .split(",")
    .map((g) => g.trim())
    .map((g) => g.charAt(0).toUpperCase() + g.slice(1))
    .join(", ");
}

function formatDate(dateStr) {
  if (!dateStr) return "";

  const date = new Date(dateStr);
  if (isNaN(date)) return dateStr;

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
