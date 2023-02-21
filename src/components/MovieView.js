import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const MovieView = () => {
  const { id } = useParams();
  const [movieDatails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=01957ee3309bafdb81238954f4159e50&language=en-US`
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
        setIsLoading(false);
      });
  }, [id]); //any time id changes

  function renderMovieDetails() {
    if (isLoading) {
      return <Hero text="Loading..." />;
    }
    var poster_path, backdropUrl;
    if (movieDatails) {
      if (movieDatails.poster_path == null) {
        poster_path =
          "https://img.freepik.com/free-photo/movie-background-collage_23-2149876020.jpg?t=st=1676621843~exp=1676622443~hmac=0b689560c678290a5e673e23d886850da99a4a1540c3876912b2f7fc99634230";
      } else {
        poster_path = `http://image.tmdb.org/t/p/w500${movieDatails.poster_path}`;
      }
      if (movieDatails.backdrop_path == null) {
        backdropUrl =
          "https://img.freepik.com/free-photo/movie-background-collage_23-2149876030.jpg";
      } else {
        backdropUrl = `http://image.tmdb.org/t/p/w500${movieDatails.backdrop_path}`;
      }

      return (
        <>
          <Hero text={movieDatails.original_title} backdrop={backdropUrl} />
          <div className="container my-5">
            <div className="row">
              <div className="col-md-3">
                <img
                  src={poster_path}
                  alt="imageNot found"
                  className="image-fluid show rounded"
                />
              </div>
              <div className="col-md-9"></div>
              <h2>{movieDatails.original_title}</h2>
              <p className="lead">{movieDatails.overview}</p>
            </div>
          </div>
        </>
      );
    }
  }
  return renderMovieDetails();
};
export default MovieView;
