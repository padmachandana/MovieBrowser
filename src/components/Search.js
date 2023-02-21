import { Link } from "react-router-dom";
import Hero from "./Hero";

const MovieCard = ({ movie }) => {
  var posterurl;
  if (movie.poster_path == null) {
    posterurl =
      "https://img.freepik.com/free-photo/movie-background-collage_23-2149876020.jpg?t=st=1676621843~exp=1676622443~hmac=0b689560c678290a5e673e23d886850da99a4a1540c3876912b2f7fc99634230";
  } else {
    posterurl = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;
  }

  const detailUrl = `/movies/${movie.id}`;

  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img
          src={posterurl}
          alt={movie.original_title}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{movie.original_title}</h5>

          <Link to={detailUrl} className="btn btn-primary">
            Show details
          </Link>
        </div>
      </div>
    </div>
  );
};

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  const back =
    "https://img.freepik.com/free-photo/movie-background-collage_23-2149876030.jpg";

  if (searchResults.length === 0) {
    return (
      <>
        <Hero text={title} backdrop={back} />
        <div className="text-center my-4">
          <h1>Sorry...</h1>
          <h5> we couldn't find what you are looking for.</h5>
        </div>
      </>
    );
  } else {
    const resultsHtml = searchResults.map((obj, i) => {
      return <MovieCard key={i} movie={obj} />;
    });

    return (
      <>
        <>
          <Hero text={title} backdrop={back} />

          {resultsHtml && (
            <div className="container">
              <div className="row">{resultsHtml}</div>
            </div>
          )}
        </>
      </>
    );
  }
};

export default SearchView;
